import { ChangeEvent, ForwardedRef, RefObject, useImperativeHandle } from "react";

export interface ScoreRef {
    next: () => void;
    prev: () => void;
    blur: () => void;
}

export interface UseScoreProps {
    homeStanding?: string | number | null;
    awayStanding?: string | number | null;
    homeStandingRef: RefObject<HTMLInputElement | null>;
    awayStandingRef: RefObject<HTMLInputElement | null>;
    forwardRef: ForwardedRef<ScoreRef>;
    onHomeStandingChange?: (value: number | null) => void;
    onAwayStandingChange?: (value: number | null) => void;
    onNext?: () => void;
    onPrev?: () => void;
}

export const useScore = ({
    homeStanding,
    awayStanding,
    homeStandingRef,
    awayStandingRef,
    forwardRef,
    onHomeStandingChange,
    onAwayStandingChange,
    onNext,
    onPrev,
}: UseScoreProps) => {
    const focusHome = () => homeStandingRef?.current?.focus();
    const focusAway = () => awayStandingRef?.current?.focus();

    const onPress = () => {
        if (!homeStanding) {
            return focusHome();
        }

        if (!awayStanding) {
            return focusAway();
        }

        focusHome();
    };

    const onHomeValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: key } = e.target;

        switch (key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
                onHomeStandingChange?.(+key);
                focusAway();
            }
        }
    };

    const onBackHome = () => {
        if (!homeStanding) {
            if (onPrev) {
                onPrev();
            } else {
                homeStandingRef.current?.blur();
            }
        } else {
            onHomeStandingChange?.(null);
        }
    };

    const onAwayValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: key } = e.target;

        switch (key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
                onAwayStandingChange?.(+key);

                if (onNext) {
                    onNext();
                } else {
                    awayStandingRef.current?.blur();
                }
            }
        }
    };

    const onBackAway = () => {
        if (!awayStanding) {
            focusHome();
        } else {
            onAwayStandingChange?.(null);
        }
    };

    const onFocus = () => {
        if (!homeStandingRef.current || !awayStandingRef.current) {
            return;
        }

        if (
            document.activeElement !== homeStandingRef.current &&
            document.activeElement !== awayStandingRef.current
        ) {
            if (homeStanding !== null) {
                return focusAway();
            }

            if (awayStanding !== null) {
                return focusHome();
            }

            return focusHome();
        }

        if (document.activeElement !== homeStandingRef.current) {
            if (homeStanding === null) {
                return focusHome();
            }
        }

        if (document.activeElement !== awayStandingRef.current) {
            if (awayStanding === null) {
                return focusAway();
            }
        }
    };

    useImperativeHandle(forwardRef, () => ({
        next: () => {
            onFocus();
            focusHome();
        },
        prev: () => {
            onFocus();
            focusAway();
        },
        blur: () => {
            if (!homeStandingRef.current || !awayStandingRef.current) {
                return;
            }

            if (document.activeElement === homeStandingRef.current) {
                homeStandingRef.current.blur();
            }

            if (document.activeElement === awayStandingRef.current) {
                awayStandingRef.current.blur();
            }
        },
    }));

    return {
        onPress,
        onHomeValueChange,
        onAwayValueChange,
        onBackHome,
        onBackAway,
    };
};
