import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import ThemeContext from "../../context/ThemeContext";

import { TbArrowUpRight } from "react-icons/tb";
import IconButtonSmall from "../buttons/IconButtonSmall";

const ProjectCard = ({ title, subTitle, image, type }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={classNames(
        theme === "dark"
          ? "from-steel-800 to-steel-900"
          : "border-[1px] border-water-800 from-steel to-steel-400",
        "relative space-y-6 overflow-hidden bg-gradient-to-br",
      )}
    >
      <div className="blue-gradient absolute left-0 top-0 h-1 w-full"></div>
      <div className="flex flex-col">
        <img
          src={image}
          alt="testing"
          className="h-[15.5rem] w-full object-cover"
        ></img>
        <div className="flex flex-row items-end justify-between p-4">
          <div
            className={classNames(
              theme === "dark" ? "text-steel" : "text-steel-700",
              "space-y-1 ",
            )}
          >
            <p className="text-xl font-medium">{title}</p>
            <p className="text-sm font-light">{subTitle}</p>
          </div>
          <div className="h-fit rounded-md border-[1px] border-steel-800 px-2 py-1 text-center">
            <p className="text-xxs text-steel-700">{type}</p>
          </div>
          <div className=" absolute right-2 top-4 h-fit rounded-full p-2">
            <IconButtonSmall
              icon={<TbArrowUpRight color="#D6D6D6" size={"1.2rem"} />}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
