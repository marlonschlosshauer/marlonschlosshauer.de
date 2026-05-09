import { Star } from "@/icons/Star";
import { getBlogPosts } from "@/lib/mdx";
import { Link } from "../shared/link/Link";
import { StructuredData } from "../shared/structuredData/StructuredData";

export const Posts = async () => {
    const metadatas = await getBlogPosts();

    return (
        <>
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    itemListElement: metadatas.map((metadata, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: metadata.title,
                        url: `https://www.marlonschlosshauer.de/blog${metadata.href}`,
                    })),
                }}
            />
            <ul>
                {metadatas
                    .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
                    .toReversed()
                    .map((post, key) => (
                        <li key={key} className="flex">
                            <Link href={post.href}>
                                {new Date(post.date).getFullYear()} {post.title}
                                {post.favorite && (
                                    <Star
                                        aria-hidden
                                        className="inline w-[12px] h-[12px] text-primary-alt ml-1"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
};
