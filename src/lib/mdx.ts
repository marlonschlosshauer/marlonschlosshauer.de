import { promises as fs } from "fs";
import path from "path";

export const getMdxFiles = async (dir: string[]) => {
    const entries = await fs.readdir(path.join(process.cwd(), ...dir), {
        recursive: true,
        withFileTypes: true,
    });

    return entries.filter(entry => entry.isFile() && entry.name.endsWith(".mdx"));
};

export const getBlogPosts = async (tags?: string[]) => {
    const posts = await getMdxFiles(["src", "content", "blog"]);

    if (tags && tags.length) {
        return posts.filter((post: any) => {
            if (!("metadata" in post) || !post.metadata) {
                return false;
            }

            return post.metadata.openGraph.tags.some((tag: string) => tags.includes(tag));
        });
    }

    return posts;
};
