import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type NavbarSchema } from "../types/NavbarSchema";

const initialState: NavbarSchema = {
    day: 0,
    hour: 0,
    minutes: 0,
    month: 0,
    weekDay: 0,
    year: 0,
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setNewData: (state, action: PayloadAction<NavbarSchema>) => {
            state.day = action.payload.day;
            state.hour = action.payload.hour;
            state.minutes = action.payload.minutes;
            state.month = action.payload.month;
            state.weekDay = action.payload.weekDay;
            state.year = action.payload.year;
        },
    },
});

export const { actions: navbarActions, reducer: navbarReducer } = navbarSlice;
