"use client";

import { FC, PropsWithChildren, createContext, use, useState } from "react";
import clsx from "clsx";
import { LinkProps } from "next/link";
import { Close } from "@/icons/Close";
import { PropsWithClassName } from "@/types/style";
import { Link as Link_ } from "../link/Link";

interface ProviderData {
    isHidden: boolean;
    toggle: () => void;
    hide: () => void;
    show: () => void;
}

const Context = createContext({} as ProviderData);

const Provider: FC<PropsWithChildren> = ({ children }) => {
    const [isHidden, setIsHidden] = useState(false);

    const toggle = () => setIsHidden(h => !h);
    const hide = () => setIsHidden(true);
    const show = () => setIsHidden(false);

    return <Context.Provider value={{ isHidden, toggle, hide, show }}>{children}</Context.Provider>;
};

const Frame: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => {
    const { isHidden } = useNote();

    if (isHidden) {
        return null;
    }

    return (
        <aside
            className={clsx(
                "grid [grid-template-areas:'header'_'body'_'footer'] p-3 border border-white rounded-lg",
                className
            )}>
            {children}
        </aside>
    );
};

const Header: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <header
        className={clsx(
            "[grid-area:header] grid [grid-template-areas:'headline_exit']",
            className
        )}>
        {children}
    </header>
);

const Body: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <main className={clsx("[grid-area:body]", className)}>{children}</main>
);

const Footer: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <footer className={clsx("[grid-area:footer] pt-2", className)}>{children}</footer>
);

const Headline: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => (
    <p className={clsx("pb-2 font-medium", className)}>{children}</p>
);

const Exit: FC<PropsWithClassName> = ({ className }) => {
    const { hide } = useNote();
    return (
        <button
            onClick={hide}
            className={clsx(
                "[grid-area:exit] w-[24px] h-[24px] text-white hover:text-primary rounded-full border border-white hover:border-primary justify-self-end duration-300 transition-[color_border-color]",
                className
            )}
            aria-label="Close note">
            <Close className="p-1" />
        </button>
    );
};

const Link: FC<PropsWithChildren<PropsWithClassName<LinkProps>>> = ({
    children,
    className,
    ...props
}) => (
    <Link_ className={clsx("[grid-area:link]", className)} {...props}>
        {children}
    </Link_>
);

export const Note = {
    Provider,
    Frame,
    Header,
    Headline,
    Exit,
    Body,
    Footer,
    Link,
};

export const useNote = () => use(Context);
