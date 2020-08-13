/* eslint-disable import/no-cycle */
import weatherReducer from "./weather";

import { logger } from "./middlewares";

export const initialState = {
  weather: weatherReducer.initialState,
};

export default function mainReducer(state, action) {
  // Receiving previous state here
  const {
    weather,
  } = state;

  // Receiving current state here
  const currentState = {
    weather: weatherReducer.reducer(weather, action),
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
}
