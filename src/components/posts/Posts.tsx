import { Star } from "@/icons/Star";
import { getBlogPosts } from "@/lib/mdx";
import { Link } from "../shared/link/Link";

export const Posts = async () => {
    const metadatas = await getBlogPosts();

    return (
        <ul>
            {metadatas
                .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
                .toReversed()
                .map((post, key) => (
                    <li key={key} className="flex">
                        <Link href={post.href} className="flex flex-row items-center gap-1">
                            {new Date(post.date).getFullYear()} {post.title}
                            {post.favorite && (
                                <Star aria-hidden className="w-[12px] h-[12px] text-primary-alt" />
                            )}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};
