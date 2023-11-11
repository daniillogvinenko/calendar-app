import classes from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = (props: LoaderProps) => {
    const { className } = props;

    return (
        <div className={[classes.Loader, className].join(" ")}>
            <span className={classes.loaderSpan}></span>
        </div>
    );
};
