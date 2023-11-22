import { type RescheduleTasksSchema } from "features/rescheduleTasks";
import { type EditTaskSchema } from "features/editTask";
import { type AddNewTaskSchema } from "features/addNewTask";
import { type DateDetailsPageSchema } from "pages/DateDetailsPage";
import { type MainPageSchema } from "pages/MainPage";
import { type NavbarSchema } from "widgets/Navbar/model/types/NavbarSchema";

export interface StateSchema {
    mainPage: MainPageSchema;
    dateDetailsPage: DateDetailsPageSchema;
    addNewTask: AddNewTaskSchema;
    editTask: EditTaskSchema;
    rescheduleTasks: RescheduleTasksSchema;
    navbar: NavbarSchema;
}
