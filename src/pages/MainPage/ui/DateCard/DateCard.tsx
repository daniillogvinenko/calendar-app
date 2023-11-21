import { AppLink } from "shared/ui/AppLink/AppLink";
import classes from "./DateCard.module.scss";
import { useTranslation } from "react-i18next";
import { getDateFormat } from "shared/lib/getDateFormat/getDateFormat";
import { getMonthName } from "shared/lib/getMonthName/getMonthName";
import { getWeekDay } from "shared/lib/getWeekDay/getWeekDay";
import { type DateSchema } from "entities/Date";

interface DateCardProps {
    date: DateSchema;
}

export const DateCard = (props: DateCardProps) => {
    const { date } = props;
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.DateCard}>
            <AppLink to={`/${date.id}`}>
                {getDateFormat(
                    i18n.language as "ru" | "en",
                    +date.dateDay,
                    t(getMonthName(+date.dateMonth)),
                    +date.dateYear,
                    t(getWeekDay(+date.dateWeekday))
                )}
            </AppLink>
        </div>
    );
};
