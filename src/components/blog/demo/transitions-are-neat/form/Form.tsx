"use client";

import { FC, useState, useTransition } from "react";
import { Badge } from "@/components/shared/badge/Badge";
import { Button } from "@/components/shared/button/Button";
import { Select } from "@/components/shared/select/Select";
import { Alternative } from "./Alternative";

const countries = [
    { label: "Germany", value: "de" },
    { label: "Switzerland", value: "ch" },
    { label: "France", value: "fr" },
    { label: "USA", value: "us" },
];

export const Form: FC = () => {
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState<string | null>(null);

    const onSetCountry = (country: string | null) => startTransition(() => setCountry(country));

    const onConfirm = () =>
        startTransition(() => {
            setCountry("");
        });

    return (
        <div className="p-4 border border-black-alt rounded-lg">
            <div className="flex flex-col gap-4">
                <Badge label="Page" />
                <p className="text-4xl">Select your destination</p>
                <div className="flex flex-col gap-8">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper odio
                        eu imperdiet fringilla. Nam orci purus, bibendum vestibulum nisi ut,
                        eleifend commodo orci. Vivamus rhoncus imperdiet lacus, ac pulvinar ligula
                        hendrerit eget.
                    </p>
                    <div className="flex flex-col gap-4">
                        <Select
                            label="Country"
                            placeholder="Choose your country"
                            value={country}
                            options={countries}
                            onSelection={onSetCountry}
                        />
                    </div>
                </div>
                <div className="h-[200px]">{country && <Alternative country={country} />}</div>
                <div className="flex flex-row gap-2">
                    <Button
                        disabled={!country || isPending}
                        loading={isPending}
                        onClick={onConfirm}>
                        Confirm
                    </Button>
                    <Button variant="ghost" onClick={onConfirm}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
};
