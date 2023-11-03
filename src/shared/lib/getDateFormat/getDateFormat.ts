export const getDateFormat = (
    lang: "en" | "ru",
    day: number,
    month: string,
    year: number,
    weekDay: string
) => {
    if (lang === "en") {
        return `${weekDay}, ${month} ${day}, ${year}`;
    }

    return `${day} ${month} ${year} - ${weekDay}`;
};
