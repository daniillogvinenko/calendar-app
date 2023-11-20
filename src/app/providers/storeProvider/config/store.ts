import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "pages/MainPage";
import { dateDetailsPageReducer } from "pages/DateDetailsPage/model/slices/dateDetailsPageSlice";
import { addNewTaskReducer } from "features/addNewTask/model/slices/addNewTaskSlice";
import { editTaskReducer } from "features/editTask/model/slices/editTaskSlice";

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        dateDetailsPage: dateDetailsPageReducer,
        addNewTask: addNewTaskReducer,
        editTask: editTaskReducer,
    },
    devTools: _IS_DEV_,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
