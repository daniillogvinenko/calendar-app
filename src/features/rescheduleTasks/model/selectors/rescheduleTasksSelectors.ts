import { type StateSchema } from "app/providers/storeProvider";

export const getRescheduleTasksTimeInput = (state: StateSchema) =>
    state?.rescheduleTasks?.timeInput || "";
export const getRescheduleTasksIsLoading = (state: StateSchema) =>
    state?.rescheduleTasks?.isLoading;
export const getRescheduleTasksError = (state: StateSchema) =>
    state?.rescheduleTasks?.error;
export const getRescheduleTasksModalIsOpened = (state: StateSchema) =>
    state?.rescheduleTasks?.modalIsOpened;
