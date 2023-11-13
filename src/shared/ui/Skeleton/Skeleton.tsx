import { type ReactNode, type CSSProperties } from "react";
import classes from "./Skeleton.module.scss";

interface SkeletonProps {
    styleProp: CSSProperties;
    children?: ReactNode;
}

export const Skeleton = (props: SkeletonProps) => {
    const { styleProp, children } = props;

    return (
        <div className={classes.Skeleton} style={styleProp}>
            {children}
        </div>
    );
};
