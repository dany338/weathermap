import {
  weatherSearchByCityInit,
  weatherSearchByCitySuccess,
  weatherSearchByCityError
} from './actions';
import * as WeatherServices from "../../services";

export const getWeatherSearchByCityRequest = query => {
  return async dispatch => {
    dispatch(weatherSearchByCityInit());
    try {
      const data = await WeatherServices.apiWeather.searchMovies(query);
      if(typeof data === 'object') {
        dispatch(weatherSearchByCitySuccess(data.results));
      } else if(typeof data === 'string') {
        dispatch(weatherSearchByCityError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(weatherSearchByCityError('An error was generated please consult the administrator!'));
    }
  };
};
