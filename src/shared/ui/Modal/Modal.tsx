import { type ReactNode } from "react";
import classes from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

export interface ModalProps {
    children: ReactNode;
    isOpened: boolean;
    onCloseModal: () => void;
}

export const Modal = (props: ModalProps) => {
    const { children, isOpened, onCloseModal } = props;

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // чтобы в body не появлялись узлы для каждой модалки
    if (!isOpened) return null;

    return (
        <Portal>
            <div className={classes.Modal} onClick={onCloseModal}>
                <div onClick={onContentClick} className={classes.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
