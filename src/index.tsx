import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "shared/styles/index.scss";
import { ThemeProvider } from "./app/providers/themeProvider";
import "shared/config/i18next/u18next";

const root = createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
