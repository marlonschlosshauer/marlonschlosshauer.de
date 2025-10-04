import { PropsWithChildren } from "react";
import { Socials } from "@/components/blog/socials/Socials";

export default function BlogLayout({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <footer className="pt-10">
                <hr className="border-white-alt" />
                <Socials />
            </footer>
        </>
    );
}
