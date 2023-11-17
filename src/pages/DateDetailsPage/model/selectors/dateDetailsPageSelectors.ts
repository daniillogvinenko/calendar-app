import { type StateSchema } from "app/providers/storeProvider";

export const getDateDetailsPageTasks = (state: StateSchema) =>
    state.dateDetailsPage.tasks;
export const getDateDetailsPageTasksIsLoading = (state: StateSchema) =>
    state.dateDetailsPage.tasksIsLoading;
export const getDateDetailsPageTasksError = (state: StateSchema) =>
    state.dateDetailsPage.tasksError;

export const getDateDetailsPageDate = (state: StateSchema) =>
    state.dateDetailsPage.date;
export const getDateDetailsPageDateIsLoading = (state: StateSchema) =>
    state.dateDetailsPage.dateIsLoading;
export const getDateDetailsPageDateError = (state: StateSchema) =>
    state.dateDetailsPage.dateError;
