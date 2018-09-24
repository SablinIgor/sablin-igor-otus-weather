import { WEATHER_HAS_ERRORED } from "../constants/action-types";
import { WEATHER_IS_LOADING } from "../constants/action-types";
import { WEATHER_GET_DATA_SUCCESS } from "../constants/action-types";
import { ADD_FAVORITES } from "../constants/action-types";
import axios from "axios";

export const weatherHasErrored = (bool) => ({ type: WEATHER_HAS_ERRORED, hasErrored: bool});
export const weatherIsLoading = (bool) => ({ type: WEATHER_IS_LOADING, isLoading: bool});
export const weatherFetchDataSuccess = (info) => ({ type: WEATHER_GET_DATA_SUCCESS, info });

export function weatherGetData(city) {
  return (dispatch) => {
    dispatch(weatherIsLoading(true));

    let url = process.env.REACT_APP_WEATHER_API_URL + '?key=' + process.env.REACT_APP_WEATHER_API_KEY + '&q=' + city;

    axios.get(url)
      .then(res => {
        const weatherInfo = res.data;
        dispatch(weatherIsLoading(false));
        dispatch(weatherHasErrored(false));
        dispatch(weatherFetchDataSuccess(weatherInfo))
      })
      .catch(() => dispatch(weatherHasErrored(true)))
  };
}

// TODO сделать проверку на дубликаты
export const addFavorites = city => ({ type: ADD_FAVORITES, newFavirite: city});
