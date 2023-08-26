import React from "react";
import classNames from "classnames";

import ThemeContext from "../../context/ThemeContext";

import { TbArrowUpRight } from "react-icons/tb";
import IconButtonSmall from "../buttons/IconButtonSmall";

const ProjectCard = ({ title, subTitle, image }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme === "dark" ? "bg-steel-900" : "",
        "relative space-y-6 overflow-hidden rounded-sm px-6 pb-6 shadow-md",
      )}
    >
      <div className="blue-gradient absolute left-0 top-0 h-2 w-full"></div>
      <div className="flex flex-col space-y-4">
        <img
          src={image}
          alt="testing"
          className="h-[15.5rem] w-full rounded-lg object-cover"
        ></img>
        <div className="flex flex-row justify-between">
          <div className="space-y-1 text-neoGrey">
            <p className="text-xl ">{title}</p>
            <p className="text-sm">{subTitle}</p>
          </div>
          <div className=" absolute right-2 top-4 h-fit rounded-full p-2">
            <IconButtonSmall
              icon={<TbArrowUpRight color="#D6D6D6" size={"1.2rem"} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
