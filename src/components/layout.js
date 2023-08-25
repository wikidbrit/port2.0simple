import classNames from "classnames";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MainNavigation from "./navBar/MainNavigation";
import { BGDarkmode, BGLightmode } from "../assets/svgs";

const Layout = ({ children, handleChange }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        theme === "dark"
          ? "from-bgBlueDark to-bgBlueLight"
          : "from-steel-100 to-steel-300",
        "h-100% relative left-0 top-0 z-50 min-h-screen w-screen bg-gradient-to-br",
      )}
    >
      <MainNavigation />
      <div
        className={classNames(
          theme === "dark" ? "opacity-30" : "opacity-100",
          " absolute left-0 right-0 mx-auto w-full max-w-[1280px] p-20 transition-all duration-300 ease-in-out",
        )}
      >
        {theme === "dark" && <BGDarkmode />}
        {theme === "light" && <BGLightmode />}
      </div>
      <div className="mx-auto max-w-[1280px] p-10">{children}</div>
    </div>
  );
};
export default Layout;
