import React, { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";
import { ToggleDark, ToggleLight } from "../../assets/svgs";

const NewToggle = ({ handleChange }) => {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={handleChange} className="w-11 duration-300">
      {theme === "dark" && (
        <div className="w-fit">
          <ToggleDark />
        </div>
      )}
      {theme === "light" && (
        <div className="w-fit">
          <ToggleLight />
        </div>
      )}
    </button>
  );
};
export default NewToggle;
