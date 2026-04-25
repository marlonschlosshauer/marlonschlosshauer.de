import React, { forwardRef, useImperativeHandle, useRef } from "react";
import clsx from "clsx";
import { formatStanding } from "@/lib/demo/shipping-golero/tile";
import { PropsWithClassNames } from "@/types/style";

export interface ScoreProps {
    value?: string | number | null;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBack?: () => void;
    disabled?: boolean;
}

export interface ScoreRef {
    blur: () => void;
    focus: () => void;
}

export const Score = forwardRef<ScoreRef, PropsWithClassNames<ScoreProps, "block" | "score">>(
    ({ value, onChange, onBack, disabled, classNames }, forwardRef) => {
        const ref = useRef<HTMLInputElement | null>(null);

        useImperativeHandle(
            forwardRef,
            () => ({
                focus: () => ref?.current?.focus(),
                blur: () => ref?.current?.blur(),
            }),
            []
        );

        return (
            <div
                className={clsx(
                    "content-center justify-center h-6 w-6 rounded-[7px]",
                    classNames?.block
                )}>
                <input
                    ref={ref}
                    disabled={disabled}
                    className={clsx(
                        "text-black font-bold text-base text-center w-full rounded-[7px]",
                        classNames?.score
                    )}
                    value={formatStanding(value)}
                    onChange={onChange}
                    onKeyDown={e => {
                        if (e.code === "Backspace") onBack?.();
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                />
            </div>
        );
    }
);
