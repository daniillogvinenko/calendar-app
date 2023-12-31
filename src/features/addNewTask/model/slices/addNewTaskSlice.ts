import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type AddNewTaskSchema } from "../types/AddNewTaskSchema";

const initialState: AddNewTaskSchema = {
    task: "",
    timeFrom: "",
    timeTo: "",
    isLoading: false,
    modalIsOpened: false,
    error: "",
};

export const addNewTaskSlice = createSlice({
    name: "addNewTask",
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

export const { actions: addNewTaskActions, reducer: addNewTaskReducer } =
    addNewTaskSlice;
