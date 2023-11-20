enum validateAddNewTaskError {
    emptyFields = "ВСЕ ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫ",
}

export const validateAddNewTask = (
    taskText: string,
    timeFrom: string,
    timeTo: string
) => {
    if (!taskText || !timeFrom || !timeTo) {
        return validateAddNewTaskError.emptyFields;
    }

    return 0;
};
