import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Header: FC<PropsWithChildren<PropsWithClassName>> = ({ children, className }) => {
    return <header className={clsx("[grid-area:header]", className)}>{children}</header>;
};
