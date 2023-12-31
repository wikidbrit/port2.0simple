import React from "react";

import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

const IconButtonSmall = ({ icon, onClick, to, className, parentClassName }) => {
  if (to)
    return (
      <motion.button
        layout={true}
        layoutId="test"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={classNames(
          parentClassName,
          "new-button flex h-10 w-10 place-content-center items-center text-center",
        )}
      >
        <HashLink to={to}>{icon}</HashLink>
      </motion.button>
    );

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className={classNames(
        className,
        "new-button flex h-10 w-10 place-content-center items-center text-center",
      )}
    >
      {icon}
    </motion.button>
  );
};
export default IconButtonSmall;
