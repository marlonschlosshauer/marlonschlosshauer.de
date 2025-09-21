import { FC, useId } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";

export interface SelectProps {
    label: string;
    placeholder: string;
    value: string | null;
    options: { label: string; value: string }[];
    onSelection: (value: string) => void;
}

export const Select: FC<PropsWithClassName<SelectProps>> = ({
    label,
    placeholder,
    value,
    options,
    onSelection,
    className,
}) => {
    const id = useId();
    return (
        <div className={clsx("flex flex-col gap-2", className)}>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={label}
                value={value === null ? undefined : (value ?? undefined)}
                className="p-2 border border-primary rounded-md appearance-none"
                onChange={e => onSelection(e.currentTarget.value ?? null)}>
                <option value="">{placeholder}</option>
                {options.map((option, key) => (
                    <option key={key} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
