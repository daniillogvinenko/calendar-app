import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type DateDetailsPageSchema } from "../types/DateDetailsPageSchema";
import { type TaskSchema } from "entities/Task";
import { type DateSchema } from "entities/Date";

const initialState: DateDetailsPageSchema = {
    tasks: [],
    tasksIsLoading: false,
    tasksError: "",
    date: {
        dateDay: "",
        dateMonth: "",
        dateWeekday: "",
        dateYear: "",
        id: 0,
    },
    dateIsLoading: false,
    dateError: "",
};

export const dateDetailsPageSlice = createSlice({
    name: "dateDetailsPage",
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<TaskSchema[]>) => {
            state.tasks = action.payload;
        },
        setTasksIsLoading: (state, action: PayloadAction<boolean>) => {
            state.tasksIsLoading = action.payload;
        },
        setTasksError: (state, action: PayloadAction<string>) => {
            state.tasksError = action.payload;
        },
        addTask: (state, action: PayloadAction<TaskSchema>) => {
            state.tasks = [...state.tasks, action.payload];
        },
        removeTasks: (state, action: PayloadAction<number[]>) => {
            state.tasks = state.tasks.filter(
                (task) => !action.payload.includes(task.id)
            );
        },
        editTaskById: (
            state,
            action: PayloadAction<{
                taskId: number;
                taskData: Omit<TaskSchema, "id" | "dateId" | "date">;
            }>
        ) => {
            const index = state.tasks.findIndex(
                (element) => element.id === action.payload.taskId
            );
            state.tasks[index].taskText = action.payload.taskData.taskText;
            state.tasks[index].taskTimeFrom =
                action.payload.taskData.taskTimeFrom;
            state.tasks[index].taskTimeTo = action.payload.taskData.taskTimeTo;
        },
        setDate: (state, action: PayloadAction<DateSchema>) => {
            state.date = action.payload;
        },
        setDateIsLoading: (state, action: PayloadAction<boolean>) => {
            state.dateIsLoading = action.payload;
        },
        setDateError: (state, action: PayloadAction<string>) => {
            state.dateError = action.payload;
        },
        reset: (state) => {
            state.tasks = [];
            state.tasksIsLoading = false;
            state.tasksError = "";
            state.date = {
                dateDay: "",
                dateMonth: "",
                dateWeekday: "",
                dateYear: "",
                id: 0,
            };
            state.dateIsLoading = false;
            state.dateError = "";
        },
    },
});

export const {
    actions: dateDetailsPageActions,
    reducer: dateDetailsPageReducer,
} = dateDetailsPageSlice;
