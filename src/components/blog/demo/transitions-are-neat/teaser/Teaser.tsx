"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/shared/button/Button";
import { wasteTime } from "@/lib/time";

export const Teaser = () => {
    const [isDone, setIsDone] = useState(false);
    const [isPending, startTransition] = useTransition();

    const onComplete = () =>
        startTransition(async () => {
            await wasteTime(1000);
            setIsDone(true);
        });

    const onReset = () => setIsDone(false);

    return (
        <div className="flex flex-col gap-4 p-4 border border-black-alt rounded-xl">
            <p>Marking as complete will cause a loading state to appear for 2 seconds.</p>
            <div className="flex flex-row gap-2">
                <Button disabled={isPending || isDone} loading={isPending} onClick={onComplete}>
                    {!isDone ? "Mark as complete" : "Completed"}
                </Button>
                {isDone && (
                    <Button variant="ghost" onClick={onReset}>
                        Reset
                    </Button>
                )}
            </div>
        </div>
    );
};
