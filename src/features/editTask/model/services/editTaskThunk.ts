import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { type TaskSchema } from "entities/Task";
import { dateDetailsPageActions } from "pages/DateDetailsPage/model/slices/dateDetailsPageSlice";
import { editTaskActions } from "../slices/editTaskSlice";

export const editTaskThunk =
    (taskId: number, newTask: Omit<TaskSchema, "id" | "dateId" | "date">) =>
    (dispatch: AppDispatch) => {
        dispatch(editTaskActions.toggleIsLoading(true));
        axios
            .patch(`http://localhost:8000/tasks/${taskId}`, {
                taskText: newTask.taskText,
                taskTimeFrom: newTask.taskTimeFrom,
                taskTimeTo: newTask.taskTimeTo,
            })
            .then((response) => {
                dispatch(
                    dateDetailsPageActions.editTaskById({
                        taskId,
                        taskData: {
                            taskText: newTask.taskText,
                            taskTimeFrom: newTask.taskTimeFrom,
                            taskTimeTo: newTask.taskTimeTo,
                        },
                    })
                );
                dispatch(editTaskActions.reset());
            })
            .catch((value) => {
                dispatch(editTaskActions.toggleIsLoading(false));
                dispatch(editTaskActions.setModalError("404"));
            });
    };
