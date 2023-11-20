import { useSelector } from "react-redux";
import {
    getDateDetailsPageTasks,
    getDateDetailsPageTasksError,
} from "../../model/selectors/dateDetailsPageSelectors";
import classes from "./DateDetailsPageList.module.scss";
import { TaskCard } from "entities/Task/ui/TaskCard/TaskCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddNewTask } from "features/addNewTask";
import RescheduleIcon from "shared/assets/icons/Reschedule.svg";
import DeleteIcon from "shared/assets/icons/DeleteIcon.svg";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { deleteTasks } from "../../model/services/deleteTasks/deleteTasks";

export const DateDetailsPageList = () => {
    const { t } = useTranslation();
    const tasks = useSelector(getDateDetailsPageTasks);
    const tasksError = useSelector(getDateDetailsPageTasksError);
    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
    const dispatch = useAppDispatch();

    if (tasksError) {
        return (
            <div className={classes.empty}>
                {t("ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ЗАДАЧ :(")}
            </div>
        );
    }

    if (!tasks.length) {
        return (
            <div className={classes.empty}>
                <div>{t("ПУСТО")}</div>
                <AddNewTask />
            </div>
        );
    }

    const onChangeSelectedTasks = (newArr: number[]) => {
        setSelectedTasks(newArr);
    };

    const onSelectAll = () => {
        setSelectedTasks(tasks.map((item) => item.id));
    };

    const onSelectNone = () => {
        setSelectedTasks([]);
    };

    const onDeleteSelected = () => {
        dispatch(deleteTasks(selectedTasks));
    };

    return (
        <div className={classes.DateDetailsPageList}>
            {tasks.map((task) => {
                return (
                    <TaskCard
                        selectedTasks={selectedTasks}
                        setSelectedTasks={onChangeSelectedTasks}
                        task={task}
                        key={task.id}
                    />
                );
            })}
            <div className={classes.bottomPanel}>
                {selectedTasks.length ? (
                    <>
                        <button
                            className={classes.cancelSelection}
                            onClick={onSelectNone}
                        >
                            {t("Отменить")}
                        </button>
                        <div className={classes.buttons}>
                            <button
                                onClick={onDeleteSelected}
                                className={classes.DeleteIcon}
                            >
                                <DeleteIcon className={classes.DeleteIconSvg} />
                            </button>
                            <button className={classes.RescheduleIcon}>
                                <RescheduleIcon
                                    className={classes.RescheduleIconSvg}
                                />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className={classes.selectAllButton}
                            onClick={onSelectAll}
                        >
                            {t("Выбрать все")}
                        </button>
                        <div className={classes.addNewTaskButton}>
                            <AddNewTask />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
