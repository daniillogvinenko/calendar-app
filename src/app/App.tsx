import { Navbar } from "widgets/Navbar";
import classes from "./App.module.scss";

export const App = () => {
    return (
        <div className={classes.app}>
            <Navbar />
        </div>
    );
};
