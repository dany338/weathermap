import {
  WEATHER_SEARCH_BY_CITY_INIT,
  WEATHER_SEARCH_BY_CITY_SUCCESS,
  WEATHER_SEARCH_BY_CITY_ERROR
} from './types';

export const weatherSearchByCityInit = () => ({ type: WEATHER_SEARCH_BY_CITY_INIT });
export const weatherSearchByCitySuccess = (data) => ({ type: WEATHER_SEARCH_BY_CITY_SUCCESS, payload: { data } });
export const weatherSearchByCityError = error => ({ type: WEATHER_SEARCH_BY_CITY_ERROR, payload: error });
