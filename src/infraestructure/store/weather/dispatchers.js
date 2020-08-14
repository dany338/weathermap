import {
  weatherSearchByCityInit,
  weatherSearchByCitySuccess,
  weatherSearchByCityError
} from './actions';
import * as WeatherServices from "../../services";

export const getWeatherSearchByCityRequest = query => {
  return async dispatch => {
    dispatch(weatherSearchByCityInit(query));
    try {
      const data = await WeatherServices.apiWeather.getWeather(query);
      if(typeof data === 'object') {
        dispatch(weatherSearchByCitySuccess(data, query));
        return { msg: 'weather find', err: false };
      }
      dispatch(weatherSearchByCityError('An error was generated please consult the administrator!'));
      return { msg: data, err: true };
    } catch (error) {
      console.error(error);
      dispatch(weatherSearchByCityError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};
