import React from "react";

import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const MainButton = ({ onClick, text, to }) => {
  if (to)
    return (
      <HashLink to={to}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="new-button px-6 py-2 font-medium text-steel-50 duration-200"
        >
          <p className=" tracking-wide shadow-sm">{text}</p>
        </motion.button>
      </HashLink>
    );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <button
        onClick={onClick}
        className="new-button px-6 py-2 font-medium text-steel-50 duration-200"
      >
        <p className=" tracking-wide shadow-sm">{text}</p>
      </button>
    </motion.div>
  );
};
export default MainButton;
