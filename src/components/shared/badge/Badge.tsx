import { FC } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export interface BadgeProps {
    label: string;
}

export const Badge: FC<PropsWithClassName<BadgeProps>> = ({ label, className }) => (
    <div className={clsx("flex text-xs w-full", className)}>
        <p className="px-4 py-1 border border-primary rounded-xl">{label}</p>
    </div>
);
