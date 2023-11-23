import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type DeleteTasksSchema } from "../types/DeleteTasksSchema";

const initialState: DeleteTasksSchema = {
    isLoading: false,
    modalIsOpened: false,
    error: "",
};

export const deleteTasksSlice = createSlice({
    name: "deleteTasks",
    initialState,
    reducers: {
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
            state.isLoading = false;
            state.modalIsOpened = false;
            state.error = "";
        },
    },
});

export const { actions: deleteTasksActions, reducer: deleteTasksReducer } =
    deleteTasksSlice;
