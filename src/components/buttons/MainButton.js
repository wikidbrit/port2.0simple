import React from "react";

import { motion } from "framer-motion";

const MainButton = ({ onClick, text }) => {
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
