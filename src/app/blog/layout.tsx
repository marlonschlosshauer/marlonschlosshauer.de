import { PropsWithChildren } from "react";
import { Socials } from "@/components/socials/Socials";

export default function BlogLayout({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <footer className="pb-8">
                <Socials.Internal />
            </footer>
        </>
    );
}
