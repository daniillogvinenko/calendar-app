import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { type DateSchema } from "entities/Date";
import { mainPageActions } from "../../slices/mainPageSlice";

export function fetchAllDates(dispatch: AppDispatch) {
    dispatch(mainPageActions.setError(""));
    dispatch(mainPageActions.setIsLoading(true));
    axios
        .get<DateSchema[]>("http://localhost:8000/dates")
        .then((response) => {
            dispatch(mainPageActions.setDates(response.data));
            dispatch(mainPageActions.setIsLoading(false));
        })
        .catch((value) => {
            dispatch(mainPageActions.setError("Error"));
            dispatch(mainPageActions.setIsLoading(false));
        });
}
