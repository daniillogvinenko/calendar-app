import { type StateSchema } from "app/providers/storeProvider";

export const getMainPageIsLoading = (state: StateSchema) =>
    state.mainPage.isLoading;
export const getMainPageDates = (state: StateSchema) => state.mainPage.dates;
export const getMainPageError = (state: StateSchema) => state.mainPage.error;
