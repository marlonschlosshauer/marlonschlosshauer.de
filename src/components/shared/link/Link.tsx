import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import Base, { LinkProps } from "next/link";
import { PropsWithClassName } from "@/types/style";

export const Link: FC<PropsWithChildren<PropsWithClassName<LinkProps>>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Base {...props} className={clsx("underline decoration-primary hover:decoration-primary-alt transition-[text-decoration-color] duration-300 will-change-[text-decoration-color]", className)}>
            {children}
        </Base>
    );
};
