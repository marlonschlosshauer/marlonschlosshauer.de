import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Headline: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <p className={clsx("pb-2 font-medium", className)}>{children}</p>
);
