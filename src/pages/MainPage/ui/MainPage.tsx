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
import "shared/styles/splide.scss";
import { DateCard } from "./DateCard/DateCard";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import {
    getNavbarDay,
    getNavbarMonth,
    getNavbarYear,
} from "widgets/Navbar/model/selectors/navbarSelectors";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const dates = useSelector(getMainPageDates);
    const isLoading = useSelector(getMainPageIsLoading);
    const error = useSelector(getMainPageError);
    const { t } = useTranslation();
    const currentDay = useSelector(getNavbarDay);
    const currentMonth = useSelector(getNavbarMonth);
    const currentYear = useSelector(getNavbarYear);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(fetchAllDates(currentDay, currentMonth, currentYear));
    }, [dispatch, currentDay, currentMonth, currentYear]);

    if (isLoading) {
        // if (1) {
        return (
            <div className={"container"}>
                <div className={classes.skeleton}>
                    <Skeleton
                        styleProp={{
                            margin: "98px auto 21px",
                            width: 630,
                            height: 74,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "20px 0 0 50px",
                                width: 250,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 21px",
                            width: 630,
                            height: 74,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "20px 0 0 50px",
                                width: 250,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 21px",
                            width: 630,
                            height: 74,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "20px 0 0 50px",
                                width: 250,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 21px",
                            width: 630,
                            height: 74,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "20px 0 0 50px",
                                width: 250,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 21px",
                            width: 630,
                            height: 74,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "20px 0 0 50px",
                                width: 250,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                </div>
            </div>
        );
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
        <div className="container">
            <div className={classes.MainPage}>
                <Splide
                    options={{
                        rewindByDrag: true,
                        direction: "ttb",
                        pagination: false,
                        autoHeight: true,
                        // heightRatio: 0.1,
                        height: 460,
                        wheel: true,
                    }}
                >
                    {dates.map((date) => (
                        <SplideSlide key={date.id}>
                            <DateCard
                                date={date}
                                today={currentDay === +date.dateDay}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};
