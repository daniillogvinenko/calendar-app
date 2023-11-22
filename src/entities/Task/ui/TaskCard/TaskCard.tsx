import { EditTask } from "features/editTask";
import { type TaskSchema } from "../../model/types/task";
import classes from "./TaskCard.module.scss";

interface TaskCardProps {
    className?: string;
    task: TaskSchema;
    selectedTasks: number[];
    setSelectedTasks?: (newArr: number[]) => void;
}

export const TaskCard = (props: TaskCardProps) => {
    const { task, selectedTasks, setSelectedTasks } = props;
    const isSelected = selectedTasks?.includes(task.id);

    const onSelect = () => {
        if (isSelected) {
            // убираем из массива selectedTasks элемент с нужным id, сортируем
            setSelectedTasks?.(
                selectedTasks
                    .filter((item) => item !== task.id)
                    .sort((a, b) => a - b)
            );
        } else {
            // Добавляем в selectedTasks элемент с нужным id, сортируем
            setSelectedTasks?.(
                [...selectedTasks, task.id].sort((a, b) => a - b)
            );
        }
    };

    const TaskCardClassName = isSelected
        ? classes.TaskCard + " " + classes.selected
        : classes.TaskCard;

    return (
        <div key={task.id} className={TaskCardClassName}>
            <div onClick={onSelect} className={classes.selectButton} />
            <div onClick={onSelect} className={classes.content}>
                <div>{task.taskText}</div>
                <div className={classes.time}>
                    {task.taskTimeFrom && task.taskTimeTo
                        ? task.taskTimeFrom + " - " + task.taskTimeTo
                        : task.taskTimeFrom}
                </div>
            </div>
            <EditTask taskId={task.id} />
        </div>
    );
};
