"use client";

import { FC, Suspense, useState } from "react";
import { Select } from "@/components/shared/select/Select";
import { Alternative } from "./Alternative";

const countries = [
    { label: "Germany", value: "de" },
    { label: "Switzerland", value: "ch" },
    { label: "France", value: "fr" },
    { label: "USA", value: "us" },
];

export const SuspendedForm: FC = () => {
    const [country, setCountry] = useState<string | null>(null);

    return (
        <div className="p-4 border border-black-alt rounded-lg">
            <div className="flex flex-col gap-4">
                <Select
                    label="Country"
                    placeholder="Choose your country"
                    value={country}
                    options={countries}
                    onSelection={setCountry}
                />
                <div className="h-[200px]">
                    <Suspense fallback={<p>Loading...</p>}>
                        {country && <Alternative country={country} />}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};
