import React from "react";
import styles from "./layout.module.scss";
import { Link } from "@/components/shared/Link/Link";
import { Arrow } from "@/icons/Arrow";

export default function MarkdownLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.content}>
      <Link href="/" className={styles.backWrapper} aria-label="back button">
        <Arrow className={styles.back} />
      </Link>
      {children}
    </div>
  );
}
