import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "shared/styles/index.scss";
import { ThemeProvider } from "./app/providers/themeProvider";
import "shared/config/i18next/u18next";
import { StoreProvider } from "./app/providers/storeProvider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
if (!container) throw new Error("Контейнер не найден");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);
