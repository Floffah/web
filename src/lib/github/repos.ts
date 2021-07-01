import axios from "axios";

export const gql = (strings: TemplateStringsArray, ...other: string[]) => {
    let final = "";

    for (let i = 0; i < strings.length; i++) {
        const string = strings[i];

        final += string;

        if (other[i]) final += other[i];
    }

    return final;
};

export async function authenticatedRequest(
    query: string,
    variables: any | undefined,
    token: string,
) {
    return (
        await axios.post(
            "https://api.github.com/graphql",
            {
                query,
                variables,
            },
            {
                headers: {
                    Authorization: `bearer ${token}`,
                },
                responseType: "json",
            },
        )
    ).data;
}

export async function calculateMostUsedLanguages(
    user: string,
    ghtoken: string,
) {
    const count = await authenticatedRequest(
        gql`
            query GetTotalCount($user: String!) {
                user(login: $user) {
                    repositories {
                        totalCount
                    }
                }
            }
        `,
        { user },
        ghtoken,
    );

    const totalCount = count.data.user.repositories.totalCount;
    if (!totalCount) throw new Error("No total count");

    const finalAllRepos: {
        primaryLanguage: { name: string; color: string };
        languages: { nodes: { name: string; color: string }[] };
    }[] = [];

    let endCursor: string | undefined = undefined;
    let left = totalCount as number;
    let hasNextPage = true;

    while (hasNextPage) {
        const allRepos: any = await authenticatedRequest(
            gql`
                query GetAllRepositories(
                    $user: String!
                    $first: Int!
                    $after: String
                ) {
                    user(login: $user) {
                        repositories(first: $first, after: $after) {
                            nodes {
                                isFork
                                primaryLanguage {
                                    name
                                    color
                                }
                                languages(first: 5) {
                                    nodes {
                                        color
                                        name
                                    }
                                }
                            }
                            pageInfo {
                                endCursor
                                hasNextPage
                            }
                        }
                    }
                }
            `,
            {
                user,
                first: left > 100 ? 100 : left,
                after: endCursor,
            },
            ghtoken,
        );

        const arr: any[] = allRepos.data.user.repositories.nodes;

        endCursor = allRepos.data.user.repositories.pageInfo.endCursor;
        hasNextPage = allRepos.data.user.repositories.pageInfo.hasNextPage;
        if (arr === null) break;

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].isFork) finalAllRepos.push(arr[i]);
        }

        if (left >= 100) left -= 100;
        else if (left < 100) left = 0;
    }

    const languages: { [lang: string]: { color: string; amt: number } } = {};
    let total = 0;

    for (const repo of finalAllRepos) {
        let counted = false;
        if (repo.primaryLanguage) {
            total += 1;
            counted = true;
            if (languages[repo.primaryLanguage.name]) {
                languages[repo.primaryLanguage.name].amt += 1;
            } else {
                languages[repo.primaryLanguage.name] = {
                    amt: 1,
                    color: repo.primaryLanguage.color,
                };
            }
        }
        if (repo.languages && repo.languages.nodes) {
            if (!counted) total += 1;
            for (const lang of repo.languages.nodes) {
                if (
                    repo.primaryLanguage &&
                    repo.primaryLanguage.name === lang.name
                )
                    continue;
                if (languages[lang.name]) {
                    languages[lang.name].amt += 1;
                } else {
                    languages[lang.name] = {
                        amt: 1,
                        color: lang.color,
                    };
                }
            }
        }
    }

    return { total, languages };
}
