"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Trap } from "@/components/shared/trap/Trap";
import { useEscape } from "@/lib/escape";
import { Backdrop } from "./Backdrop";
import { useDrawer } from "./Drawer";
import { Exit } from "./Exit";

export interface FrameProps {
    target?: HTMLElement;
}

export const Frame: FC<PropsWithChildren<FrameProps>> = ({ target, children }) => {
    const [element, setElement] = useState(target);
    const { isOpen, close } = useDrawer();

    useEscape(close);

    useEffect(() => {
        if (!target) {
            setElement(document.body);
        }
    }, [target]);

    if (!element) {
        setElement(document.body);
    }

    if (!element || !isOpen) {
        return;
    }

    return createPortal(
        <Trap>
            <aside
                aria-expanded={isOpen}
                className="w-screen h-screen absolute top-[0] left-[0] grid [grid-template-areas:'backdrop_sidebar'] grid-cols-[1fr_1fr]">
                <Backdrop />
                <div className="grid [grid-area:sidebar] [grid-template-areas:'header_exit'_'headline_headline'_'body_body'_'footer_footer'] grid-rows-[auto_auto_1fr_auto] gap-y-16 m-12 justify-between align-start">
                    <Exit />
                    {children}
                </div>
            </aside>
        </Trap>,
        element
    );
};
