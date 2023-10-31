import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum AppTheme {
    LIGHT = "app_light",
    DARK = "app_dark",
}

export interface ThemeContextProps {
    theme?: AppTheme;
    setTheme?: (newTheme: AppTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
