import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "secondary" | "tertirary" | "ghost";
};

export const Button: FC<PropsWithChildren<PropsWithClassName<ButtonProps>>> = ({
    disabled,
    loading,
    className,
    children,
    variant = "secondary",
    ...props
}) => (
    <button
        {...props}
        disabled={disabled || loading}
        className={clsx(
            "relative px-6 py-2 cursor-pointer rounded transition-[background-color_color] duration-200 animate-opacity",
            {
                "text-white bg-primary hover:bg-primary-alt": variant === "primary",
                "text-white bg-secondary hover:bg-secondary-alt": variant === "secondary",
                "text-white bg-tertiary hover:bg-tertiary-alt": variant === "tertirary",
                "text-white bg-transparent hover:text-white-alt": variant === "ghost",
                "filter saturate-0 cursor-not-allowed": disabled,
                "opacity-50 overflow-hidden shimmer-loading cursor-wait": loading,
            },
            className
        )}>
        {children}
    </button>
);
