import { WEATHER_HAS_ERRORED } from "../constants/action-types";
import { WEATHER_IS_LOADING } from "../constants/action-types";
import { WEATHER_GET_DATA_SUCCESS } from "../constants/action-types";
import { ADD_FAVORITES } from "../constants/action-types";
import { REMOVE_FAVORITES } from "../constants/action-types";

import { loadState } from "./localStorage"

const persistedState = loadState()

const rootReducer = (state = persistedState, action) => {
  switch (action.type) {

    case WEATHER_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.hasErrored
    };

    case WEATHER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
    };

    case WEATHER_GET_DATA_SUCCESS:
      return {
        ...state,
        weatherInfo: action.info
    };

    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.newFavirite]
      };

    case REMOVE_FAVORITES:
      return state;

    default:
      return state;
  }
};

export default rootReducer;
