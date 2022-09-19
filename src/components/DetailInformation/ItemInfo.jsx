import React from 'react';
import { IndicatorSvgSelector } from '../../assets/img/Indicators/IndicatorSvgSelector';

import styles from './DetailInfo.module.scss';

const ItemInfo = ({ itemId, name, value }) => {
  return (
    <div className={styles.item}>
      <div className={styles.indicator}>
        <IndicatorSvgSelector id={itemId} />
      </div>
      <h1>{name}</h1>
      <span>{value}</span>
    </div>
  );
};

export default ItemInfo;
