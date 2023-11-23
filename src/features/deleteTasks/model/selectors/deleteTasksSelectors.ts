import { type StateSchema } from "app/providers/storeProvider";

export const getDeleteTasksIsLoading = (state: StateSchema) =>
    state?.deleteTasks?.isLoading;
export const getDeleteTaskserror = (state: StateSchema) =>
    state?.deleteTasks?.error;
export const getDeleteTasksModalIsOpened = (state: StateSchema) =>
    state?.deleteTasks?.modalIsOpened;
