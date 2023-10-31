import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import classes from "./Navbar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.Navbar}>
            <LangSwitcher />
            <ThemeSwitcher />
            <div>{t("hello")}</div>
        </div>
    );
};
