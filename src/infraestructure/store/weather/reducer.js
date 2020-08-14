import {
  WEATHER_SEARCH_BY_CITY_INIT,
  WEATHER_SEARCH_BY_CITY_SUCCESS,
  WEATHER_SEARCH_BY_CITY_ERROR
} from './types';

const initialState = {
  data: null,
  query: '',
  isLoading: false,
  error: null,
};

const weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_SEARCH_BY_CITY_INIT: {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    }

    case WEATHER_SEARCH_BY_CITY_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        query: payload.query,
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
