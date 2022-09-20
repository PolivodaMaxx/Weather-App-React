const getInfoItem = (weather) => {
  let windType = 'слабый ветер';
  if (weather.wind?.speed > 0 && weather.wind.speed <= 4.5) {
    windType = 'слабый ветер';
  } else if (weather.wind?.speed > 4.5 && weather.wind.speed <= 8) {
    windType = 'умеренный ветер';
  } else if (weather.wind?.speed > 8 && weather.wind.speed <= 15) {
    windType = 'сильный ветер';
  }

  return [
    {
      itemId: 'temp',
      name: 'Температура',
      value: `${
        weather.main ? Math.round(weather.main.temp - 274) : '  '
      }° - ощущается как ${
        weather.main ? Math.round(weather.main.feels_like - 274) : '17'
      }°`,
    },
    {
      itemId: 'pressure',
      name: 'Давление',
      value: `${
        weather.main ? Math.round(weather.main.pressure / 1.33) : '765'
      } мм ртутного столба - нормальное`,
    },
    {
      itemId: 'precipitation',
      name: 'Осадки',
      value: `${
        weather.weather && weather.weather[0].main === 'Rain'
          ? `Дождь`
          : 'Без осадков'
      }`,
    },
    {
      itemId: 'wind',
      name: 'Ветер',
      value: `${weather.wind ? weather.wind.speed : '3'} м/с  - ${windType}`,
    },
  ];
};

export default getInfoItem;
