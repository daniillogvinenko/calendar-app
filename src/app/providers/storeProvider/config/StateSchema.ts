import { type RescheduleTasksSchema } from "features/rescheduleTasks";
import { type EditTaskSchema } from "features/editTask";
import { type AddNewTaskSchema } from "features/addNewTask";
import { type DateDetailsPageSchema } from "pages/DateDetailsPage";
import { type MainPageSchema } from "pages/MainPage";
import { type NavbarSchema } from "widgets/Navbar/model/types/NavbarSchema";
import { type DeleteTasksSchema } from "features/deleteTasks";

export interface StateSchema {
    mainPage: MainPageSchema;
    dateDetailsPage: DateDetailsPageSchema;
    addNewTask: AddNewTaskSchema;
    editTask: EditTaskSchema;
    rescheduleTasks: RescheduleTasksSchema;
    navbar: NavbarSchema;
    deleteTasks: DeleteTasksSchema;
}
