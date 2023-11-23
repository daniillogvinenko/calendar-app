import { useSelector } from "react-redux";
import {
    getDateDetailsPageTasks,
    getDateDetailsPageTasksError,
} from "../../model/selectors/dateDetailsPageSelectors";
import classes from "./DateDetailsPageList.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddNewTask } from "features/addNewTask";
import { RescheduleTasks } from "features/rescheduleTasks";
import { TaskCard } from "entities/Task";
import { DeleteTasks } from "features/deleteTasks";

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

    const onSelectAll = () => {
        setSelectedTasks(tasks.map((item) => item.id));
    };

    const onSelectNone = () => {
        setSelectedTasks([]);
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
                            <DeleteTasks selectedTasks={selectedTasks} />
                            <RescheduleTasks
                                selectedTasks={selectedTasks}
                                tasks={tasks}
                            />
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
