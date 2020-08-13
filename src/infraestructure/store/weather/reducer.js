import {
  WEATHER_SEARCH_BY_CITY_INIT,
  WEATHER_SEARCH_BY_CITY_SUCCESS,
  WEATHER_SEARCH_BY_CITY_ERROR
} from './types';

const initialState = {
  data: {},
  query: '',
  isLoading: false,
  error: null,
};

const weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_SEARCH_BY_CITY_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case WEATHER_SEARCH_BY_CITY_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
        currentPage: payload.page,
        isLoading: false,
        error: ''
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
