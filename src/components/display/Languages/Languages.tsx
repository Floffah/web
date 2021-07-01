import React, { FC } from "react";
import { trpc } from "../../../lib/trpc/hooks";

const Languages: FC = (_p) => {
    const e = trpc.useQuery(["getLanguages"]);

    console.log(e.data);

    return <></>;
};

export default Languages;
