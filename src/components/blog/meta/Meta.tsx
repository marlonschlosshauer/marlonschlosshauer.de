import React from "react";
import { AuthorDate, AuthorDateProps } from "./author-date/AuthorDate";
import { ReadTime, ReadTimeProps } from "./read-time/ReadTime";

export type MetaProps = ReadTimeProps & AuthorDateProps;

export const Meta: React.FC<MetaProps> = ({ date, words }) => (
    <aside className="flex gap-2 text-white-alt selection:text-white">
        <AuthorDate date={date} />
        <span aria-hidden>|</span>
        <ReadTime words={words} />
    </aside>
);
