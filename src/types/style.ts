import { CSSProperties } from "react";

export type PropsWithClassName<T = {}> = T & {
    className?: string;
    tw?: string;
    style?: CSSProperties;
};
