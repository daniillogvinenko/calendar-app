export const calcRescheduleTime = (time: string, addTime: string) => {
    const timeSplit = time.split(":");
    const addTimeSplit = addTime.split(":");

    const timeMinutes = +timeSplit[0] * 60 + +timeSplit[1];
    const addTimeMinutes = +addTimeSplit[0] * 60 + +addTimeSplit[1];

    const resMinutesTotal = timeMinutes + addTimeMinutes >= 1440 ? timeMinutes + addTimeMinutes - 1440 : timeMinutes + addTimeMinutes;

    const resHours =
        Math.floor(resMinutesTotal / 60) >= 10
            ? Math.floor(resMinutesTotal / 60)
            : "0" + Math.floor(resMinutesTotal / 60);
    const resMinutes =
        resMinutesTotal % 60 >= 10
            ? resMinutesTotal % 60
            : "0" + (resMinutesTotal % 60);

    return resHours + ":" + resMinutes;
};
