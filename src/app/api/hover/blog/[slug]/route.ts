import type { NextRequest } from "next/server";
import { getBlogPosts } from "@/lib/mdx";

export async function GET(_req: NextRequest, ctx: RouteContext<"/api/hover/blog/[slug]">) {
    const { slug } = await ctx.params;

    const posts = await getBlogPosts();

    const post = posts.find(post => post.href.endsWith(slug));

    if (post) {
        return Response.json(post, { status: 200 });
    }

    return Response.json({ message: "Could not find post" }, { status: 404 });
}
