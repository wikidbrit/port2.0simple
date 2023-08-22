import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import NavBar from "../navBar/NavBar";

const Layout = ({ children, handleChange }) => {
  const theme = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        theme === "dark" ? "bg-darkNeoForeground" : "bg-neoBackground",
        "relative h-[100%] min-h-screen ",
      )}
    >
      <div className="mx-auto max-w-[1280px] px-20 pt-48">
        <div
          className={classNames(
            scrollPosition >= 200
              ? "pointer-events-none opacity-0"
              : "opacity-1 pointer-events-auto",
            "fixed left-0 top-0 z-50 w-full transition-opacity duration-300 ease-in-out",
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
