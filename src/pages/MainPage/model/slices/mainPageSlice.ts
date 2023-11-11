import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type MainPageSchema } from "../types/MainPageSchema";
import { type DateSchema } from "entities/Date";

const initialState: MainPageSchema = {
    dates: [],
    isLoading: false,
};

export const mainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        setDates: (state, action: PayloadAction<DateSchema[]>) => {
            state.dates = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { actions: mainPageActions, reducer: mainPageReducer } =
    mainPageSlice;
