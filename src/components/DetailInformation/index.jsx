import React from 'react';

import styles from './DetailInfo.module.scss';
import ItemInfo from './ItemInfo';
import cloudSvg from '../../assets/img/cloud.svg';
import useTheme from '../../hooks/UseTheme';
import useWeatherData from '../../hooks/UseWeatherData';
import getInfoItem from '../../utils/getInfoItem';

const DetailInfo = () => {
  const weather = useWeatherData();
  const items = getInfoItem(weather);
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
