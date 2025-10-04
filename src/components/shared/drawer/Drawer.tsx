"use client";

import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Headline } from "./Headline";

const Frame = dynamic(() => import("./Frame").then(mod => mod.Frame), { ssr: false });

export interface DrawerProps {
    isInitiallyOpen?: boolean;
}

export interface DrawerData {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

const Context = createContext({} as DrawerData);

export const Provider: FC<PropsWithChildren<DrawerProps>> = ({
    isInitiallyOpen = false,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    const toggle = () => setIsOpen(i => !i);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return <Context.Provider value={{ isOpen, toggle, open, close }}>{children}</Context.Provider>;
};

export interface FrameProps {
    target?: HTMLElement;
}

export const Drawer = {
    Provider,
    Frame,
    Header,
    Headline,
    Body,
    Footer,
};

export const useDrawer = () => useContext(Context);
