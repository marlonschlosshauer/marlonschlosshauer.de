"use client";

import { FC } from "react";
import useSWR from "swr";
import { Note } from "@/components/shared/note/Note";
import { wasteTime } from "@/lib/time";

export interface AlternativeProps {
    country: string;
}

export const Alternative: FC<AlternativeProps> = ({ country }) => {
    const { data: alternative } = useSWR(
        `api/alternative/${country}`,
        async () => {
            await wasteTime(2000);
            return country === "de";
        },
        {
            suspense: true,
        }
    );

    if (!alternative) {
        return null;
    }

    return (
        <Note.Provider>
            <Note.Frame>
                <Note.Header>
                    <Note.Headline>An alternative is available</Note.Headline>
                </Note.Header>
                <Note.Body>
                    For your selection there is an alternative destination available.
                </Note.Body>
                <Note.Footer>
                    <Note.Link href="#async-composition-on-the-client">Visit alternative</Note.Link>
                </Note.Footer>
            </Note.Frame>
        </Note.Provider>
    );
};
