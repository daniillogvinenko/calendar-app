import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import classes from "./MainPage.module.scss";
import { fetchAllDates } from "../model/services/fetchAllDates/fetchAllDates";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
    getMainPageDates,
    getMainPageError,
    getMainPageIsLoading,
} from "../model/selectors/mainPageSelectors";
import { Loader } from "shared/ui/Loader/Loader";
import "shared/styles/splide.scss";
import { DateCard } from "./DateCard/DateCard";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const dates = useSelector(getMainPageDates);
    const isLoading = useSelector(getMainPageIsLoading);
    const error = useSelector(getMainPageError);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchAllDates);
    }, [dispatch]);

    if (isLoading) {
        return <Loader className={classes.Loader} />;
    }

    if (error) {
        return (
            <div className={"container"}>
                <div className={classes.error}>
                    {t("ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ДАТ :(")}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.MainPage + " container"}>
            <Splide
                options={{
                    direction: "ttb",
                    pagination: false,
                    autoHeight: true,
                    // heightRatio: 0.1,
                    height: 300,
                    wheel: true,
                }}
            >
                {dates.map((date) => (
                    <SplideSlide key={date.id}>
                        <DateCard date={date} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};
