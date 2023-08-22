import React from "react";
import ThemeContext from "../../context/ThemeContext";
import classNames from "classnames";

const ProjectButton = ({ text, icon, onClick }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={classNames(
        theme === "dark" ? "raised-dark" : "raised",
        "relative h-full rounded-xl p-4",
      )}
    >
      <div className="absolute right-2 top-2 h-fit w-fit rounded-full p-2">
        {icon}
      </div>
      <p className="absolute bottom-4 left-4 text-2xl text-neoGrey">{text}</p>
    </button>
  );
};
export default ProjectButton;
