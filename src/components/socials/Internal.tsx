"use client";

import { FC } from "react";
import { Clickable } from "../shared/clickable/Clickable";
import { Link } from "../shared/link/Link";

export const Internal: FC = () => {
    const onGoToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Clickable onClick={onGoToTop} alt="Scroll to top" className="cursor-pointer">
                    Top
                </Clickable>
            </li>
        </>
    );
};
