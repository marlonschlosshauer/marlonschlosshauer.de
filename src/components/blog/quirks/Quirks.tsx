import { Anchor } from "@/components/shared/anchor/Anchor";
import { Link } from "@/components/shared/link/Link";
import { getBlogPosts } from "@/lib/mdx";

export interface QuirksProps {
    title: string;
}

export const Quirks = async ({ title }: QuirksProps) => {
    const quirks = (await getBlogPosts())
        .filter(post => post.slug.startsWith("next-quirks-") && post.title !== title)
        .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

    return (
        <section className="mb-8">
            <Anchor>
                <h2 className="mt-8 mb-3 font-semibold text-xl">Related posts</h2>
            </Anchor>
            <ul className={`list-["-"]`}>
                {quirks.map(quirk => (
                    <li key={quirk.slug}>
                        <Link href={quirk.href}>{quirk.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};
