import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/shared/structuredData/StructuredData";
import { getBlogPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/meta";

export const generateStaticParams = async () => {
    const files = await getBlogPosts();
    return files.map(file => ({ slug: file.slug }));
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
    const { default: Post, metadata } = await import(`@/content/blog/${slug}.mdx`);

    if (!Post) {
        notFound();
    }

    return (
        <>
            <StructuredData
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: metadata.title,
                    description: metadata.description,
                    datePublished: metadata.date,
                    keywords: metadata.tags?.join(", ") ?? [],
                    wordCount: metadata.words,
                    url: `https://www.marlonschlosshauer.de/blog/${slug}`,
                    image: `https://www.marlonschlosshauer.de/blog/${slug}/opengraph-image`,
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `https://www.marlonschlosshauer.de/blog/${slug}`,
                    },
                    author: {
                        "@type": "Person",
                        name: "Marlon Schlosshauer",
                        url: "https://www.marlonschlosshauer.de",
                    },
                }}
            />
            <Post />
        </>
    );
}
