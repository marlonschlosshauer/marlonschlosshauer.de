import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { LinkProps } from "next/link";
import { PropsWithClassName } from "@/types/style";
import { Link as Link_ } from "../link/Link";

export const Link: FC<PropsWithChildren<PropsWithClassName<LinkProps>>> = ({
    children,
    className,
    ...props
}) => (
    <Link_ className={clsx("[grid-area:link]", className)} {...props}>
        {children}
    </Link_>
);
