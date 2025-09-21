import { Metadata } from "next";

export const buildMetadata = ({
    title,
    description,
    date,
    tags,
}: Partial<{ title: string; description: string; date: string; tags: string[] }>): Metadata => {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            releaseDate: date,
            tags,
        },
    };
};
