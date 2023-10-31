import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";
import LightIcon from "../../assets/icons/LightIcon.svg";
import DarkIcon from "../../assets/icons/DarkIcon.svg";
import { useTheme } from "app/providers/themeProvider";
import classes from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classes.ThemeSwitcher} onClick={toggleTheme}>
            {theme === AppTheme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </div>
    );
};
