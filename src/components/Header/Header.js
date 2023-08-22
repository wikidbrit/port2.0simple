import React, { useEffect, useState } from "react";
import { TitleCard } from "./components";
import classNames from "classnames";
import NavBar from "../../navBar/NavBar";

const Header = () => {
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
    <div className="relative">
      <div
        className={classNames(
          scrollPosition >= 200
            ? "opacity-1 pointer-events-auto "
            : "pointer-events-none opacity-0",
          "fixed top-4 -translate-x-20 duration-300",
        )}
      >
        <NavBar hero />
      </div>
      <TitleCard />
    </div>
  );
};
export default Header;
