import { useContext } from "react";
import {
    AppTheme,
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from "./ThemeContext";

export const useTheme = () => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: AppTheme;
        switch (theme) {
            case AppTheme.LIGHT:
                newTheme = AppTheme.DARK;
                break;
            case AppTheme.DARK:
                newTheme = AppTheme.LIGHT;
                break;
            default:
                newTheme = AppTheme.LIGHT;
                break;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return { toggleTheme, theme };
};
