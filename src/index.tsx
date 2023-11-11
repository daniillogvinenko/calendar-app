import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "shared/styles/index.scss";
import { ThemeProvider } from "./app/providers/themeProvider";
import "shared/config/i18next/u18next";
import { StoreProvider } from "./app/providers/storeProvider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);
