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

export const DateDetailsPageList = () => {
    const { t } = useTranslation();
    const tasks = useSelector(getDateDetailsPageTasks);
    const tasksError = useSelector(getDateDetailsPageTasksError);
    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

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
            <div className={classes.AddNewTaskContainer}>
                {selectedTasks.length ? null : <AddNewTask />}
            </div>
        </div>
    );
};
