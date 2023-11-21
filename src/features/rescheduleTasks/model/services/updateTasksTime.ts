import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { rescheduleTasksActions } from "../slices/rescheduleTasksSlice";
import { type TaskSchema } from "entities/Task";
import { calcRescheduleTime } from "shared/lib/calcRescheduleTime/calcRescheduleTime";
import { dateDetailsPageActions } from "../../../../pages/DateDetailsPage/model/slices/dateDetailsPageSlice";

export const updateTasksTime =
    (selectedTasks: number[], tasks: TaskSchema[], time: string) =>
    (dispatch: AppDispatch) => {
        dispatch(rescheduleTasksActions.toggleIsLoading(true));

        const promises = [];
        for (let i = 0; i < selectedTasks.length; i++) {
            const index = tasks.findIndex(
                (task) => task.id === selectedTasks[i]
            );
            const task = tasks[index];

            promises.push(
                axios.patch(`http://localhost:8000/tasks/${selectedTasks[i]}`, {
                    taskTimeFrom: calcRescheduleTime(task.taskTimeFrom, time),
                    taskTimeTo: calcRescheduleTime(task.taskTimeTo, time),
                })
            );
        }

        Promise.all(promises)
            .then(() => {
                dispatch(rescheduleTasksActions.toggleIsLoading(false));
                dispatch(rescheduleTasksActions.toggleModalIsOpened(false));
                // после того, как мы сделали запрос, надо вручную обновить стейт, чтобы отображались актуальные данные
                for (let i = 0; i < selectedTasks.length; i++) {
                    // берем из массива tasks элемент по id из selectedTasks
                    const index = tasks.findIndex(
                        (task) => task.id === selectedTasks[i]
                    );
                    const task = tasks[index];
                    dispatch(
                        dateDetailsPageActions.editTaskById({
                            taskId: task.id,
                            taskData: {
                                taskText: task.taskText,
                                taskTimeFrom: calcRescheduleTime(
                                    task.taskTimeFrom,
                                    time
                                ),
                                taskTimeTo: calcRescheduleTime(
                                    task.taskTimeTo,
                                    time
                                ),
                            },
                        })
                    );
                }
            })
            .catch(() => {
                dispatch(rescheduleTasksActions.toggleIsLoading(false));
                dispatch(rescheduleTasksActions.toggleModalIsOpened(false));
            });
    };
