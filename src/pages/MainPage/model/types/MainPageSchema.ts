import { type DateSchema } from "entities/Date";

export interface MainPageSchema {
    dates: DateSchema[];
    isLoading: boolean;
    error: string;
}
