import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import classes from "./MainPage.module.scss";
import { fetchAllDates } from "../model/services/fetchAllDates/fetchAllDates";
import { useSelector } from "react-redux";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { getMonthName } from "shared/lib/getMonthName/getMonthName";
import { useTranslation } from "react-i18next";
import { getDateFormat } from "shared/lib/getDateFormat/getDateFormat";
import { getWeekDay } from "shared/lib/getWeekDay/getWeekDay";
import {
    getDates,
    getMainPageIsLoading,
} from "../model/selectors/mainPageSelectors";
import { Loader } from "shared/ui/Loader/Loader";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const dates = useSelector(getDates);
    const isLoading = useSelector(getMainPageIsLoading);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        dispatch(fetchAllDates);
    }, [dispatch]);

    if (isLoading) {
        return <Loader className={classes.Loader} />;
    }

    return (
        <div className={classes.MainPage + " container"}>
            {dates.map((date) => (
                <div className={classes.DateItem} key={date.id}>
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
            ))}
        </div>
    );
};
