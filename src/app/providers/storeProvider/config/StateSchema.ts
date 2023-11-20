import { type MainPageSchema } from "pages/MainPage/model/types/MainPageSchema";
import { type DateDetailsPageSchema } from "pages/DateDetailsPage/model/types/DateDetailsPageSchema";
import { type AddNewTaskSchema } from "features/addNewTask/model/types/AddNewTaskSchema";
import { type EditTaskSchema } from "features/editTask/model/types/EditTaskSchema";

export interface StateSchema {
    mainPage: MainPageSchema;
    dateDetailsPage: DateDetailsPageSchema;
    addNewTask: AddNewTaskSchema;
    editTask: EditTaskSchema;
}
