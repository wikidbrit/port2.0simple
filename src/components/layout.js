import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import NavBar from '../navBar/NavBar';

const Layout = ({ children, handleChange }) => {
  const theme = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        theme === 'dark' ? 'bg-darkNeoForeground' : 'bg-neoBackground',
        'h-[100%] min-h-screen relative '
      )}
    >
      <div className="mx-auto max-w-[1280px] pt-48 px-20">
        <div
          className={classNames(
            scrollPosition >= 200
              ? 'opacity-0 pointer-events-none'
              : 'opacity-1 pointer-events-auto',
            'duration-300 transition-opacity ease-in-out fixed top-0 left-0 w-full z-50'
          )}
        >
          <NavBar handleChange={handleChange} theme={theme} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
