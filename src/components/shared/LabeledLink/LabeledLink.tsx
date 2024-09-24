import React from "react";
import { Link, LinkBaseProps } from "../Link/Link";
import { PropsWithClassName } from "@/types/app/style";

export interface LabeledLinkProps extends LinkBaseProps {
  label: string;
}

export const LabelLink: React.FC<PropsWithClassName<LabeledLinkProps>> = (
  props
) => {
  const { label } = props;

  if (!label) {
    return null;
  }

  return <Link {...props}>{label}</Link>;
};
