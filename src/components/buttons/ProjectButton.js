import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const ProjectButton = ({ text, icon, onClick, eyebrow, boxText }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className={classNames("project-button relative h-full p-4")}
    >
      <p className="absolute left-4 top-4 flex w-fit bg-lightWater-400 px-2 py-1 text-xxs text-water-800 opacity-40">
        {boxText}
      </p>
      <div className="absolute right-2 top-2 h-fit w-fit rounded-full p-2">
        {icon}
      </div>
      <div className="absolute bottom-4 left-4 space-y-2">
        <p className="text-2xl font-medium text-steel">{text}</p>
      </div>
    </motion.button>
  );
};
export default ProjectButton;
