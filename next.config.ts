import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["mdx", "ts", "tsx"],
    outputFileTracingIncludes: {
        "/blog/[slug]/opengraph-image": ["./public/font/**/*"],
        "/opengraph-image": ["./public/font/**/*"],
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
