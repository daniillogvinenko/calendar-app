import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { dateDetailsPageActions } from "pages/DateDetailsPage/model/slices/dateDetailsPageSlice";
import { deleteTasksActions } from "../../slices/deleteTasksSlice";

export function deleteTasks(ids: number[]) {
    return (dispatch: AppDispatch) => {
        dispatch(deleteTasksActions.toggleIsLoading(true));
        const promises = [];
        for (let i = 0; i < ids.length; i++) {
            promises.push(axios.delete(`${_API_}tasks/${ids[i]}`));
        }
        Promise.all(promises)
            .then(() => {
                dispatch(deleteTasksActions.toggleIsLoading(false));
                dispatch(deleteTasksActions.toggleModalIsOpened(false));
                dispatch(dateDetailsPageActions.removeTasks(ids));
            })
            .catch(() => {
                dispatch(deleteTasksActions.toggleIsLoading(false));
                dispatch(
                    deleteTasksActions.setModalError("404 ОШИБКА СЕРВЕРА")
                );
            });
    };
}
