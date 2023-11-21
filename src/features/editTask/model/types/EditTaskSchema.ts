export interface EditTaskSchema {
    task: string;
    timeFrom: string;
    timeTo: string;
    isLoading: boolean;
    // тут будет храниться id таска, к которому относится модалка, иначе, если сделать boolean, то будут открываться сразу все модалки
    modalIsOpened: number;
    error: string;
}
