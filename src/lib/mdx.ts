import { promises as fs } from "fs";
import path from "path";

export const getBlogPosts = async (tags?: string[]) => {
    const entries = await fs.readdir(path.join(process.cwd(), ...["src", "content", "blog"]), {
        recursive: true,
        withFileTypes: true,
    });

    const posts = await Promise.all(
        entries
            .filter(entry => entry.isFile() && entry.name.endsWith(".mdx"))
            .flatMap(async file => {
                const result = await import(`@/content/blog/${file.name}`);

                if (!result) {
                    return [];
                }

                const { metadata } = result;

                if (!metadata) {
                    return [];
                }

                const slug = file.name.slice(0, -4);

                return { ...metadata, href: `/blog/${slug}`, slug };
            })
    );

    if (tags && tags.length) {
        return posts.filter((post: any) => {
            if (!("metadata" in post) || !post.metadata) {
                return false;
            }

            return post.tags.some((tag: string) => tags.includes(tag));
        });
    }

    return posts;
};
