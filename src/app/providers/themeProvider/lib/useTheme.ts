import { useContext } from "react";
import {
    AppTheme,
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from "./ThemeContext";

export const useTheme = () => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme =
            theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return { toggleTheme, theme };
};
