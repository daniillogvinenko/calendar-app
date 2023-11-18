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

    const className = isOpened
        ? [classes.Modal, classes.opened].join(" ")
        : classes.Modal;

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={className} onClick={onCloseModal}>
                <div onClick={onContentClick} className={classes.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
