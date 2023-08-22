import React, { useContext } from "react";
import classNames from "classnames";
import ThemeContext from "../../../context/ThemeContext";

const SwitchButton = ({ toggle, setToggle, title, subTitle }) => {
  const commonStyles = " p-4 space-y-2 text-left rounded-md w-full";
  const theme = useContext(ThemeContext);

  return (
    <button
      className={classNames(
        theme === "dark" ? "raised-dark" : "raised",
        commonStyles,
      )}
      onClick={setToggle()}
    >
      <div className="flex flex-row items-center justify-between">
        <p
          className={classNames(
            toggle ? "" : " text-neoMiddleBlue",
            "font-bold",
          )}
        >
          {title}
        </p>
        <div
          className={classNames(
            toggle ? "border-neoGrey" : "border-neoMiddleBlue",
            "rounded-sm border-[1px] p-[1px]",
          )}
        >
          {" "}
          <div
            className={classNames(
              toggle ? "bg-neoGrey" : "bg-neoMiddleBlue",
              "h-3 w-3 rounded-sm",
            )}
          ></div>
        </div>
      </div>
      <p className="text-sm">{subTitle}</p>
    </button>
  );
};
export default SwitchButton;
