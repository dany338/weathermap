import Cookies from "js-cookie";
import {
  WEATHER_SEARCH_BY_CITY_INIT,
  WEATHER_SEARCH_BY_CITY_SUCCESS,
  WEATHER_SEARCH_BY_CITY_ERROR
} from './types';

const isCookie = (typeof Cookies.get('searchs_cities') !== 'undefined');

const initialState = {
  data: null,
  filter: {
    query: '',
  },
  isLoading: false,
  error: null,
  cities: isCookie ? JSON.parse(Cookies.get('searchs_cities')) : [],
};

const weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_SEARCH_BY_CITY_INIT: {
      const filter = {
        query: payload
      };
      return {
        ...state,
        error: null,
        filter,
        isLoading: true,
      };
    }

    case WEATHER_SEARCH_BY_CITY_SUCCESS: {
      const cities = [ payload.query, ...state.cities ];
      Cookies.set('searchs_cities', cities, {
        expires: 1 // Expire one day
      });
      const filter = {
        query: payload.query
      };
      return {
        ...state,
        data: payload.data,
        filter,
        cities,
        isLoading: false,
        error: null
      };
    }

    case WEATHER_SEARCH_BY_CITY_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { weather as default, initialState };
