"use client";

import { Button } from "@/components/shared/button/Button";
import { rawAction } from "./actions";

export const RawAction = () => {
    return <Button onClick={rawAction}>Execute (raw) server action</Button>;
};
