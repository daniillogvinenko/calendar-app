import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";
import Lighticon from "../../assets/icons/LightIcon.svg";
import Darkicon from "../../assets/icons/DarkIcon.svg";
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
