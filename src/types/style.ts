import { CSSProperties } from "react";

export type PropsWithClassName<T = {}> = T & {
    className?: string;
    tw?: string;
    style?: CSSProperties;
};

export type PropsWithClassNames<T = {}, R extends string = string> = T & {
    classNames?: Partial<Record<R, string>>;
};
