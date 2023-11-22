import { type StateSchema } from "app/providers/storeProvider";

export const getNavbarDay = (state: StateSchema) => state?.navbar?.day;
export const getNavbarMonth = (state: StateSchema) => state?.navbar?.month;
export const getNavbarYear = (state: StateSchema) => state?.navbar?.year;
export const getNavbarHour = (state: StateSchema) => state?.navbar?.hour;
export const getNavbarMinutes = (state: StateSchema) => state?.navbar?.minutes;
export const getNavbarWeekday = (state: StateSchema) => state?.navbar?.weekDay;
