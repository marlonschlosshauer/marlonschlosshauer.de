import type { FC } from "react";
import { ViewTransition } from "react";
import { Pattern } from "./Pattern";

interface HeroProps {
    slug: string;
}

export const Hero: FC<HeroProps> = ({ slug }) => (
    <ViewTransition name={`post-hero-${slug}`} share="morph" default="none">
        <div className="h-48 mb-8 overflow-hidden rounded-xl border border-black-alt">
            <Pattern seed={slug} />
        </div>
    </ViewTransition>
);
