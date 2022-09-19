import { useSelector } from 'react-redux';
import { selectWeatherData } from '../redux/weatherSlice';

const useWeatherData = () => {
  const weather = useSelector(selectWeatherData);

  return weather;
};

export default useWeatherData;
