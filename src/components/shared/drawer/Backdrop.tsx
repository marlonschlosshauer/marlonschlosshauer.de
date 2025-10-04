"use client";

import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";
import { useDrawer } from "./Drawer";

export const Backdrop: FC<PropsWithChildren<PropsWithClassName>> = ({ children, className }) => {
    const { close } = useDrawer();
    return (
        <button
            aria-hidden
            tabIndex={-1}
            className={clsx("[grid-area:backdrop] w-full h-full bg-[rgba(0,0,0,0.2)]", className)}
            onClick={close}>
            {children}
        </button>
    );
};
