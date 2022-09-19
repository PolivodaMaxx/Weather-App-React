import React from 'react';
import useTheme from '../../hooks/UseTheme';

import styles from './Days.module.scss';

const tabs = [
  { value: 'На неделю' },
  { value: 'На месяц' },
  { value: 'На 10 дней' },
];

const Tabs = () => {
  const { isLight } = useTheme();

  return (
    <div className={styles.tabs_wrapper}>
      {tabs.map((tab, index) => (
        <div key={index} className={isLight ? styles.tab_light : styles.tab}>
          <span>{tab.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
