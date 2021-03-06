import {
  WEATHER_SEARCH_BY_CITY_INIT,
  WEATHER_SEARCH_BY_CITY_SUCCESS,
  WEATHER_SEARCH_BY_CITY_ERROR
} from './types';

export const weatherSearchByCityInit = query => ({ type: WEATHER_SEARCH_BY_CITY_INIT, payload: query });
export const weatherSearchByCitySuccess = (data, query) => ({ type: WEATHER_SEARCH_BY_CITY_SUCCESS, payload: { data, query } });
export const weatherSearchByCityError = error => ({ type: WEATHER_SEARCH_BY_CITY_ERROR, payload: error });
