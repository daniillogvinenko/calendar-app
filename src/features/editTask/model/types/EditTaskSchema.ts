export interface EditTaskSchema {
    task: string;
    timeFrom: string;
    timeTo: string;
    isLoading: boolean;
    modalIsOpened: boolean;
    error: string;
}
