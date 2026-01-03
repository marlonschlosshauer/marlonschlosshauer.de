"use client";

import { Button } from "@/components/shared/button/Button";
import { wasteTimeAction1, wasteTimeAction2 } from "./actions";

export const WasteTimeAction = () => {
    return (
        <div className="flex flex-row gap-2">
            <Button onClick={wasteTimeAction1}>Action 1</Button>
            <Button onClick={wasteTimeAction2}>Action 2</Button>
        </div>
    );
};
