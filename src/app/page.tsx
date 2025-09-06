import { Metadata, Viewport } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const viewport: Viewport = {
    themeColor: "#163219",
};

export const metadata: Metadata = {
    title: "Marlon Schlosshauer",
    description:
        "Fullstack Developer from Germany who loves to code, design and optimize products into reality.",
    metadataBase: new URL("https://marlonschlosshauer.de"),
    openGraph: {
        siteName: "Marlon Schlosshauer",
        url: "https://marlonschlosshauer.de",
        title: "Marlon Schlosshauer",
        description:
            "Fullstack Developer from Germany who loves to code, design and optimize products into reality.",
        images: ["/card.png"],
        locale: "en",
        firstName: "Marlon",
        lastName: "Schlosshauer",
    },
};

export default function LandingPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.property}>
                    <Link
                        className={styles.link}
                        target="_blank"
                        href="https://vercel.com/blog/design-engineering-at-vercel">
                        Design Engineering
                    </Link>
                    <span className={styles.text}>+</span>
                </div>
                <div className={styles.property}>
                    <Link
                        className={styles.link}
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Pareto_principle">
                        Pareto Principle
                    </Link>
                    <span className={styles.text}>=</span>
                </div>
                <Link
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/marlonschlosshauer">
                    Marlon
                </Link>
            </div>
        </div>
    );
}
