import React, { PropsWithChildren } from "react";
import NextLink from "next/link";
import { PropsWithClassName } from "@/types/app/style";
import styles from "./Link.module.scss";
import clsx from "clsx";

export interface LinkBaseProps {
  href: string;
  inNewTab?: boolean;
}

export const Link: React.FC<
  PropsWithClassName<PropsWithChildren<LinkBaseProps>>
> = ({ href, inNewTab, children, className }) => {
  if (!href) {
    return null;
  }

  return (
    <NextLink
      href={href}
      target={inNewTab ? "_blank" : "_parent"}
      rel={inNewTab ? "nofollow noopener" : undefined}
      className={clsx(styles.link, className)}
    >
      {children}
    </NextLink>
  );
};
