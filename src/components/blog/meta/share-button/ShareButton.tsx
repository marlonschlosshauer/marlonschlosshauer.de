"use client";

import { FC, useRef, useState } from "react";

export const ShareButton: FC = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const onShare = async () => {
        const l = new URL(window.location.toString());
        const text = l.origin + l.pathname;

        const type = "text/plain";
        const clipboardItemData = {
            [type]: text,
        };
        const clipboardItem = new ClipboardItem(clipboardItemData);
        await navigator.clipboard.write([clipboardItem]);

        setHasCopied(true);

        if (timeoutRef.current) {
            return;
        }

        const t = setTimeout(() => {
            setHasCopied(false);
            timeoutRef.current = null;
        }, 2000);

        timeoutRef.current = t;
    };

    return (
        <button className="cursor-pointer" onClick={onShare}>
            {hasCopied ? "Copied!" : "Share"}
        </button>
    );
};
