import type { CSSProperties } from "react";

const hashString = (value: string) => {
    let hash = 2166136261;

    for (const character of value) {
        hash ^= character.charCodeAt(0);
        hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
};

const createRandom = (seed: number) => {
    let state = seed;

    return () => {
        state += 0x6d2b79f5;
        let value = state;
        value = Math.imul(value ^ (value >>> 15), value | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
};

/** Creates a stable CSS pattern for the same input string. */
export const createPattern = (value: string): CSSProperties => {
    const random = createRandom(hashString(value));
    const hue = Math.floor(random() * 360);
    const complement = (hue + 120 + Math.floor(random() * 90)) % 360;
    const angle = 25 + Math.floor(random() * 130);
    const firstX = 10 + Math.floor(random() * 80);
    const firstY = 10 + Math.floor(random() * 80);
    const secondX = 10 + Math.floor(random() * 80);
    const secondY = 10 + Math.floor(random() * 80);
    const scale = 44 + Math.floor(random() * 42);

    return {
        backgroundColor: `hsl(${hue} 42% 16%)`,
        backgroundImage: [
            `radial-gradient(circle at ${firstX}% ${firstY}%, hsl(${hue} 78% 58% / 0.9) 0 9%, transparent 9.5%)`,
            `radial-gradient(circle at ${secondX}% ${secondY}%, hsl(${complement} 72% 58% / 0.75) 0 12%, transparent 12.5%)`,
            `repeating-linear-gradient(${angle}deg, transparent 0 ${scale / 2}px, hsl(${complement} 62% 52% / 0.2) ${scale / 2}px ${scale / 2 + 2}px)`,
        ].join(", "),
        backgroundSize: `${scale}px ${scale}px, ${scale * 1.6}px ${scale * 1.6}px, auto`,
    };
};
