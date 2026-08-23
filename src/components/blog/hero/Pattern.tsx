import type { FC } from "react";
import clsx from "clsx";
import { createPattern } from "@/lib/pattern";
import type { PropsWithClassName } from "@/types/style";

interface PatternProps extends PropsWithClassName {
    seed: string;
}

export const Pattern: FC<PatternProps> = ({ seed, className }) => (
    <div
        aria-hidden
        className={clsx("size-full bg-cover", className)}
        style={createPattern(seed)}
    />
);
