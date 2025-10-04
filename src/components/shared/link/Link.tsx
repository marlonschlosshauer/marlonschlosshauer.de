import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import Base, { LinkProps as LinksProps_ } from "next/link";
import { PropsWithClassName } from "@/types/style";

export interface LinkProps extends LinksProps_ {
    inNewTab?: boolean;
}

export const Link: FC<PropsWithChildren<PropsWithClassName<LinkProps>>> = ({
    children,
    className,
    inNewTab,
    ...props
}) => {
    return (
        <Base
            target={inNewTab ? "_blank" : "_parent"}
            rel={inNewTab ? "noopener noreferrer" : undefined}
            {...props}
            className={clsx(
                "underline decoration-primary hover:decoration-primary-alt transition-[text-decoration-color] duration-300 will-change-[text-decoration-color]",
                className
            )}>
            {children}
        </Base>
    );
};
