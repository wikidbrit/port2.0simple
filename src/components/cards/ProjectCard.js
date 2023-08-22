import React from "react";
import classNames from "classnames";

import ThemeContext from "../../context/ThemeContext";

import { TbCircleArrowUpRight } from "react-icons/tb";

const ProjectCard = ({ title, subTitle, image }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme === "dark" ? "raised-dark" : "raised",
        "relative space-y-6 rounded-xl p-6",
      )}
    >
      <div className="flex flex-row justify-between">
        <div className="space-y-2 text-neoGrey">
          <p className="text-2xl ">{title}</p>
          <p>{subTitle}</p>
        </div>
        <div className=" absolute right-2 top-2 h-fit rounded-full p-2">
          <TbCircleArrowUpRight color="#2EB2EC" size={"1.6rem"} />
        </div>
      </div>

      <img
        src={image}
        alt="testing"
        className="h-[15.5rem] w-full rounded-lg object-cover"
      ></img>
    </div>
  );
};
export default ProjectCard;
