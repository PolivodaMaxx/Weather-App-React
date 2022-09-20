import getSelectorId from './getSelectorId';

const getCards = (weather) => {
  const svgId = getSelectorId(weather);

  return [
    {
      day: 'Сегодня',
      dayInfo: '28 авг',
      iconId: svgId,
      tempDay: `${
        weather.main ? Math.round(weather.main.temp_max - 274) : '19'
      }°`,
      tempNight: `${
        weather.main ? Math.round(weather.main.temp_min - 274) : '15'
      }°`,
      info: `${weather.weather ? weather.weather[0].main : 'Облачно'}`,
    },
    {
      day: 'Завтра',
      dayInfo: '29 авг',
      iconId: 'small_rain_sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Hебольшой дождь ',
    },
    {
      day: 'Ср',
      dayInfo: '30 авг',
      iconId: 'small_rain',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Hебольшой дождь',
    },
    {
      day: 'Чт',
      dayInfo: '28 авг',
      iconId: 'cloudly',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      dayInfo: '28 авг',
      iconId: 'rain',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      dayInfo: '28 авг',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      dayInfo: '28 авг',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
  ];
};

export default getCards;
