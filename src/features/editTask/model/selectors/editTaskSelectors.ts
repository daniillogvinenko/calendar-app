import { type StateSchema } from "app/providers/storeProvider";

export const getEditTaskTaskInput = (state: StateSchema) =>
    state?.editTask?.task || "";
export const getEditTaskTimeFromInput = (state: StateSchema) =>
    state?.editTask?.timeFrom || "";
export const getEditTaskTimeToInput = (state: StateSchema) =>
    state?.editTask?.timeTo || "";
export const getEditTaskIsLoading = (state: StateSchema) =>
    state?.editTask?.isLoading;
export const getEditTaskModalIsOpened = (state: StateSchema) =>
    state?.editTask?.modalIsOpened;
export const getEditTaskError = (state: StateSchema) => state?.editTask?.error;
