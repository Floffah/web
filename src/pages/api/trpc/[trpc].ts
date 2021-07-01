import { router } from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { calculateMostUsedLanguages } from "../../../lib/github/repos";
//import { z } from "zod";

const appRouter = router().query("getLanguages", {
    async resolve() {
        if (!process.env.GITHUB_TOKEN) throw new Error("No github token");

        return await calculateMostUsedLanguages(
            "floffah",
            process.env.GITHUB_TOKEN,
        );
    },
});

export type AppRouter = typeof appRouter;

export default createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});
