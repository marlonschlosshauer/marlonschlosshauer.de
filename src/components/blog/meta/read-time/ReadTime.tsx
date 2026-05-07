"use client";

import React, { useState } from "react";

export interface ReadTimeProps {
    words: number;
}

export const ReadTime: React.FC<ReadTimeProps> = ({ words }) => {
    const [showInSeconds, setShowInSeconds] = useState(false);

    const onClick = () => setShowInSeconds(s => !s);

    return (
        <button onClick={onClick} className="cursor-pointer">
            {showInSeconds
                ? `${Math.floor(Math.ceil(words / 200) * 60)} sec read`
                : `${Math.ceil(words / 200)} min read`}
        </button>
    );
};
