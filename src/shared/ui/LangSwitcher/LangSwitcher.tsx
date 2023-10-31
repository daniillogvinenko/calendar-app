import { useTranslation } from "react-i18next";
import classes from "./LangSwitcher.module.scss";
import { useState } from "react";

export const LangSwitcher = () => {
    const { i18n, t } = useTranslation();
    const [lang, setlang] = useState<string>("ru");

    async function onLangChange() {
        setlang(lang === "ru" ? "en" : "ru");
        await i18n.changeLanguage(lang === "ru" ? "en" : "ru");
    }

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <div onClick={onLangChange} className={classes.LangSwitcher}>
            {t("Язык")}
        </div>
    );
};
