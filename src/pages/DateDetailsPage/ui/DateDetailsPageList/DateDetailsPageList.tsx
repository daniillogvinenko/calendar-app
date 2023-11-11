import { useSelector } from "react-redux";
import {
    getDateDetailsPageSelectedTasks,
    getDateDetailsPageTasks,
} from "../../model/selectors/dateDetailsPageSelectors";
import classes from "./DateDetailsPageList.module.scss";

interface DateDetailsPageListProps {
    id: number;
}

export const DateDetailsPageList = (props: DateDetailsPageListProps) => {
    const tasks = useSelector(getDateDetailsPageTasks);
    const selectedTasks = useSelector(getDateDetailsPageSelectedTasks);

    if (!tasks.length) return;

    return (
        <div>
            {tasks.map((task) => {
                let className = "";

                if (selectedTasks.includes(task.id)) {
                    className = classes.selected;
                }

                return (
                    <div key={task.id} className={className}>
                        {task.id}. {task.taskText} {task.taskTimeFrom}{" "}
                        {task.taskTimeTo}
                    </div>
                );
            })}
        </div>
    );
};
