import React, { useContext, useMemo } from 'react';
import Switch from 'react-switch';

import ThemeContext from '../../context/ThemeContext';

import { TbSun, TbMoon } from 'react-icons/tb';

const DarkModeToggle = ({ handleChange }) => {
  const theme = useContext(ThemeContext);

  const handleColor = useMemo(() => {
    return theme === 'dark' ? '#1D1E1E' : '#E9EDF0';
  }, [theme]);

  return (
    <Switch
      borderRadius={5}
      height={22}
      width={50}
      boxShadow={false}
      onChange={handleChange}
      checked={theme === 'dark'}
      offHandleColor={handleColor}
      onHandleColor={handleColor}
      offColor="#2EB2EC"
      onColor="#2EB2EC"
      uncheckedIcon={
        <TbSun className="mx-auto text-neoBackground translate-y-[3px]" />
      }
      checkedIcon={
        <TbMoon className="mx-auto text-neoBackground translate-y-[3px]" />
      }
    />
  );
};
export default DarkModeToggle;
