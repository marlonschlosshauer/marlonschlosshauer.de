"use client";

import { Button } from "@/components/shared/button/Button";
import { unstableAction } from "./actions";

export const UnstableAction = () => {
    return <Button onClick={unstableAction}>Execute (unstable cache) server action</Button>;
};
