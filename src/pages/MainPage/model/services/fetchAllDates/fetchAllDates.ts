import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { type DateSchema } from "entities/Date";
import { mainPageActions } from "../../slices/mainPageSlice";

export const fetchAllDates =
    (day: number, month: number, year: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(mainPageActions.setError(""));
        dispatch(mainPageActions.setIsLoading(true));

        try {
            const response = await axios.get<DateSchema[]>(
                `${_API_}dates?dateDay=${day}&dateMonth=${month}&dateYear=${year}`
            );
            const data = response.data[0];

            if (data) {
                // подгружаются даты начиная со вчерашнего дня, до +5 от сегодняшнего
                const promises = [];
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id - 1}`)
                );
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id}`)
                );
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id + 1}`)
                );
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id + 2}`)
                );
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id + 3}`)
                );
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id + 4}`)
                );
                promises.push(
                    axios.get<DateSchema>(`${_API_}dates/${data?.id + 5}`)
                );

                Promise.all(promises)
                    .then((responses) => {
                        if (responses.length) {
                            const dataArr = responses.map(
                                (response) => response.data
                            );
                            dispatch(mainPageActions.setDates(dataArr));
                            dispatch(mainPageActions.setIsLoading(false));
                        }
                    })
                    .catch(() => {
                        dispatch(mainPageActions.setError("Error"));
                        dispatch(mainPageActions.setIsLoading(false));
                    });
            }
        } catch (error) {
            console.log(error);
            dispatch(mainPageActions.setError("Error"));
            dispatch(mainPageActions.setIsLoading(false));
        }
    };
