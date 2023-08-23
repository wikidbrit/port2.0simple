import React from "react";
import { TitleArea } from "./components";
// import classNames from "classnames";
// import ThemeContext from "../../context/ThemeContext";

const Header = ({ handleChange }) => {
  // const theme = useContext(ThemeContext);
  return (
    <div className="relative" id="home">
      <TitleArea />
    </div>
  );
};
export default Header;
