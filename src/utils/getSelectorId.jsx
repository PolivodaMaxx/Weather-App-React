const getSelectorId = (weather) => {
  switch (weather.weather ? weather.weather[0].main : '') {
    case 'Rain':
      return 'rain';

    case 'Sun':
      return 'sun';

    case 'Clouds':
      return 'cloudly';

    default:
      return '';
  }
};

export default getSelectorId;
