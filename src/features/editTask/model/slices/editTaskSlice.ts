import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type EditTaskSchema } from "../types/EditTaskSchema";

const initialState: EditTaskSchema = {
    task: "",
    timeFrom: "",
    timeTo: "",
    isLoading: false,
    modalIsOpened: false,
    error: "",
};

export const editTaskSlice = createSlice({
    name: "editTask",
    initialState,
    reducers: {
        changeTaskInput: (state, action: PayloadAction<string>) => {
            state.task = action.payload;
        },
        changeTimeFromInput: (state, action: PayloadAction<string>) => {
            state.timeFrom = action.payload;
        },
        changeTimeToInput: (state, action: PayloadAction<string>) => {
            state.timeTo = action.payload;
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
            state.task = "";
            state.timeFrom = "";
            state.timeTo = "";
            state.isLoading = false;
            state.modalIsOpened = false;
            state.error = "";
        },
    },
});

export const { actions: editTaskActions, reducer: editTaskReducer } =
    editTaskSlice;
