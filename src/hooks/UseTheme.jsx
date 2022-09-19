import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const UseTheme = () => {
  const value = useContext(ThemeContext);

  return value;
};

export default UseTheme;
