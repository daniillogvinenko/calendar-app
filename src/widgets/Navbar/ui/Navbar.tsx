import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import classes from "./Navbar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useEffect } from "react";
import { getDateFormat } from "shared/lib/getDateFormat/getDateFormat";
import { getMonthName } from "shared/lib/getMonthName/getMonthName";
import { getWeekDay } from "shared/lib/getWeekDay/getWeekDay";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useSelector } from "react-redux";
import {
    getNavbarDay,
    getNavbarHour,
    getNavbarMinutes,
    getNavbarMonth,
    getNavbarWeekday,
    getNavbarYear,
} from "../model/selectors/navbarSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { navbarActions } from "../model/slices/navbarSlice";

export const Navbar = () => {
    const { t, i18n } = useTranslation();

    const dispatch = useAppDispatch();
    const day = useSelector(getNavbarDay);
    const month = useSelector(getNavbarMonth);
    const year = useSelector(getNavbarYear);
    const hour = useSelector(getNavbarHour);
    const minutes = useSelector(getNavbarMinutes);
    const weekDay = useSelector(getNavbarWeekday);

    useEffect(() => {
        const newDate = new Date();
        dispatch(
            navbarActions.setNewData({
                day: newDate.getDate(),
                month: newDate.getMonth(),
                hour: newDate.getHours(),
                minutes: newDate.getMinutes(),
                weekDay: newDate.getDay(),
                year: newDate.getFullYear(),
            })
        );
        const interval = setInterval(() => {
            const newDate = new Date();
            dispatch(
                navbarActions.setNewData({
                    day: newDate.getDate(),
                    month: newDate.getMonth(),
                    hour: newDate.getHours(),
                    minutes: newDate.getMinutes(),
                    weekDay: newDate.getDay(),
                    year: newDate.getFullYear(),
                })
            );
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [t, i18n.language, dispatch]);

    return (
        <div className={classes.Navbar}>
            <div className="container">
                <div className={classes.NavbarWrapper}>
                    {
                        <div className={classes.date}>
                            <div>{`${hour < 10 ? "0" + hour : hour}:${
                                minutes < 10 ? "0" + minutes : minutes
                            }`}</div>
                            <div>
                                {getDateFormat(
                                    i18n.language as "ru" | "en",
                                    day,
                                    t(getMonthName(month)),
                                    year,
                                    t(getWeekDay(weekDay))
                                )}
                            </div>
                        </div>
                    }
                    <AppLink to={"/"}>
                        <div className={classes.AppLogo}>MyApp.</div>
                    </AppLink>
                    <div className={classes.switchers}>
                        <LangSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </div>
    );
};
