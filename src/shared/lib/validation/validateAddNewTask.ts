enum validateAddNewTaskError {
    emptyFields = "ВСЕ ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫ",
    maxLength = "ПРЕВЫШЕНА МАКСИМАЛЬНАЯ ДЛИНА",
    wrongFormat = "НЕПРАВИЛЬНЫЙ ФОРМАТ ВРЕМЕНИ",
}

export const validateAddNewTask = (
    taskText: string,
    timeFrom: string,
    timeTo: string
) => {
    if (!taskText || !timeFrom || !timeTo) {
        return validateAddNewTaskError.emptyFields;
    }

    if (taskText.length > 300) {
        return validateAddNewTaskError.maxLength;
    }

    if (
        isNaN(+timeFrom[0]) ||
        isNaN(+timeFrom[1]) ||
        timeFrom[2] !== ":" ||
        isNaN(+timeFrom[3]) ||
        isNaN(+timeFrom[4])
    ) {
        return validateAddNewTaskError.wrongFormat;
    }

    if (
        isNaN(+timeTo[0]) ||
        isNaN(+timeTo[1]) ||
        timeTo[2] !== ":" ||
        isNaN(+timeTo[3]) ||
        isNaN(+timeTo[4])
    ) {
        return validateAddNewTaskError.wrongFormat;
    }

    return 0;
};
