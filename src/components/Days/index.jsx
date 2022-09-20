import React from 'react';

import Card from './Card';
import Tabs from './Tabs';
import styles from './Days.module.scss';
import useTheme from '../../hooks/UseTheme';
import useWeatherData from '../../hooks/UseWeatherData';
import getCards from '../../utils/getCards';

const Days = () => {
  const weather = useWeatherData();
  const days = getCards(weather);
  const { isLight } = useTheme();

  return (
    <div className={styles.root}>
      <Tabs />
      <div className={isLight ? styles.wrapper_light : styles.wrapper}>
        {days.map((day) => (
          <Card key={day.day} {...day} />
        ))}
      </div>
    </div>
  );
};

export default Days;
