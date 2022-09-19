import React from 'react';

import GlobalSvgSelector from '../../assets/img/Indicators/GlobalSvgSelector';
import useTheme from '../../hooks/UseTheme';
import styles from './Days.module.scss';

const Card = ({ day, dayInfo, iconId, tempDay, tempNight, info }) => {
  const { isLight } = useTheme();

  return (
    <div className={isLight ? styles.card_light : styles.card}>
      <h1>{day}</h1>
      <span>{dayInfo}</span>
      <GlobalSvgSelector value="small" id={iconId} />
      <h1>{tempDay}</h1>
      <span>{tempNight}</span>
      <span>{info}</span>
    </div>
  );
};

export default Card;
