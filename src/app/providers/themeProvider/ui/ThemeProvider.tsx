import { useState, type ReactNode, useEffect } from "react";
import {
    AppTheme,
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from "../lib/ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;

    const defaultTheme =
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) ||
        AppTheme.LIGHT;

    const [theme, setTheme] = useState<AppTheme>(defaultTheme);

    useEffect(() => {
        document.body.className = defaultTheme;
    }, [defaultTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
