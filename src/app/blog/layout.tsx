import { PropsWithChildren } from "react";
import { Socials } from "@/components/socials/Socials";

export default function BlogLayout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
            <footer>
                <Socials />
            </footer>
            <span className="p-8" />
        </div>
    );
}
