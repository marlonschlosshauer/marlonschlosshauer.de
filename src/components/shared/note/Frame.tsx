import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";
import { NoteVariant } from "./type";

const variantClasses: Record<NoteVariant, string> = {
    white: "border-white",
    primary: "border-primary bg-primary/10",
    secondary: "border-secondary bg-secondary/10",
};

export const Frame: FC<PropsWithChildren<PropsWithClassName<{ variant?: NoteVariant }>>> = ({
    className,
    children,
    variant = "white",
}) => {
    return (
        <aside
            className={clsx(
                "grid [grid-template-areas:'header'_'body'_'footer'] p-3 border rounded-lg",
                variantClasses[variant],
                className
            )}>
            {children}
        </aside>
    );
};
