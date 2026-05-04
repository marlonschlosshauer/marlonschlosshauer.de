import { FC } from "react";
import { Link } from "../shared/link/Link";

export const Socials: FC = () => (
    <ul className="flex flex-row gap-2 text-white">
        <li>
            <Link href="https://github.com/marlonschlosshauer" inNewTab>
                Github
            </Link>
        </li>
        <li>
            <Link href="https://twitter.com/kehrin" inNewTab>
                Twitter
            </Link>
        </li>
    </ul>
);
