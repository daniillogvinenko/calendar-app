import { type StateSchema } from "app/providers/storeProvider";

export const getAddNewTaskTaskInput = (state: StateSchema) =>
    state?.addNewTask?.task || "";
export const getAddNewTaskTimeFromInput = (state: StateSchema) =>
    state?.addNewTask?.timeFrom || "";
export const getAddNewTaskTimeToInput = (state: StateSchema) =>
    state?.addNewTask?.timeTo || "";
export const getAddNewTaskIsLoading = (state: StateSchema) =>
    state.addNewTask.isLoading;
export const getAddNewTaskModalIsOpened = (state: StateSchema) =>
    state.addNewTask.modalIsOpened;
