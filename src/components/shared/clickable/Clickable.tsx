import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export interface ClickableProps {
    onClick: () => void;
    alt: string;
}

export const Clickable: FC<PropsWithChildren<PropsWithClassName<ClickableProps>>> = ({
    children,
    className,
    onClick,
    alt,
    ...props
}) => {
    return (
        <button
            {...props}
            onClick={onClick}
            aria-label={alt}
            className={clsx(
                "underline decoration-primary hover:decoration-primary-alt transition-[text-decoration-color] duration-300 will-change-[text-decoration-color] text-white",
                className
            )}>
            {children}
        </button>
    );
};
