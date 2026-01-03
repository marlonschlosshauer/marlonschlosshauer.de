"use server";

import { unstable_cache } from "next/cache";
import { wasteTime } from "@/lib/time";

export const rawAction = async () => {
    return Date.now();
};

export const unstableAction = unstable_cache(async () => {
    return Date.now();
}, ["unstable-action"]);

export const wasteTimeAction1 = async () => {
    await wasteTime(2000);
    return Date.now();
};

export const wasteTimeAction2 = async () => {
    await wasteTime(2000);
    return Date.now();
};
