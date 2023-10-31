import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
