import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Header: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <header
        className={clsx(
            "[grid-area:header] grid [grid-template-areas:'headline_exit']",
            className
        )}>
        {children}
    </header>
);
