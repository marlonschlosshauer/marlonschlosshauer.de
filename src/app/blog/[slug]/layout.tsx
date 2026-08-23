import type { PropsWithChildren } from "react";
import { Hero } from "@/components/blog/hero/Hero";

interface PostLayoutProps extends PropsWithChildren {
    params: Promise<{ slug: string }>;
}

export default async function PostLayout({ children, params }: PostLayoutProps) {
    const { slug } = await params;

    return (
        <>
            <Hero slug={slug} />
            {children}
        </>
    );
}
