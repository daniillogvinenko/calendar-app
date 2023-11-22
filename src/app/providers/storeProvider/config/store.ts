import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "pages/MainPage";
import { dateDetailsPageReducer } from "pages/DateDetailsPage";
import { addNewTaskReducer } from "features/addNewTask";
import { editTaskReducer } from "features/editTask";
import { rescheduleTasksReducer } from "features/rescheduleTasks";
import { navbarReducer } from "widgets/Navbar/model/slices/navbarSlice";

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        dateDetailsPage: dateDetailsPageReducer,
        addNewTask: addNewTaskReducer,
        editTask: editTaskReducer,
        rescheduleTasks: rescheduleTasksReducer,
        navbar: navbarReducer,
    },
    devTools: _IS_DEV_,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
