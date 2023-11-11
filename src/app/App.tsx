import { Navbar } from "widgets/Navbar";
import classes from "./App.module.scss";
import { AppRouter } from "./providers/router";

export const App = () => {
    return (
        <div className={classes.app}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
