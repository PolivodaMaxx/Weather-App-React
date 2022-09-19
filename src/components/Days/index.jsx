import React from 'react';

import Card from './Card';
import Tabs from './Tabs';
import styles from './Days.module.scss';
import useTheme from '../../hooks/UseTheme';

const Days = () => {
  const days = [
    {
      day: 'Сегодня',
      dayInfo: '28 авг',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
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
