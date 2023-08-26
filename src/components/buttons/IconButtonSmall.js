import React from "react";

import { motion } from "framer-motion";

const IconButtonSmall = ({ icon, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className="new-button flex h-10 w-10 place-content-center items-center text-center"
    >
      {icon}
    </motion.button>
  );
};
export default IconButtonSmall;
