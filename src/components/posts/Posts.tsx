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
                            <Link href={post.href} className="group flex gap-2">
                                <span className="text-white-alt underline decoration-black mr-2 group-hover:text-white transition-colors duration-300">
                                    {new Date(post.date).getFullYear()}
                                </span>
                                <span>
                                    {post.title}
                                    {post.favorite && (
                                        <Star
                                            aria-label="Featured post"
                                            className="inline w-[12px] h-[12px] text-primary-alt ml-1 transition-colors group-hover:text-black-alt"
                                        />
                                    )}
                                </span>
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
};
