import React from "react";

export interface AuthorDateProps {
    date: string;
}

export const AuthorDate: React.FC<AuthorDateProps> = ({ date }) => (
    <p aria-label={`Published on ${date}`}>{date}</p>
);
