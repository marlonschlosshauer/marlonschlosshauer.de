"use client";

import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { Chain } from "@/icons/Chain";
import { extractText } from "@/lib/dom";
import { slugify } from "@/lib/slug";
import { PropsWithClassName } from "@/types/style";

export const Anchor: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => {
    const id = slugify(extractText(children));

    return (
        <a
            id={id}
            href={`#${id}`}
            className={clsx("flex flex-row items-center gap-1 group", className)}>
            <div>{children}</div>
            <Chain
                className="w-[0.5lh] h-[0.5lh] text-white-alt opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
            />
        </a>
    );
};
