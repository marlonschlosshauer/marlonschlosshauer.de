"use client";

import { FC, PropsWithChildren, createContext, use, useState } from "react";
import Link from "next/link";
import { PropsWithClassName } from "@/types/style";
import { Body } from "./Body";
import { Exit } from "./Exit";
import { Footer } from "./Footer";
import { Frame as Frame_ } from "./Frame";
import { Header } from "./Header";
import { Headline } from "./Headline";
import { NoteVariant } from "./type";

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

// @todo: Yoink types from base
const Frame: FC<PropsWithChildren<PropsWithClassName<{ variant?: NoteVariant }>>> = props => {
    const { isHidden } = useNote();

    if (isHidden) {
        return null;
    }
    return <Frame_ {...props} />;
};

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
