import React from 'react';

import styles from './DetailInfo.module.scss';
import ItemInfo from './ItemInfo';
import cloudSvg from '../../assets/img/cloud.svg';
import useTheme from '../../hooks/UseTheme';
import useWeatherData from '../../hooks/UseWeatherData';

const DetailInfo = () => {
  const weather = useWeatherData();

  const items = [
    {
      itemId: 'temp',
      name: 'Температура',
      value: `${
        weather.main ? Math.round(weather.main.temp - 274) : '19'
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
      value: `Без осадков`,
    },
    {
      itemId: 'wind',
      name: 'Ветер',
      value: `${weather.wind ? weather.wind.speed : '3'} м/с  - легкий ветер`,
    },
  ];
  const { isLight } = useTheme();

  return (
    <div className={isLight ? styles.root_light : styles.root}>
      <img src={cloudSvg} alt="Cloud"></img>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <ItemInfo key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DetailInfo;
