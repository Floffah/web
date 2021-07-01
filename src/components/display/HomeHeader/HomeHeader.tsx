import React, { FC, useEffect, useState } from "react";
import {
    HeaderButtons,
    HeaderImage,
    HeaderTitles,
    HomeHeaderContainer,
    HomeHeaderMiddleContent,
} from "./HomeHeader.styles";
import HomeHeaderButton from "./HomeHeaderButton";
import { mdiDiscord, mdiGithub, mdiLightbulb } from "@mdi/js";

const HomeHeader: FC = () => {
    const [isMiniMode, setMiniMode] = useState(false);

    useEffect(() => {
        const listener = () => {
            if (!isMiniMode && window.innerWidth <= 930) setMiniMode(true);
            else if (isMiniMode && window.innerWidth > 930) setMiniMode(false);
        };

        window.addEventListener("resize", listener);

        return () => window.removeEventListener("resize", listener);
    });

    return (
        <HomeHeaderContainer>
            <HomeHeaderMiddleContent>
                <HeaderImage
                    src="/android-chrome-192x192.png"
                    width={175}
                    height={175}
                />
                <HeaderTitles>
                    <h1>Floffah</h1>
                    <p>Full stack web developer from Scotland</p>
                </HeaderTitles>
                {!isMiniMode && (
                    <HeaderButtons>
                        <HomeHeaderButton
                            link="https://github.com/Floffah"
                            icon={mdiGithub}
                        >
                            GitHub
                        </HomeHeaderButton>
                        <HomeHeaderButton
                            link="https://discord.gg/bc8Y2y9"
                            icon={mdiDiscord}
                        >
                            Discord
                        </HomeHeaderButton>
                        <HomeHeaderButton
                            icon={mdiLightbulb}
                            onClick={() =>
                                document
                                    .getElementById("floffah-projects-marker")
                                    ?.scrollTo()
                            }
                        >
                            Projects
                        </HomeHeaderButton>
                    </HeaderButtons>
                )}
            </HomeHeaderMiddleContent>
        </HomeHeaderContainer>
    );
};

export default HomeHeader;
