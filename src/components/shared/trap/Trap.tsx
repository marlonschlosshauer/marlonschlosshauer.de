import { FC, PropsWithChildren, useEffect, useRef } from "react";

export interface TrapProps {
    active?: boolean;
}

export const Trap: FC<PropsWithChildren<TrapProps>> = ({ children, active = true }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const previousActiveElementRef = useRef<Element | null>(null);

    const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
        const focusableSelectors = [
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            '[tabindex]:not([tabindex="-1"])',
        ];

        const elements = Array.from(
            container.querySelectorAll(focusableSelectors.join(","))
        ) as HTMLElement[];

        return elements.filter(element => {
            const tabIndex = element.tabIndex;
            return tabIndex !== -1;
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (!active || !containerRef.current) return;

        if (event.key !== "Tab") return;

        const focusableElements = getFocusableElements(containerRef.current);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) return;

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    };

    useEffect(() => {
        if (active) {
            previousActiveElementRef.current = document.activeElement;

            const focusableElements = containerRef.current
                ? getFocusableElements(containerRef.current)
                : [];

            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }

            document.addEventListener("keydown", handleKeyDown);
        } else {
            if (previousActiveElementRef.current instanceof HTMLElement) {
                previousActiveElementRef.current.focus();
            }
            previousActiveElementRef.current = null;
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [active]);

    return (
        <div ref={containerRef} data-focus-trap={active}>
            {children}
        </div>
    );
};
