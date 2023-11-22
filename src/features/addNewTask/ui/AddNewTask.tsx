import { Modal } from "shared/ui/Modal/Modal";
import classes from "./AddNewTask.module.scss";
import { type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import MaskedInput from "react-text-mask";
import {
    getAddNewTaskError,
    getAddNewTaskIsLoading,
    getAddNewTaskModalIsOpened,
    getAddNewTaskTaskInput,
    getAddNewTaskTimeFromInput,
    getAddNewTaskTimeToInput,
} from "../model/selectors/addNewTaskSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addNewTaskActions } from "../model/slices/addNewTaskSlice";
import { Loader } from "shared/ui/Loader/Loader";
import { addNewTaskThunk } from "../model/services/addNewTaskThunk";
import { useParams } from "react-router-dom";
import { validateAddNewTask } from "shared/lib/validation/validateAddNewTask";
import WarningIcon from "shared/assets/icons/WarningIcon.svg";

export const AddNewTask = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const taskInputValue = useSelector(getAddNewTaskTaskInput);
    const timeFromInputValue = useSelector(getAddNewTaskTimeFromInput);
    const timeToInputValue = useSelector(getAddNewTaskTimeToInput);
    const isLoading = useSelector(getAddNewTaskIsLoading);
    const isOpened = useSelector(getAddNewTaskModalIsOpened);
    const error = useSelector(getAddNewTaskError);

    const onCloseModal = () => {
        dispatch(addNewTaskActions.changeTaskInput(""));
        dispatch(addNewTaskActions.changeTimeFromInput(""));
        dispatch(addNewTaskActions.changeTimeToInput(""));
        dispatch(addNewTaskActions.toggleModalIsOpened(false));
        dispatch(addNewTaskActions.setModalError(""));
    };

    const onOpenModal = () => {
        dispatch(addNewTaskActions.toggleModalIsOpened(true));
    };

    const onChangeTaskInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addNewTaskActions.changeTaskInput(e.currentTarget.value));
    };

    const onChangeTimeFromInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addNewTaskActions.changeTimeFromInput(e.currentTarget.value));
    };

    const onChangeTimeToInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addNewTaskActions.changeTimeToInput(e.currentTarget.value));
    };

    const onAddNewTask = () => {
        if (
            validateAddNewTask(
                taskInputValue,
                timeFromInputValue,
                timeToInputValue
            )
        ) {
            dispatch(
                addNewTaskActions.setModalError(
                    t(
                        validateAddNewTask(
                            taskInputValue,
                            timeFromInputValue,
                            timeToInputValue
                        ) || ""
                    )
                )
            );
            return;
        }
        if (id) {
            dispatch(
                addNewTaskThunk(+id, {
                    taskText: taskInputValue,
                    taskTimeFrom: timeFromInputValue,
                    taskTimeTo: timeToInputValue,
                })
            );
        }
    };

    return (
        <>
            <button onClick={onOpenModal} className={classes.AddNewTask}>
                +
            </button>
            <Modal isOpened={isOpened} onCloseModal={onCloseModal}>
                {isLoading ? (
                    <Loader color="dark" />
                ) : (
                    <>
                        <div className={classes.modalHeader}>
                            <div>{t("Добавить задачу")}</div>
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={onCloseModal}
                            >
                                ✕
                            </div>
                        </div>
                        {error ? (
                            <div className={classes.errorContainer}>
                                <WarningIcon className={classes.errorIcon} />
                                {t(error)}
                            </div>
                        ) : null}
                        <div className={classes.inputContainer}>
                            <input
                                className={classes.taskInput}
                                onChange={onChangeTaskInputValue}
                                value={taskInputValue}
                                type="text"
                                placeholder={t("Введите задачу")}
                            />
                            <div className={classes.timeInputs}>
                                <MaskedInput
                                    mask={[
                                        /[0-2]/,
                                        /[0-9]/,
                                        ":",
                                        /[0-5]/,
                                        /[0-9]/,
                                    ]}
                                    onChange={onChangeTimeFromInputValue}
                                    value={timeFromInputValue}
                                    type="text"
                                    placeholder={t("Время от")}
                                />
                                <MaskedInput
                                    mask={[
                                        /[0-2]/,
                                        /[0-9]/,
                                        ":",
                                        /[0-5]/,
                                        /[0-9]/,
                                    ]}
                                    onChange={onChangeTimeToInputValue}
                                    value={timeToInputValue}
                                    type="text"
                                    placeholder={t("Время до")}
                                />
                            </div>
                        </div>
                        <div className={classes.buttons}>
                            <button
                                className={classes.addNewTaskButton}
                                onClick={onAddNewTask}
                            >
                                {t("ДОБАВИТЬ")}
                            </button>
                            <button
                                className={classes.cancelButton}
                                onClick={onCloseModal}
                            >
                                {t("ОТМЕНА")}
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};
