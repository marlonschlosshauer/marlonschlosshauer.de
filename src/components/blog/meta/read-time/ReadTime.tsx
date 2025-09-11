import React from "react";

export interface ReadTimeProps {
    words: number;
}

export const ReadTime: React.FC<ReadTimeProps> = ({ words }) => (
    <p>{Math.ceil(words / 200)} min read</p>
);
