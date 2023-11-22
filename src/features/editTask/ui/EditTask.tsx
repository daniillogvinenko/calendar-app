import { Modal } from "shared/ui/Modal/Modal";
import classes from "./EditTask.module.scss";
import { type ChangeEvent } from "react";
import EditIcon from "shared/assets/icons/Pencil.svg";
import WarningIcon from "shared/assets/icons/WarningIcon.svg";
import { useSelector } from "react-redux";
import {
    getEditTaskError,
    getEditTaskIsLoading,
    getEditTaskModalIsOpened,
    getEditTaskTaskInput,
    getEditTaskTimeFromInput,
    getEditTaskTimeToInput,
} from "../model/selectors/editTaskSelectors";
import MaskedInput from "react-text-mask";
import { Loader } from "shared/ui/Loader/Loader";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { editTaskActions } from "../model/slices/editTaskSlice";
import { validateAddNewTask } from "shared/lib/validation/validateAddNewTask";
import { editTaskThunk } from "../model/services/editTaskThunk";
import { getDateDetailsPageTasks } from "../../../pages/DateDetailsPage/model/selectors/dateDetailsPageSelectors";

interface EditTaskProps {
    taskId: number;
}

export const EditTask = (props: EditTaskProps) => {
    const { taskId } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getEditTaskIsLoading);
    const error = useSelector(getEditTaskError);
    const taskInputValue = useSelector(getEditTaskTaskInput);
    const timeFromInputValue = useSelector(getEditTaskTimeFromInput);
    const timeToInputValue = useSelector(getEditTaskTimeToInput);
    const modalIsOpened = useSelector(getEditTaskModalIsOpened);

    const tasks = useSelector(getDateDetailsPageTasks);
    const index = tasks.findIndex((task) => task.id === taskId);
    const task = tasks[index];

    const onOpenHandler = () => {
        dispatch(editTaskActions.changeTaskInput(task.taskText));
        dispatch(editTaskActions.changeTimeFromInput(task.taskTimeFrom));
        dispatch(editTaskActions.changeTimeToInput(task.taskTimeTo));
        dispatch(editTaskActions.toggleModalIsOpened(taskId));
        dispatch(editTaskActions.setModalError(""));
    };

    const onCloseHandler = () => {
        dispatch(editTaskActions.toggleModalIsOpened(0));
    };

    const onChangeTaskInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(editTaskActions.changeTaskInput(e.currentTarget.value));
    };

    const onChangeTimeFromInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(editTaskActions.changeTimeFromInput(e.currentTarget.value));
    };

    const onChangeTimeToInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(editTaskActions.changeTimeToInput(e.currentTarget.value));
    };

    const onSaveChangesHandler = () => {
        if (
            validateAddNewTask(
                taskInputValue,
                timeFromInputValue,
                timeToInputValue
            )
        ) {
            dispatch(
                editTaskActions.setModalError(
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
        dispatch(
            editTaskThunk(taskId, {
                taskText: taskInputValue,
                taskTimeFrom: timeFromInputValue,
                taskTimeTo: timeToInputValue,
            })
        );
    };

    return (
        <>
            <button onClick={onOpenHandler} className={classes.EditTask}>
                <EditIcon />
            </button>
            <Modal
                // в стейте хранится id открытой модалки и чтобы все модалки не открывались, выполняется данная проверка
                isOpened={modalIsOpened === taskId}
                onCloseModal={onCloseHandler}
            >
                {isLoading ? (
                    <Loader color="dark" />
                ) : (
                    <>
                        <div className={classes.modalHeader}>
                            <div>{t("Редактировать задачу")}</div>
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={onCloseHandler}
                            >
                                ✕
                            </div>
                        </div>
                        {error ? (
                            <div className={classes.errorContainer}>
                                <WarningIcon className={classes.errorIcon} />
                                {error}
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
                                    mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                                    onChange={onChangeTimeFromInputValue}
                                    value={timeFromInputValue}
                                    type="text"
                                    placeholder={t("Время от")}
                                />
                                <MaskedInput
                                    mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
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
                                onClick={onSaveChangesHandler}
                            >
                                {t("СОХРАНИТЬ")}
                            </button>
                            <button
                                className={classes.cancelButton}
                                onClick={onCloseHandler}
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
