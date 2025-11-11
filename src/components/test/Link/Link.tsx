"use client";

import { FC, PropsWithChildren, Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { PropsWithClassName } from "@/types/style";
import { Link as Base } from "../../shared/link/Link";

const Dialog = dynamic(() => import("./Dialog").then(mod => mod.Dialog), { ssr: false });

export interface LinkProps {
    href: string;
}

export const Link: FC<PropsWithChildren<PropsWithClassName<LinkProps>>> = ({
    children,
    ...props
}) => {
    const { href } = props;
    const ref = useRef<HTMLDialogElement | null>(null);

    const onEnter = () => ref?.current?.showPopover();
    const onLeave = () => ref?.current?.hidePopover();

    return (
        <>
            <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Base {...props}>{children}</Base>
            </div>
            <dialog ref={ref} popover="manual" className="anchor-element background-red-500">
                <Suspense fallback={<p>Loading...</p>}>
                    <Dialog href={"/blog/transitions-are-neat"} />
                </Suspense>
            </dialog>
        </>
    );
};
