"use client";

import { ViewTransition } from "react";
// import { Link } from "@/components/shared/link/Link";
import { Link } from "@/components/test/Link/Link";

export default function Page() {
    return (
        <ViewTransition>
            <div>
                <p>This is a test.</p>
                <Link href="/test/other">React Transitions are neat</Link>
            </div>
        </ViewTransition>
    );
}
