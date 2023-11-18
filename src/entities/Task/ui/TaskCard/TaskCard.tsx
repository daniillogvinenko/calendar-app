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
            <div className={classes.content}>
                <div>
                    {task.id}. {task.taskText}
                </div>
                <div className={classes.time}>
                    {task.taskTimeFrom && task.taskTimeTo
                        ? task.taskTimeFrom + " - " + task.taskTimeTo
                        : task.taskTimeFrom}
                </div>
            </div>
            <svg
                className={classes.pencilIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="icons8-edit 1">
                    <path
                        id="Vector"
                        d="M19.1719 2C18.4481 2 17.7244 2.27562 17.1719 2.82812L16 4L20 8L21.1719 6.82812C22.2759 5.72412 22.2759 3.93313 21.1719 2.82812C20.6194 2.27562 19.8956 2 19.1719 2ZM14.5 5.5L3 17V21H7L18.5 9.5L14.5 5.5Z"
                    />
                </g>
            </svg>
        </div>
    );
};
