import { Link, LinkBaseProps } from "@/components/shared/Link/Link";
import { PropsWithClassName } from "@/types/app/style";
import React, { PropsWithChildren } from "react";

export const Linkable: React.FC<
  PropsWithChildren<PropsWithClassName<Partial<LinkBaseProps>>>
> = (props) => {
  const { href, children, className } = props;

  return href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};
