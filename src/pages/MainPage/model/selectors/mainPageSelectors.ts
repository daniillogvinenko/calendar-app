import { type StateSchema } from "app/providers/storeProvider";

export const getMainPageIsLoading = (state: StateSchema) =>
    state.mainPage.isLoading;
export const getDates = (state: StateSchema) => state.mainPage.dates;
