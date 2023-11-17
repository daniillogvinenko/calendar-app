import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type AddNewTaskSchema } from "../types/AddNewTaskSchema";

const initialState: AddNewTaskSchema = {
    task: "",
    timeFrom: "",
    timeTo: "",
    isLoading: false,
    modalIsOpened: false,
};

export const addNewTaskSlice = createSlice({
    name: "mainPage",
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
    },
});

export const { actions: addNewTaskActions, reducer: addNewTaskReducer } =
    addNewTaskSlice;
