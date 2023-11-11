import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "pages/MainPage";
import { dateDetailsPageReducer } from "pages/DateDetailsPage/model/slices/dateDetailsPageSlice";

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        dateDetailsPage: dateDetailsPageReducer,
    },
    devTools: _IS_DEV_,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
