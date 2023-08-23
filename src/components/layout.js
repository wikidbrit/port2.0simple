import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Layout = ({ children }) => {
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
      <div className="fiexd left-0 top-0 z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
