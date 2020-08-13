import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import weatherReducer from '../../store/weather';

const { dispatchers } = weatherReducer;

const useWeather = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { weather } = state;

  // List of Dispatchers
	const {
    getWeatherSearchByCityRequest
  } = dispatchers;

  // Bind Actions
	const weatherActions = bindActions({
    getWeatherSearchByCityRequest
  }, dispatch);

  return { ...weather, ...weatherActions };
};

export default useWeather;
