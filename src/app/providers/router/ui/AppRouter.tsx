import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {RouteConfig.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};
