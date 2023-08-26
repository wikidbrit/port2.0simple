import React from "react";

import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

const IconButtonSmall = ({ icon, onClick, to, className, parentClassName }) => {
  if (to)
    return (
      <div className={parentClassName}>
        <motion.button
          layout={"position"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClick}
          className={classNames(
            className,
            "new-button flex h-10 w-10 place-content-center items-center text-center",
          )}
        >
          <HashLink to={to}>{icon}</HashLink>
        </motion.button>
      </div>
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
