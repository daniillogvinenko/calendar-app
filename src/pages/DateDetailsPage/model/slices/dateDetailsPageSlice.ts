import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type DateDetailsPageSchema } from "../types/DateDetailsPageSchema";
import { type TaskSchema } from "entities/Task";
import { type DateSchema } from "entities/Date";

const initialState: DateDetailsPageSchema = {
    tasks: [],
    tasksIsLoading: false,
    date: undefined,
    dateIsLoading: false,
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
        setDate: (state, action: PayloadAction<DateSchema>) => {
            state.date = action.payload;
        },
        setDateIsLoading: (state, action: PayloadAction<boolean>) => {
            state.dateIsLoading = action.payload;
        },
    },
});

export const {
    actions: dateDetailsPageActions,
    reducer: dateDetailsPageReducer,
} = dateDetailsPageSlice;
