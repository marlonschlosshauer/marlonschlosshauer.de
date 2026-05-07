"use client";

import React, { useState } from "react";

export interface AuthorDateProps {
    date: string;
}

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

export const AuthorDate: React.FC<AuthorDateProps> = ({ date }) => {
    const [showLocalTime, setShowLocalTime] = useState(false);

    const onClick = () => setShowLocalTime(s => !s);

    return (
        <button onClick={onClick} className="cursor-pointer">
            {showLocalTime ? (
                <p aria-label={`Published on ${formatDate(date)}`}>{formatDate(date)}</p>
            ) : (
                <p aria-label={`Published on ${date}`}>{date}</p>
            )}
        </button>
    );
};
