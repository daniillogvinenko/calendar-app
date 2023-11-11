import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import classes from "./Navbar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useEffect, useState } from "react";
import { getDateFormat } from "shared/lib/getDateFormat/getDateFormat";
import { getMonthName } from "shared/lib/getMonthName/getMonthName";
import { getWeekDay } from "shared/lib/getWeekDay/getWeekDay";
import { Loader } from "shared/ui/Loader/Loader";
import { AppLink } from "shared/ui/AppLink/AppLink";

export const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const newDate = new Date();
            const day = newDate.getDate();
            const month = newDate.getMonth();
            const year = newDate.getFullYear();
            const hour = newDate.getHours();
            const minutes = newDate.getMinutes();
            const weekDay = newDate.getDay();

            setDate(
                getDateFormat(
                    i18n.language as "ru" | "en",
                    day,
                    t(getMonthName(month)),
                    year,
                    t(getWeekDay(weekDay))
                )
            );
            setTime(
                `${hour < 10 ? "0" + hour : hour}:${
                    minutes < 10 ? "0" + minutes : minutes
                }`
            );
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [t, i18n.language]);

    return (
        <div className={classes.Navbar}>
            <div className="container">
                <div className={classes.NavbarWrapper}>
                    {date && time ? (
                        <div className={classes.date}>
                            <div>{time}</div>
                            <div>{date}</div>
                        </div>
                    ) : (
                        <Loader />
                    )}
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
