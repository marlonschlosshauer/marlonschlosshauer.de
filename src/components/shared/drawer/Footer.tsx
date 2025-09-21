import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Footer: FC<PropsWithChildren<PropsWithClassName>> = ({ children, className }) => {
    return <footer className={clsx("[grid-area:footer]", className)}>{children}</footer>;
};
