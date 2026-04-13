import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export const Body: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <main className={clsx("[grid-area:body] [&_p]:my-2", className)}>{children}</main>
);
