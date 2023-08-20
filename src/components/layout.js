import classNames from 'classnames';
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        theme === 'dark' ? 'bg-darkNeoForeground' : 'bg-neoBackground',
        'h-[100%]  relative '
      )}
    >
      <div className=" pt-6 pb-20 px-[14.2rem] space-y-16">{children}</div>
    </div>
  );
};
export default Layout;
