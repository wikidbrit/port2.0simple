import React, { useContext } from "react";

import { motion } from "framer-motion";
import classNames from "classnames";
import ThemeContext from "../../../context/ThemeContext";

const TitleAreaSelectionBox = () => {
  const theme = useContext(ThemeContext);
  return (
    <motion.div
      style={{ willChange: "transform" }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 2, delay: 1.5 }}
      className={classNames(
        theme === "dark" ? "border-lightWater-800" : "border-lightWater-200",
        "absolute -left-1 top-1.5 h-[6.5rem] w-[5.2rem]  border-2 ",
      )}
    >
      <div
        className={classNames(
          theme === "dark" ? "border-lightWater-400" : "border-water-500",
          "grid h-full w-full grid-cols-2 place-content-between gap-4  border-[2px] ",
        )}
      >
        <div
          className={classNames(
            theme === "dark" ? "border-lightWater-400" : "border-water-500",
            "h-2 w-2 -translate-x-1 -translate-y-1 border-[1px] bg-steel-100",
          )}
        ></div>
        <div
          className={classNames(
            theme === "dark" ? "border-lightWater-400" : "border-water-500",
            "h-2 w-2 -translate-y-1 translate-x-1 place-self-end border-[1px]  bg-steel-100",
          )}
        ></div>
        <div
          className={classNames(
            theme === "dark" ? "border-lightWater-400" : "border-water-500",
            "h-2 w-2 -translate-x-1 translate-y-1 border-[1px]  bg-steel-100",
          )}
        ></div>
        <div
          className={classNames(
            theme === "dark" ? "border-lightWater-400" : "border-water-500",
            "h-2 w-2 translate-x-1 translate-y-1 place-self-end border-[1px]  bg-steel-100",
          )}
        ></div>
      </div>
    </motion.div>
  );
};
export default TitleAreaSelectionBox;
