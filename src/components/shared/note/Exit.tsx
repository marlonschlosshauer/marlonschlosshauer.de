"use client";

import { FC } from "react";
import clsx from "clsx";
import { Close } from "@/icons/Close";
import { PropsWithClassName } from "@/types/style";
import { useNote } from "./client";

export const Exit: FC<PropsWithClassName> = ({ className }) => {
    const { hide } = useNote();
    return (
        <button
            onClick={hide}
            className={clsx(
                "[grid-area:exit] w-[24px] h-[24px] text-white hover:text-primary rounded-full border border-white hover:border-primary justify-self-end duration-300 transition-[color_border-color]",
                className
            )}
            aria-label="Close note">
            <Close className="p-1" />
        </button>
    );
};
