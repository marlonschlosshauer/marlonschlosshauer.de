import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Headline: FC<PropsWithChildren<PropsWithClassName>> = ({ children, className }) => {
    return <p className={clsx("[grid-area:headline] text-4xl", className)}>{children}</p>;
};
