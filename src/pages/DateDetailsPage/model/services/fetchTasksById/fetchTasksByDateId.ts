import { type AppDispatch } from "app/providers/storeProvider/config/store";
import axios from "axios";
import { dateDetailsPageActions } from "../../slices/dateDetailsPageSlice";
import { type TaskSchema } from "entities/Task";

export function fetchTasksByDateId(id: number) {
    return (dispatch: AppDispatch) => {
        dispatch(dateDetailsPageActions.setTasksError(""));
        dispatch(dateDetailsPageActions.setTasksIsLoading(true));
        axios
            .get<TaskSchema[]>(`${_API_}tasks?dateId=${id}&_expand=date`)
            .then((response) => {
                dispatch(dateDetailsPageActions.setTasks(response.data));
                dispatch(dateDetailsPageActions.setTasksIsLoading(false));
            })
            .catch((value) => {
                dispatch(dateDetailsPageActions.setTasksError("Error"));
                dispatch(dateDetailsPageActions.setTasksIsLoading(false));
            });
    };
}
