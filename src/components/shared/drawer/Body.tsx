import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Body: FC<PropsWithChildren<PropsWithClassName>> = ({ children, className }) => {
    return <main className={clsx("[grid-area:body]", className)}>{children}</main>;
};
