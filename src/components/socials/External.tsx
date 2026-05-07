import { FC } from "react";
import { Link } from "../shared/link/Link";

export const External: FC = () => {
    return (
        <>
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
        </>
    );
};
