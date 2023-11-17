import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "pages/MainPage";
import { dateDetailsPageReducer } from "pages/DateDetailsPage/model/slices/dateDetailsPageSlice";
import { addNewTaskReducer } from "features/addNewTask/model/slices/addNewTaskSlice";

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        dateDetailsPage: dateDetailsPageReducer,
        addNewTask: addNewTaskReducer,
    },
    devTools: _IS_DEV_,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
