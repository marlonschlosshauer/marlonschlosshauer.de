import { forwardRef, useRef } from "react";
import clsx from "clsx";
import { useScore } from "@/lib/demo/shipping-golero/score";
import { PropsWithClassName } from "@/types/style";
import { Score } from "../Score/Score";

export interface TileProps {
    day: string;
    time: string;
    home: string;
    away: string;
    homeStanding?: string | number | null;
    awayStanding?: string | number | null;
}

export interface HalfTileProps extends TileProps {
    disabled?: boolean;
    onHomeStandingChange?: (value: number | null) => void;
    onAwayStandingChange?: (value: number | null) => void;
    onNext?: () => void;
    onPrev?: () => void;
    active?: boolean;
}

export interface HalfTileRef {
    next: () => void;
    prev: () => void;
    blur: () => void;
}

export const HalfTile = forwardRef<HalfTileRef, PropsWithClassName<HalfTileProps>>(
    (
        {
            disabled,
            active,
            day,
            time,
            home,
            away,
            homeStanding,
            awayStanding,
            className,
            ...props
        },
        forwardRef
    ) => {
        const homeStandingRef = useRef<HTMLInputElement | null>(null);
        const awayStandingRef = useRef<HTMLInputElement | null>(null);

        const { onPress, onHomeValueChange, onAwayValueChange, onBackHome, onBackAway } = useScore({
            ...props,
            homeStanding,
            awayStanding,
            forwardRef,
            homeStandingRef,
            awayStandingRef,
        });

        return (
            <button onClick={onPress} disabled={disabled}>
                <div
                    className={clsx(
                        "flex flex-col gap-2.5 p-3 border-2 rounded-[20px] min-w-[160px]",
                        className
                    )}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg text-white">{day}</p>
                        <p className="text-lg text-white">{time}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-lg font-bold text-white">
                                {home && home.slice(0, 4)}
                            </p>
                            <Score
                                disabled={disabled}
                                ref={homeStandingRef}
                                classNames={{
                                    block: "content-center justify-center h-6 w-6 rounded-[7px] bg-white",
                                }}
                                value={homeStanding}
                                onChange={onHomeValueChange}
                                onBack={onBackHome}
                            />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-lg font-bold text-white">
                                {away && away.slice(0, 4)}
                            </p>
                            <Score
                                classNames={{
                                    block: "content-center justify-center h-6 w-6 rounded-[7px] bg-white",
                                }}
                                disabled={disabled}
                                ref={awayStandingRef}
                                value={awayStanding}
                                onChange={onAwayValueChange}
                                onBack={onBackAway}
                            />
                        </div>
                    </div>
                </div>
            </button>
        );
    }
);
