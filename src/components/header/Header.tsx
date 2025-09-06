"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/icons/Logo";

export const Header: FC = () => {
    const path = usePathname();

    if (path === "/") {
        return <Logo className="w-[36px] h-[36px] text-primary" aria-hidden />;
    }

    return (
        <Link href="/" aria-label="Go to homepage">
            <Logo
                className="w-[36px] h-[36px] text-primary transition-[color] hover:text-primary-alt"
                aria-hidden
            />
        </Link>
    );
};
