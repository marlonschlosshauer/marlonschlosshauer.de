"use client";

import { FC } from "react";
import clsx from "clsx";
import { Close } from "@/icons/Close";
import { PropsWithClassName } from "@/types/style";
import { useDrawer } from "./Drawer";

export const Exit: FC<PropsWithClassName> = ({ className }) => {
    const { close } = useDrawer();
    return (
        <button
            onClick={close}
            className={clsx(
                "[grid-area:exit] w-[32px] h-[32px] text-white rounded-full border border-white justify-self-end",
                className
            )}
            aria-label="Close drawer">
            <Close className="p-1" />
        </button>
    );
};
