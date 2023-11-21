import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type RescheduleTasksSchema } from "../types/RescheduleTasksSchema";

const initialState: RescheduleTasksSchema = {
    timeInput: "",
    isLoading: false,
    modalIsOpened: false,
    error: "",
};

export const rescheduleTasksSlice = createSlice({
    name: "rescheduleTasks",
    initialState,
    reducers: {
        changeTimeInput: (state, action: PayloadAction<string>) => {
            state.timeInput = action.payload;
        },
        toggleIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        toggleModalIsOpened: (state, action: PayloadAction<boolean>) => {
            state.modalIsOpened = action.payload;
        },
        setModalError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        reset: (state) => {
            state.timeInput = "";
            state.isLoading = false;
            state.modalIsOpened = false;
            state.error = "";
        },
    },
});

export const {
    actions: rescheduleTasksActions,
    reducer: rescheduleTasksReducer,
} = rescheduleTasksSlice;
