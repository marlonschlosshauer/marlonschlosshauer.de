"use client";

import {
    type CSSProperties,
    type FC,
    type FocusEvent,
    type PropsWithChildren,
    ViewTransition,
    useEffect,
    useRef,
} from "react";
import clsx from "clsx";
import Link from "next/link";
import { Pattern } from "@/components/blog/hero/Pattern";
import type { PropsWithClassName } from "@/types/style";

interface PostPreviewLinkProps extends PropsWithChildren<PropsWithClassName> {
    description: string;
    href: string;
    slug: string;
    title: string;
}

export const PostPreviewLink: FC<PostPreviewLinkProps> = ({
    children,
    className,
    description,
    href,
    slug,
    title,
}) => {
    const popover = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
    const anchorName = `--post-preview-${slug}`;
    const popoverId = `post-preview-${slug}`;

    const cancelClose = () => clearTimeout(closeTimer.current);
    const showPopover = () => {
        cancelClose();

        if (popover.current && !popover.current.matches(":popover-open")) {
            popover.current.showPopover();
        }
    };
    const hidePopover = () => {
        cancelClose();
        closeTimer.current = setTimeout(() => {
            if (popover.current?.matches(":popover-open")) {
                popover.current.hidePopover();
            }
        }, 80);
    };
    const handleBlur = (event: FocusEvent<HTMLAnchorElement>) => {
        if (!popover.current?.contains(event.relatedTarget)) {
            hidePopover();
        }
    };

    useEffect(() => cancelClose, []);

    return (
        <>
            <Link
                href={href}
                prefetch={true}
                transitionTypes={["post-preview"]}
                aria-controls={popoverId}
                className={clsx(
                    "underline decoration-primary hover:decoration-black-alt hover:text-white-alt transition-colors duration-300 text-white",
                    className
                )}
                style={{ anchorName } as CSSProperties}
                onMouseEnter={showPopover}
                onMouseLeave={hidePopover}
                onFocus={showPopover}
                onBlur={handleBlur}>
                {children}
            </Link>
            <div
                ref={popover}
                id={popoverId}
                popover="manual"
                className="post-preview-popover w-80 overflow-hidden rounded-xl border border-black-alt bg-black text-white shadow-2xl"
                style={{ positionAnchor: anchorName } as CSSProperties}
                onMouseEnter={cancelClose}
                onMouseLeave={hidePopover}>
                <ViewTransition name={`post-hero-${slug}`} share="morph" default="none">
                    <div className="h-36 overflow-hidden border-b border-black-alt">
                        <Pattern seed={slug} />
                    </div>
                </ViewTransition>
                <div className="p-4">
                    <p className="font-semibold leading-tight">{title}</p>
                    <p className="mt-2 text-sm leading-snug text-white-alt">{description}</p>
                </div>
            </div>
        </>
    );
};
