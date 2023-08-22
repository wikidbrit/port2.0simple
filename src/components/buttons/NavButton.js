import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavButton = ({ icon, text, onClick, theme, to, hash }) => {
  if (hash) {
    return (
      <HashLink
        to={to}
        onClick={onClick}
        className={classNames(
          theme === "dark" ? "raised-dark" : "raised",
          "group flex w-fit flex-row items-center space-x-4 rounded-full px-3 py-3 text-neoGrey transition-all duration-200 hover:text-neoMiddleBlue",
        )}
      >
        <div className="mx-auto">{icon}</div>
        {text && <p className="w-full pr-3">{text}</p>}
      </HashLink>
    );
  }
  return (
    <Link
      to={to}
      onClick={onClick}
      className={classNames(
        theme === "dark" ? "raised-dark" : "raised",
        "group flex w-fit flex-row items-center space-x-4 rounded-full px-3 py-3 text-neoGrey transition-all duration-200 hover:text-neoMiddleBlue",
      )}
    >
      {" "}
      <div className="mx-auto group-hover:animate-pulse">{icon}</div>
      {text && <p className="w-full pr-3">{text}</p>}
    </Link>
  );
};
export default NavButton;
