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
        setDate: (state, action: PayloadAction<DateSchema>) => {
            state.date = action.payload;
        },
        setDateIsLoading: (state, action: PayloadAction<boolean>) => {
            state.dateIsLoading = action.payload;
        },
        setDateError: (state, action: PayloadAction<string>) => {
            state.dateError = action.payload;
        },
    },
});

export const {
    actions: dateDetailsPageActions,
    reducer: dateDetailsPageReducer,
} = dateDetailsPageSlice;
