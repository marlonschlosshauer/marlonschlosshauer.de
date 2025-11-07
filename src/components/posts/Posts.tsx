import { getBlogPosts } from "@/lib/mdx";
import { Link } from "../shared/link/Link";

export const Posts = async () => {
    const metadatas = await getBlogPosts();

    return (
        <ul className="list-disc list-inside">
            {metadatas
                .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
                .toReversed()
                .map((post: any, key: number) => (
                    <li key={key}>
                        <Link href={post.href}>
                            {new Date(post.date).getFullYear()} {post.title}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};
