import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { dateDetailsPageActions } from "../../slices/dateDetailsPageSlice";

export function deleteTasks(ids: number[]) {
    return (dispatch: AppDispatch) => {
        dispatch(dateDetailsPageActions.setTasksIsLoading(true));
        const promises = [];
        for (let i = 0; i < ids.length; i++) {
            promises.push(
                axios.delete(`http://localhost:8000/tasks/${ids[i]}`)
            );
        }
        Promise.all(promises)
            .then(() => {
                dispatch(dateDetailsPageActions.setTasksIsLoading(false));
                dispatch(dateDetailsPageActions.removeTasks(ids));
            })
            .catch(() => {
                dispatch(dateDetailsPageActions.setTasksIsLoading(false));
            });
    };
}
