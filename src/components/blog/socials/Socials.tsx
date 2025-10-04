import Image from "next/image";
import { Link } from "@/components/shared/link/Link";
import { Bluesky } from "@/icons/Bluesky";
import { Github } from "@/icons/Github";
import { Twitter } from "@/icons/Twitter";

export const Socials = () => (
    <div className="flex flex-rows gap-2 justify-between items-center color-white">
        <div className="flex flex-rows gap-4 py-6 px-4 items-center">
            <Image
                src="/img/me.jpg"
                width={48}
                height={48}
                alt="Picture of me"
                className="rounded-2xl"
                aria-hidden
            />
            <Link href="/">Marlon Schlosshauer</Link>
        </div>
        <div className="flex flex-rows gap-4 p-4">
            <Link
                href="https://x.com/kehrin"
                inNewTab
                className="text-white hover:text-primary duration-300 ease-in-and-out transition-colors"
                aria-label="Visit Twitter">
                <Twitter className="w-[28px] h-[28px]" aria-hidden />
            </Link>
            <Link
                href="https://github.com/marlonschlosshauer"
                inNewTab
                className="text-white hover:text-primary duration-300 ease-in-and-out transition-colors"
                aria-label="Visit Github">
                <Github className="w-[28px] h-[28px]" aria-hidden />
            </Link>
            <Link
                href="https://bsky.app/profile/marlonschlosshauer.bsky.social"
                inNewTab
                className="text-white hover:text-primary duration-300 ease-in-and-out transition-colors"
                aria-label="Visit Bluesky">
                <Bluesky className="w-[28px] h-[28px]" aria-hidden />
            </Link>
        </div>
    </div>
);
