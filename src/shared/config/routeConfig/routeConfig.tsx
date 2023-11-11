import { type RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { DateDetailsPage } from "pages/DateDetailsPage/ui/DateDetailsPage";

export const RouteConfig: RouteProps[] = [
    { path: "/", element: <MainPage /> },
    {
        path: "/:id",
        element: <DateDetailsPage />,
    },
];
