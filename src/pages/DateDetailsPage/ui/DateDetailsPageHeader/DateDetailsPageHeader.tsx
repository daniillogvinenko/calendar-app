import classes from "./DateDetailsPageHeader.module.scss";
import { getDateFormat } from "shared/lib/getDateFormat/getDateFormat";
import { useTranslation } from "react-i18next";
import { getMonthName } from "shared/lib/getMonthName/getMonthName";
import { getWeekDay } from "shared/lib/getWeekDay/getWeekDay";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useSelector } from "react-redux";
import { getDateDetailsPageDate } from "../../model/selectors/dateDetailsPageSelectors";

interface DateDetailsPageHeaderProps {
    className?: string;
    id: number;
}

export const DateDetailsPageHeader = (props: DateDetailsPageHeaderProps) => {
    const { i18n, t } = useTranslation();
    const date = useSelector(getDateDetailsPageDate);
    const { className } = props;

    if (!date) return;

    return (
        <div className={[classes.DateDetailsPageHeader, className].join(" ")}>
            <AppLink to={"/"}>
                <div className={classes.gobackBtn}>
                    <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.5 1.5L2 11L11.5 20.5" strokeWidth="2" />
                    </svg>
                    {t("Назад")}
                </div>
            </AppLink>

            <div className={classes.date}>
                {getDateFormat(
                    i18n.language as "ru" | "en",
                    +date.dateDay,
                    t(getMonthName(+date.dateMonth)),
                    +date.dateYear,
                    t(getWeekDay(+date.dateWeekday))
                )}
            </div>
        </div>
    );
};
