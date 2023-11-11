import { type DateSchema } from "../../../Date";

export interface TaskSchema {
    id: number;
    taskText: string;
    taskTimeFrom: string;
    taskTimeTo: string;
    dateId: number;
    date?: DateSchema;
}
