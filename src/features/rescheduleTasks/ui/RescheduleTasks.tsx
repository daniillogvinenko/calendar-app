import { Modal } from "shared/ui/Modal/Modal";
import classes from "./RescheduleTasks.module.scss";
import { useTranslation } from "react-i18next";
import { Loader } from "shared/ui/Loader/Loader";
import WarningIcon from "shared/assets/icons/WarningIcon.svg";
import RescheduleIcon from "shared/assets/icons/Reschedule.svg";
import MaskedInput from "react-text-mask";
import { useSelector } from "react-redux";
import {
    getRescheduleTasksError,
    getRescheduleTasksIsLoading,
    getRescheduleTasksModalIsOpened,
    getRescheduleTasksTimeInput,
} from "../model/selectors/rescheduleTasksSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { rescheduleTasksActions } from "../model/slices/rescheduleTasksSlice";
import { type ChangeEvent } from "react";
import { updateTasksTime } from "../model/services/updateTasksTime";
import { type TaskSchema } from "entities/Task";
import { validateReschedule } from "shared/lib/validation/validateReschedule";

interface RescheduleTasksProps {
    selectedTasks: number[];
    tasks: TaskSchema[];
}

export const RescheduleTasks = ({
    selectedTasks,
    tasks,
}: RescheduleTasksProps) => {
    const { t } = useTranslation();
    const isOpened = useSelector(getRescheduleTasksModalIsOpened);
    const isLoading = useSelector(getRescheduleTasksIsLoading);
    const error = useSelector(getRescheduleTasksError);
    const timeInput = useSelector(getRescheduleTasksTimeInput);

    const dispatch = useAppDispatch();

    const onCloseModal = () => {
        dispatch(rescheduleTasksActions.toggleModalIsOpened(false));
    };

    const onOpenModal = () => {
        dispatch(rescheduleTasksActions.toggleModalIsOpened(true));
    };

    const onTimeInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(rescheduleTasksActions.changeTimeInput(e.currentTarget.value));
    };

    const onRescheduleTasks = () => {
        if (validateReschedule(timeInput)) {
            dispatch(
                rescheduleTasksActions.setModalError(
                    validateReschedule(timeInput).toString()
                )
            );
            return;
        }
        dispatch(updateTasksTime(selectedTasks, tasks, timeInput));
    };

    return (
        <>
            <button onClick={onOpenModal} className={classes.RescheduleIcon}>
                <RescheduleIcon className={classes.RescheduleIconSvg} />
            </button>
            <Modal isOpened={isOpened} onCloseModal={onCloseModal}>
                {isLoading ? (
                    <Loader color="dark" />
                ) : (
                    <>
                        <div className={classes.modalHeader}>
                            <div>{t("Перенести задачи")}</div>
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
                                {error}
                            </div>
                        ) : null}
                        <div className={classes.inputContainer}>
                            <MaskedInput
                                mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                                onChange={onTimeInputChangeHandler}
                                value={timeInput}
                                type="text"
                                placeholder={t("Перенести на")}
                            />
                        </div>
                        <div className={classes.buttons}>
                            <button
                                className={classes.applyRescheduleButton}
                                onClick={onRescheduleTasks}
                            >
                                {t("ПЕРЕНЕСТИ")}
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
