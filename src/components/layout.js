import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import NewToggle from "../navBar/components/NewToggle";

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
        theme === "dark"
          ? "from-bgBlueDark to-bgBlueLight"
          : "from-steel-100 to-steel-300",
        "h-100% relative left-0 top-0 z-50 min-h-screen w-screen bg-gradient-to-r",
      )}
    >
      <NewToggle handleChange={handleChange} />
      <div className="mx-auto max-w-[1280px] p-10">{children}</div>
    </div>
  );
};
export default Layout;
