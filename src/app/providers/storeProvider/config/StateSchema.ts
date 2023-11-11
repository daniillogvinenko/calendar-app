import { type MainPageSchema } from "pages/MainPage/model/types/MainPageSchema";
import { type DateDetailsPageSchema } from "pages/DateDetailsPage/model/types/DateDetailsPageSchema";

export interface StateSchema {
    mainPage: MainPageSchema;
    dateDetailsPage: DateDetailsPageSchema;
}
