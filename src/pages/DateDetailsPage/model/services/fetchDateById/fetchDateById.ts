import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { dateDetailsPageActions } from "../../slices/dateDetailsPageSlice";
import { type DateSchema } from "entities/Date";

export function fetchDateById(id: number) {
    return (dispatch: AppDispatch) => {
        dispatch(dateDetailsPageActions.setDateIsLoading(true));
        axios
            .get<DateSchema>(`http://localhost:8000/dates/${id}`)
            .then((response) => {
                dispatch(dateDetailsPageActions.setDate(response.data));
                dispatch(dateDetailsPageActions.setDateIsLoading(false));
            })
            .catch((value) => {
                dispatch(dateDetailsPageActions.setDateIsLoading(false));
            });
    };
}
