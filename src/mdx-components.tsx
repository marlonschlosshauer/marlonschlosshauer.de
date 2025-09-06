import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type CodeProps = ComponentPropsWithoutRef<"code">;

const components: MDXComponents = {
    h1: (props: HeadingProps) => <h1 className="font-semibold mb-8" {...props} />,
    h2: (props: HeadingProps) => <h2 className="font-semibold mt-8 my-3" {...props} />,
    h3: (props: HeadingProps) => <h3 className="font-semibold mt-8 my-3" {...props} />,
    h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
    p: (props: ParagraphProps) => <p className="leading-snug my-8" {...props} />,
    ol: (props: ListProps) => <ol className={`list-["-"]`} {...props} />,
    ul: (props: ListProps) => <ol className={`list-["-"]`} {...props} />,
    em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
        <strong className="font-medium" {...props} />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
        if (href?.startsWith("/") || href?.startsWith("#")) {
            return (
                <Link href={href} {...props}>
                    {children}
                </Link>
            );
        }

        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    },
    code: ({ children, ...props }: CodeProps) => {
        const codeHTML = highlight(children as string);
        return <code className="lmao" dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
};

export function useMDXComponents(): MDXComponents {
    return components;
}
