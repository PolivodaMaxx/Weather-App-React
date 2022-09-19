import React from 'react';

import styles from '../ThisDay/ThisDay.module.scss';
import GlobalSvgSelector from '../../assets/img/Indicators/GlobalSvgSelector';
import useTheme from '../../hooks/UseTheme';
import useWeatherData from '../../hooks/UseWeatherData';

const ThisDay = () => {
  const { isLight } = useTheme();
  const weather = useWeatherData();
  const time = new Date();
  const currentTime = time.toLocaleTimeString().slice(0, -3);

  return (
    <div className={isLight ? styles.root_light : styles.root}>
      <div className={styles.top}>
        <div className={styles.top_text}>
          <h1>{weather.main ? Math.round(weather.main.temp - 274) : '19'}°</h1>
          <h2>Сегодня</h2>
        </div>
        <div className={styles.top_svg}>
          <GlobalSvgSelector id="sun" value="big" />
        </div>
      </div>
      <div className={styles.bottom}>
        <h3>Время: {currentTime}</h3>
        <h3>Город: {weather.name ? weather.name : 'Minsk'}</h3>
      </div>
    </div>
  );
};

export default ThisDay;
