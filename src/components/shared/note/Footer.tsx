import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Footer: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <footer className={clsx("[grid-area:footer] pt-2", className)}>{children}</footer>
);
