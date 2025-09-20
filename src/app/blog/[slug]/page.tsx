import { notFound } from "next/navigation";
import { getMdxFiles } from "@/lib/mdx";

export const generateStaticParams = async () => {
    const files = await getMdxFiles(["src", "content", "blog"]);
    return files.map(file => ({ slug: file.name.slice(0, -4) }));
};

export interface PostProps {
    params: Promise<{ slug: string }>;
}

export default async function Post({ params }: PostProps) {
    const { slug } = await params;
    const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

    if (!Post) {
        notFound();
    }

    return <Post />;
}
