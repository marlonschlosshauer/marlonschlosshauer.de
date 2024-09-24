import type { Metadata } from "next";
import "@/scss/reset.scss";
import "@/scss/global.scss";
import { Logo } from "@/icons/Logo";
import styles from "./layout.module.scss";
import { Link } from "@/components/shared/Link/Link";

export const metadata: Metadata = {
  title: "Design Engineer + Pareto Principle = Marlon Schlosshauer",
  description:
    "Marlon Schlosshauer is a web developer that loves to move fast and build things. Optimizing ideas to make them a reality is my speciality.",
  keywords: ["web", "development", "portfolio"],
  openGraph: {
    images: ["/card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Link href="/" arial-label="home button">
            <Logo className={styles.logo} />
          </Link>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
