import { FC, PropsWithChildren } from "react";

export const Frame: FC<PropsWithChildren> = ({ children }) => {
    return <ul className="flex flex-row gap-2 text-white">{children}</ul>;
};
