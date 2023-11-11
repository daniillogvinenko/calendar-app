import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { dateDetailsPageActions } from "../../slices/dateDetailsPageSlice";
import { type TaskSchema } from "entities/Task";

export function fetchTasksByDateId(id: number) {
    return (dispatch: AppDispatch) => {
        dispatch(dateDetailsPageActions.setTasksIsLoading(true));
        axios
            .get<TaskSchema[]>(
                `http://localhost:8000/tasks?dateId=${id}&_expand=date`
            )
            .then((response) => {
                dispatch(dateDetailsPageActions.setTasks(response.data));
                dispatch(dateDetailsPageActions.setTasksIsLoading(false));
            })
            .catch((value) => {
                console.log(value);
                dispatch(dateDetailsPageActions.setTasksIsLoading(false));
            });
    };
}
