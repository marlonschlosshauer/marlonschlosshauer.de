import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogPosts();

    const blogEntries: MetadataRoute.Sitemap = posts.map(post => ({
        url: `https://marlonschlosshauer.de/blog/${post.slug}`,
    }));

    return [
        {
            url: "https://marlonschlosshauer.de",
        },
        ...blogEntries,
    ];
}
