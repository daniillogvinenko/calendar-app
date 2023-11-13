import { type TaskSchema } from "entities/Task";
import { type DateSchema } from "entities/Date";

export interface DateDetailsPageSchema {
    tasks: TaskSchema[];
    tasksIsLoading: boolean;
    date: DateSchema;
    dateIsLoading: boolean;
}
