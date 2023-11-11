import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import classes from "./AppLink.module.scss";

export interface AppLinkProps extends LinkProps {
    children: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const { children, to } = props;

    return (
        <Link to={to} className={classes.AppLink}>
            {children}
        </Link>
    );
};
