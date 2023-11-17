import classes from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
    color?: "dark" | "light";
}

export const Loader = (props: LoaderProps) => {
    const { className, color = "invertedBg" } = props;

    return (
        <div className={[classes.Loader, className].join(" ")}>
            <span
                className={[classes.loaderSpan, classes[color]].join(" ")}
            ></span>
        </div>
    );
};
