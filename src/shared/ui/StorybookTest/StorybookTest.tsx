import classes from "./StorybookTest.module.scss";

interface StorybookTestProps {
    text: string;
    className?: string;
}

export const StorybookTest = (props: StorybookTestProps) => {
    const { text, className } = props;

    return (
        <div className={classes.StorybookTest + " " + classes[className]}>
            {text}
        </div>
    );
};
