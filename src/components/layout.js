import classNames from "classnames";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MainNavigation from "./navBar/MainNavigation";
import { BGDarkmode, BGLightmode } from "../assets/svgs";

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        theme === "dark"
          ? "from-bgBlueDark to-bgBlueLight"
          : "from-steel-100 to-steel-300",
        "h-100% relative left-0 top-0 min-h-screen w-screen bg-gradient-to-br",
      )}
    >
      <MainNavigation />

      <div
        style={{ zIndex: 1 }} // Higher value than background image's z-index
        className="relative mx-auto max-w-[1280px] pt-10 lg:p-10 lg:pt-0"
      >
        {children}
      </div>

      <div
        className={classNames(
          theme === "dark" ? "opacity-30" : "opacity-100",
          "pointer-events-none fixed left-0 right-0 top-10 mx-auto w-full max-w-[1280px] p-20 transition-all duration-300 ease-in-out",
        )}
        style={{ zIndex: 0 }} // Lower value to keep the background behind
      >
        {theme === "dark" ? <BGDarkmode /> : <BGLightmode />}
      </div>
    </div>
  );
};

export default Layout;
