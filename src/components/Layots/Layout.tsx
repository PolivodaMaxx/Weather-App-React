import React from 'react';

import useTheme from '../../hooks/UseTheme';

const Layout = ({ children }) => {
  const { isLight } = useTheme();
  return <div className={isLight ? 'layout_light' : 'layout'}>{children}</div>;
};

export default Layout;
