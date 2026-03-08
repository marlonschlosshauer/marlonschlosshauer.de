export const formatStanding = (standing: string | number | null | undefined) => {
    const parsedStanding = standing?.toString()?.[0];

    if (!parsedStanding || parsedStanding === "N") {
        return "";
    }

    return parsedStanding;
};
