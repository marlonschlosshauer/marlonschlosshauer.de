"use client";

import { FC, ViewTransition } from "react";
import Image from "next/image";
import useSWR from "swr";

export interface DialogProps {
    href: string;
}

export const Dialog: FC<DialogProps> = ({ href }) => {
    const { data } = useSWR<{ title: string; description: string; image: string } | undefined>(
        href,
        async () => {
            if (!href) {
                return;
            }

            const [_, blog, ...name] = href.split("/");

            if (!blog || blog !== "blog" || !name) {
                return;
            }

            const response = await fetch(`/api/hover/blog/${name}`);

            if (!response.ok) {
                return;
            }

            const data = await response.json();

            if (!data) {
                return;
            }

            return { ...data, image: `${href}/opengraph-image` };
        },
        { suspense: true }
    );

    if (!data) {
        return null;
    }

    const { title, description, image } = data;

    console.log(data);

    return (
        <>
            <ViewTransition name="schlong">
                <Image src={image} alt="" width={1200} height={630} className="max-w-[256px]" />
            </ViewTransition>
            <p>{title}</p>
            <p>{description}</p>
        </>
    );
};
