import classes from "./DateDetailsPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    getDateDetailsPageDateIsLoading,
    getDateDetailsPageTasksIsLoading,
} from "../model/selectors/dateDetailsPageSelectors";
import { DateDetailsPageHeader } from "./DateDetailsPageHeader/DateDetailsPageHeader";
import { DateDetailsPageList } from "./DateDetailsPageList/DateDetailsPageList";
import { Loader } from "shared/ui/Loader/Loader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { fetchTasksByDateId } from "../model/services/fetchTasksById/fetchTasksByDateId";
import { fetchDateById } from "../model/services/fetchDateById/fetchDateById";

export const DateDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const tasksIsLoading = useSelector(getDateDetailsPageTasksIsLoading);
    const dateIsLoading = useSelector(getDateDetailsPageDateIsLoading);

    useEffect(() => {
        dispatch(fetchDateById(+id));
        dispatch(fetchTasksByDateId(+id));
    }, [dispatch, id]);

    if (tasksIsLoading || dateIsLoading) return <Loader />;

    return (
        <div className={classes.DateDetails + " container"}>
            <DateDetailsPageHeader id={+id} />
            <DateDetailsPageList id={+id} />
        </div>
    );
};
