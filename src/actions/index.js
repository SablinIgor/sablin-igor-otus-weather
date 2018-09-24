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

    let url = 'http://api.apixu.com/v1/current.json?key=ef5d03b40b984087bc8135539182209&q=' + city;

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
