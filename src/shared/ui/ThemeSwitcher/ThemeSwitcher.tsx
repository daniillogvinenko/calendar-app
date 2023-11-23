import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";
import Lighticon from "../../assets/icons/Lighticon.svg";
import Darkicon from "../../assets/icons/Darkicon.svg";
import { useTheme } from "app/providers/themeProvider";
import classes from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classes.ThemeSwitcher} onClick={toggleTheme}>
            {theme === AppTheme.LIGHT ? <Lighticon /> : <Darkicon />}
        </div>
    );
};
