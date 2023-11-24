import { useSelector } from "react-redux";
import {
    getDeleteTasksIsLoading,
    getDeleteTasksModalIsOpened,
    getDeleteTaskserror,
} from "../model/selectors/deleteTasksSelectors";
import WarningIcon from "shared/assets/icons/WarningIcon.svg";
import DeleteIcon from "shared/assets/icons/DeleteIcon.svg";
import classes from "./DeleteTasks.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Loader } from "shared/ui/Loader/Loader";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { deleteTasksActions } from "../model/slices/deleteTasksSlice";
import { deleteTasks } from "../model/services/deleteTasks/deleteTasks";

interface DeleteTasksProps {
    selectedTasks: number[];
}

export const DeleteTasks = ({ selectedTasks }: DeleteTasksProps) => {
    const isLoading = useSelector(getDeleteTasksIsLoading);
    const error = useSelector(getDeleteTaskserror);
    const modalIsOpened = useSelector(getDeleteTasksModalIsOpened);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onOpenModal = () => {
        dispatch(deleteTasksActions.toggleModalIsOpened(true));
    };

    const onCloseModal = () => {
        dispatch(deleteTasksActions.toggleModalIsOpened(false));
        deleteTasksActions.setModalError("");
    };

    const onDelete = () => {
        dispatch(deleteTasks(selectedTasks));
    };

    return (
        <>
            <button onClick={onOpenModal} className={classes.DeleteIcon}>
                <DeleteIcon className={classes.DeleteIconSvg} />
            </button>
            <Modal isOpened={modalIsOpened} onCloseModal={onCloseModal}>
                {isLoading ? (
                    <Loader color="dark" />
                ) : (
                    <>
                        <div className={classes.modalHeader}>
                            <div>{t("Удалить выбранные задачи?")}</div>
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
                        <div className={classes.buttons}>
                            <button
                                className={classes.deleteButton}
                                onClick={onDelete}
                            >
                                {t("УДАЛИТЬ")}
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
