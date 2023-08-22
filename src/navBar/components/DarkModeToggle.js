import React, { useContext, useMemo } from "react";
import Switch from "react-switch";

import ThemeContext from "../../context/ThemeContext";

import { TbSun, TbMoon } from "react-icons/tb";

const DarkModeToggle = ({ handleChange }) => {
  const theme = useContext(ThemeContext);

  const handleColor = useMemo(() => {
    return theme === "dark" ? "#1D1E1E" : "#E9EDF0";
  }, [theme]);

  return (
    <Switch
      width={50}
      borderRadius={20}
      height={23}
      boxShadow={false}
      onChange={handleChange}
      checked={theme === "dark"}
      offHandleColor={handleColor}
      onHandleColor={handleColor}
      offColor="#2EB2EC"
      onColor="#2EB2EC"
      uncheckedIcon={
        <TbSun className="mx-auto translate-y-[3px] text-neoBackground" />
      }
      checkedIcon={
        <TbMoon className="mx-auto translate-y-[3px] text-neoBackground" />
      }
    />
  );
};
export default DarkModeToggle;
