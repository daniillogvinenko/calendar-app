import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { type TaskSchema } from "entities/Task";
import { addNewTaskActions } from "../slices/addNewTaskSlice";
import { dateDetailsPageActions } from "pages/DateDetailsPage/model/slices/dateDetailsPageSlice";

export const addNewTaskThunk =
    (dateId: number, newTask: Omit<TaskSchema, "id" | "dateId" | "date">) =>
    (dispatch: AppDispatch) => {
        dispatch(addNewTaskActions.toggleIsLoading(true));

        axios
            .post<TaskSchema>("http://localhost:8000/tasks", {
                taskText: newTask.taskText,
                taskTimeFrom: newTask.taskTimeFrom,
                taskTimeTo: newTask.taskTimeTo,
                dateId,
            })
            .then((response) => {
                dispatch(dateDetailsPageActions.addTask(response.data));
                dispatch(addNewTaskActions.reset());
            })
            .catch((value) => {
                dispatch(addNewTaskActions.toggleIsLoading(false));
                dispatch(addNewTaskActions.setModalError("404 ОШИБКА СЕРВЕРА"));
            });
    };
