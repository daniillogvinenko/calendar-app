import { useSelector } from "react-redux";
import { getDateDetailsPageTasks } from "../../model/selectors/dateDetailsPageSelectors";
import classes from "./DateDetailsPageList.module.scss";
import { TaskCard } from "entities/Task/ui/TaskCard/TaskCard";
import { useState } from "react";

interface DateDetailsPageListProps {
    id: number;
}

export const DateDetailsPageList = (props: DateDetailsPageListProps) => {
    const tasks = useSelector(getDateDetailsPageTasks);
    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

    if (!tasks.length) return;

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
        </div>
    );
};
