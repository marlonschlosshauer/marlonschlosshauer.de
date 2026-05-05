import React from "react";
import clsx from "clsx";
import { PropsWithClassName } from "@/types/style";
import { AuthorDate, AuthorDateProps } from "./author-date/AuthorDate";
import { ReadTime, ReadTimeProps } from "./read-time/ReadTime";
import { ShareButton } from "./share-button/ShareButton";

export type MetaProps = ReadTimeProps & AuthorDateProps;

export const Meta: React.FC<PropsWithClassName<MetaProps>> = ({ date, words, className }) => (
    <aside className={clsx("flex gap-2 text-white-alt selection:text-white", className)}>
        <AuthorDate date={date} />
        <span aria-hidden>|</span>
        <ReadTime words={words} />
        <div className="ml-auto">
            <ShareButton />
        </div>
    </aside>
);
