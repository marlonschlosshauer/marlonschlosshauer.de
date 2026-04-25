"use client";

import { createRef, useRef, useState } from "react";
import { HalfTile, HalfTileRef } from "../HalfTile/HalfTile";

const MATCHES = [
    {
        day: "SA",
        time: "12:00",
        home: "RSC",
        away: "SPA",
    },
    {
        day: "SA",
        time: "13:00",
        home: "SSR",
        away: "CSR",
    },
    {
        day: "SA",
        time: "14:00",
        home: "JSX",
        away: "DOM",
    },
    {
        day: "SA",
        time: "15:00",
        home: "PPR",
        away: "ISR",
    },
    {
        day: "SA",
        time: "16:00",
        home: "HOC",
        away: "FC",
    },
    {
        day: "SU",
        time: "12:00",
        home: "FCP",
        away: "LCP",
    },
    {
        day: "SU",
        time: "13:00",
        home: "HRM",
        away: "ESM",
    },
    {
        day: "SU",
        time: "14:00",
        home: "SSR",
        away: "CSR",
    },
    {
        day: "SU",
        time: "15:00",
        home: "RTK",
        away: "SWR",
    },
    {
        day: "SU",
        time: "16:00",
        home: "VER",
        away: "CDFL",
    },
];

export const PartyTrick = () => {
    const [values, setValues] = useState<
        Record<string, { home: number | null; away: number | null }>
    >({});

    const refs = useRef(Array.from({ length: MATCHES.length }).map(() => createRef<HalfTileRef>()));
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollToTile = (i: number) => {
        setTimeout(() => {
            const tile = document.getElementById(`tile-${i}`);
            const container = scrollRef.current;
            if (!tile || !container) return;

            const tileCenter = tile.offsetLeft + tile.offsetWidth / 2;
            const scrollLeft = tileCenter - container.offsetWidth / 2;

            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }, 0);
    };

    const onNext = (i: number) => {
        const next = refs.current[i + 1];

        if (!next || !next.current) {
            return;
        }

        return () => {
            scrollToTile(i + 1);
            next.current?.next();
        };
    };

    const onPrev = (i: number) => {
        const prev = refs.current[i - 1];

        if (!prev || !prev.current) {
            return;
        }

        return () => {
            scrollToTile(i - 1);
            prev.current?.prev();
        };
    };

    const onHomeStandingChange = (i: number, h: number | null) =>
        setValues(v => ({ ...v, [`${i}`]: { ...v[`${i}`], home: h } }));

    const onAwayStandingChange = (i: number, a: number | null) =>
        setValues(v => ({ ...v, [`${i}`]: { ...v[`${i}`], away: a } }));

    return (
        <div className="relative">
            <div
                className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"
                style={{ left: -65 }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black from-30% to-transparent z-10 pointer-events-none" />
            <div
                ref={scrollRef}
                className="overflow-x-scroll scroll-smooth -ml-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <ol className="flex flex-row gap-2 pl-16">
                    {MATCHES.map((match, i) => (
                        <li id={`tile-${i}`} className="tile" key={i}>
                            <HalfTile
                                {...match}
                                ref={refs.current[i]}
                                homeStanding={values[`${i}`]?.home ?? null}
                                awayStanding={values[`${i}`]?.away ?? null}
                                onHomeStandingChange={h => onHomeStandingChange(i, h)}
                                onAwayStandingChange={h => onAwayStandingChange(i, h)}
                                onNext={onNext(i)}
                                onPrev={onPrev(i)}
                            />
                        </li>
                    ))}
                    <li className="shrink-0 w-24" aria-hidden />
                </ol>
            </div>
        </div>
    );
};
