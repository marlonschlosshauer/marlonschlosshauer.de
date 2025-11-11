"use client";

import { ViewTransition } from "react";
import Image from "next/image";

export default function Page() {
    return (
        <ViewTransition>
            <div>
                <p>hello xdd</p>
                <ViewTransition name="schlong">
                    <Image
                        src="/blog/transitions-are-neat/opengraph-image"
                        alt=""
                        width="1200"
                        height="630"
                    />
                </ViewTransition>
            </div>
        </ViewTransition>
    );
}
