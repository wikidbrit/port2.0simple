import classNames from 'classnames';
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import NavBar from '../navBar/NavBar';

const Layout = ({ children, handleChange }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        theme === 'dark' ? 'bg-darkNeoForeground' : 'bg-neoBackground',
        'h-[100%] min-h-screen'
      )}
    >
      <NavBar handleChange={handleChange} theme={theme} />
      <div className=" pt-20 pb-20 px-[14.2rem] space-y-16">{children}</div>
    </div>
  );
};
export default Layout;
