import classes from "./DateDetailsPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    getDateDetailsPageDateIsLoading,
    getDateDetailsPageTasksIsLoading,
} from "../model/selectors/dateDetailsPageSelectors";
import { DateDetailsPageHeader } from "./DateDetailsPageHeader/DateDetailsPageHeader";
import { DateDetailsPageList } from "./DateDetailsPageList/DateDetailsPageList";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { fetchTasksByDateId } from "../model/services/fetchTasksById/fetchTasksByDateId";
import { fetchDateById } from "../model/services/fetchDateById/fetchDateById";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { dateDetailsPageActions } from "../model/slices/dateDetailsPageSlice";

export const DateDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const tasksIsLoading = useSelector(getDateDetailsPageTasksIsLoading);
    const dateIsLoading = useSelector(getDateDetailsPageDateIsLoading);

    useEffect(() => {
        if (id) {
            dispatch(fetchDateById(+id));
            dispatch(fetchTasksByDateId(+id));
        } else {
            throw new Error("DateDetailsPage id - undefined");
        }

        return () => {
            dispatch(dateDetailsPageActions.reset());
        };
    }, [dispatch, id]);

    if (tasksIsLoading || dateIsLoading) {
        // if (1) {
        return (
            <div className={"container"}>
                <div className={classes.skeleton}>
                    <Skeleton
                        styleProp={{
                            margin: "98px auto 25px",
                            width: 630,
                            height: 84,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "28px 0 0 50px",
                                width: 150,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 25px",
                            width: 630,
                            height: 84,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "28px 0 0 50px",
                                width: 150,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 25px",
                            width: 630,
                            height: 84,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "28px 0 0 50px",
                                width: 150,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                    <Skeleton
                        styleProp={{
                            margin: "0 auto 25px",
                            width: 630,
                            height: 84,
                            borderRadius: "52px",
                        }}
                    >
                        <Skeleton
                            styleProp={{
                                margin: "28px 0 0 50px",
                                width: 150,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                    </Skeleton>
                </div>
            </div>
        );
    }

    if (!id) throw new Error("DateDetailsPage id - undefined");

    return (
        <div className={classes.DateDetails + " container"}>
            <DateDetailsPageHeader id={+id} />
            <DateDetailsPageList />
        </div>
    );
};
