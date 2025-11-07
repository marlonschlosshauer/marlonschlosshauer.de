import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";
import { Anchor } from "./components/shared/anchor/Anchor";
import { Link } from "./components/shared/link/Link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type CodeProps = ComponentPropsWithoutRef<"code">;

const components: MDXComponents = {
    h1: (props: HeadingProps) => <h1 className="font-semibold mb-8 text-2xl" {...props} />,
    h2: (props: HeadingProps) => (
        <Anchor className=" mt-8 my-3">
            <h2 className="font-semibold text-xl" {...props} />
        </Anchor>
    ),
    h3: (props: HeadingProps) => (
        <Anchor className=" mt-8 my-3">
            <h3 className="font-semibold text-xl" {...props} />
        </Anchor>
    ),
    h4: (props: HeadingProps) => (
        <Anchor>
            <h4 className="font-medium text-lg" {...props} />
        </Anchor>
    ),
    p: (props: ParagraphProps) => <p className="leading-snug my-8" {...props} />,
    ol: (props: ListProps) => <ol className={`list-["-"]`} {...props} />,
    ul: (props: ListProps) => <ol className={`list-["-"]`} {...props} />,
    em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
        <strong className="font-medium" {...props} />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
        if (!href) {
            return children;
        }

        if (href.startsWith("/") || href.startsWith("#")) {
            return (
                <Link href={href} {...props}>
                    {children}
                </Link>
            );
        }

        return (
            <Link href={href} inNewTab {...props}>
                {children}
            </Link>
        );
    },
    code: ({ children, ...props }: CodeProps) => {
        const codeHTML = highlight(children as string);
        return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
};

export function useMDXComponents(): MDXComponents {
    return components;
}
