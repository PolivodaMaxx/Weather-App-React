import React, { useEffect } from 'react';
import Select from 'react-select';

import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import './react-select.scss';
import Logo from '../../assets/img/headerLogo.svg';
import ThemeSvg from '../../assets/img/changeTheme.svg';
import useTheme from '../../hooks/UseTheme';
import { fetchWeather } from '../../axios/fetchWeather';

const options = [
  { value: 'минск', label: 'Минск' },
  { value: 'брест', label: 'Брест' },
  { value: 'гомель', label: 'Гомель' },
  { value: 'гродно', label: 'Гродно' },
  { value: 'москва', label: 'Москва' },
  { value: 'санкт-петербург', label: 'Санкт-петербург' },
];

function Header() {
  const dispatch = useDispatch();
  const { isLight, setIsLight } = useTheme();
  const [currentCity, setCurrentCity] = React.useState('минск');

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  const getValue = () => {
    return currentCity
      ? options.find((city) => city.value === currentCity)
      : '';
  };

  const onChange = (newValue) => {
    setCurrentCity(newValue.value);
  };

  useEffect(() => {
    dispatch(fetchWeather(currentCity));
  }, [currentCity, dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.appLogo}>
        <img src={Logo} alt="Header Logo" />
        <h1>Meteo App</h1>
      </div>
      <div className={styles.wrapper}>
        <img
          onClick={toggleTheme}
          className={styles.theme}
          src={ThemeSvg}
          alt="Change theme"
        />
        <Select
          classNamePrefix={isLight ? 'custom_select_light' : 'custom_select'}
          onChange={onChange}
          value={getValue()}
          options={options}
        />
      </div>
    </div>
  );
}

export default Header;
