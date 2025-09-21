import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/meta";

export const generateStaticParams = async () => {
    const files = await getBlogPosts();
    return files.map(file => ({ slug: file.name.slice(0, -4) }));
};

export interface PostProps {
    params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PostProps): Promise<Metadata> => {
    const { slug } = await params;
    const { metadata } = await import(`@/content/blog/${slug}.mdx`);

    if (!metadata) {
        return {};
    }

    return buildMetadata(metadata);
};

export default async function Post({ params }: PostProps) {
    const { slug } = await params;
    const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

    if (!Post) {
        notFound();
    }

    return <Post />;
}
