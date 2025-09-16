import { ReactNode } from "react";

export const extractText = (children: ReactNode): string => {
    if (typeof children === "string") {
        return children;
    }
    if (Array.isArray(children)) {
        return children.map(extractText).join("");
    }
    if (typeof children === "object" && children && "props" in children) {
        return extractText((children as any).props.children);
    }
    return "";
};
