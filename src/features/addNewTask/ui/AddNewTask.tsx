import { Modal } from "shared/ui/Modal/Modal";
import classes from "./AddNewTask.module.scss";
import { type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    getAddNewTaskIsLoading,
    getAddNewTaskModalIsOpened,
    getAddNewTaskTaskInput,
    getAddNewTaskTimeFromInput,
    getAddNewTaskTimeToInput,
} from "../model/selectors/addNewTaskSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addNewTaskActions } from "../model/slices/addNewTaskSlice";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { addNewTaskThunk } from "../model/services/addNewTaskThunk";
import { useParams } from "react-router-dom";

export const AddNewTask = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const taskInputValue = useSelector(getAddNewTaskTaskInput);
    const timeFromInputValue = useSelector(getAddNewTaskTimeFromInput);
    const timeToInputValue = useSelector(getAddNewTaskTimeToInput);
    const isLoading = useSelector(getAddNewTaskIsLoading);
    const isOpened = useSelector(getAddNewTaskModalIsOpened);

    const onCloseModal = () => {
        dispatch(addNewTaskActions.changeTaskInput(""));
        dispatch(addNewTaskActions.changeTimeFromInput(""));
        dispatch(addNewTaskActions.changeTimeToInput(""));
        dispatch(addNewTaskActions.toggleModalIsOpened(false));
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
                        <div>
                            <input
                                onChange={onChangeTaskInputValue}
                                value={taskInputValue}
                                type="text"
                                placeholder={t("Введите задачу")}
                            />
                            <input
                                onChange={onChangeTimeFromInputValue}
                                value={timeFromInputValue}
                                type="text"
                                placeholder={t("Время от")}
                            />
                            <input
                                onChange={onChangeTimeToInputValue}
                                value={timeToInputValue}
                                type="text"
                                placeholder={t("Время до")}
                            />
                        </div>
                        <div>
                            <button onClick={onAddNewTask}>
                                {t("ДОБАВИТЬ")}
                            </button>
                            <button onClick={onCloseModal}>
                                {t("ОТМЕНА")}
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};
