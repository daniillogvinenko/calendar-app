import { Navbar } from "widgets/Navbar";
import classes from "./App.module.scss";
import { StorybookTest } from "../shared/ui/StorybookTest/StorybookTest";

export const App = () => {
    return (
        <div className={classes.app}>
            <Navbar />
            <StorybookTest text="storybook test" className="normal" />
        </div>
    );
};
