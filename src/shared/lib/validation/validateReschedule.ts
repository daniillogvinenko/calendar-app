enum validateRescheduleError {
    wrongFormat = "НЕПРАВИЛЬНЫЙ ФОРМАТ ВРЕМЕНИ",
}

export const validateReschedule = (addTime: string) => {
    if (addTime.length !== 5) {
        return validateRescheduleError.wrongFormat;
    }
    if (
        isNaN(+addTime[0]) ||
        isNaN(+addTime[1]) ||
        addTime[2] !== ":" ||
        isNaN(+addTime[3]) ||
        isNaN(+addTime[4])
    ) {
        return validateRescheduleError.wrongFormat;
    }

    return 0;
};
