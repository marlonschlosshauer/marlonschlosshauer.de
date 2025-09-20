import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "path";
import { Logo } from "@/icons/Logo";

export interface PostProps {
    params: Promise<{ slug: string }>;
}

export default async function Image({ params }: PostProps) {
    const { slug } = await params;
    const { metadata } = await import(`@/content/blog/${slug}.mdx`);

    if (!metadata) {
        return null;
    }

    const { title, date } = metadata;

    if (!title || !date) {
        return null;
    }

    const inter = await readFile(path.join(process.cwd(), "public/font/inter/medium.ttf"));

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                    padding: 72,
                    color: "#f1f1f1",
                    backgroundColor: "#1e1e1e",
                    fontFamily: "Inter",
                    lineHeight: "1.15",
                }}>
                <Logo style={{ width: 72, height: 72 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        <span
                            style={{
                                fontWeight: 500,
                                fontSize: 36,
                                color: "#49C224",
                                lineHeight: "1.15",
                            }}>
                            Blog
                        </span>
                        <span style={{ fontWeight: 500, fontSize: 64 }}>{title}</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            color: "#b4b4b4",
                            fontSize: 36,
                        }}>
                        by{" "}
                        <span style={{ color: "#f1f1f1", paddingLeft: 8, paddingRight: 8 }}>
                            Marlon
                        </span>
                        on
                        <span style={{ color: "#f1f1f1", paddingLeft: 8 }}>
                            {new Date(date).toLocaleString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                        .
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [{ name: "Inter", data: inter, style: "normal" }],
        }
    );
}
