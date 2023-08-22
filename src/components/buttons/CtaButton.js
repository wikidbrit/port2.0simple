import classNames from "classnames";
import React from "react";

const CtaButton = ({ icon, text, onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        theme === "dark" ? "raised-dark" : "raised",
        "flex flex-row items-center space-x-4 rounded-md px-5 py-3 text-neoGrey transition-all duration-200 hover:px-8 hover:text-neoMiddleBlue",
      )}
    >
      <div>{icon}</div>
      {text && <p className="pr-3">{text}</p>}
    </button>
  );
};
export default CtaButton;
