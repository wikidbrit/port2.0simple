import React, { useContext } from "react";
import {
  ShardBottomBig,
  ShardBottomMedium,
  ShardBottomSmall,
} from "../../../assets/svgs";

import { motion, useTime, useTransform } from "framer-motion";
import classNames from "classnames";
import ThemeContext from "../../../context/ThemeContext";

const BottomShards = () => {
  const theme = useContext(ThemeContext);

  const time = useTime();
  const rotate1 = useTransform(time, [0, 16000], [0, 360], { clamp: false });
  const rotate2 = useTransform(time, [0, 20000], [0, -360], { clamp: false });
  const rotate3 = useTransform(time, [0, 22000], [0, -360], { clamp: false });
  return (
    <div className="flex h-32 flex-row items-center justify-between">
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: -20, x: 150, scale: 0.1 }}
        animate={{ y: -2, x: -60, scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
        className="w-12 cursor-pointer"
        style={{ rotate: rotate1 }}
      >
        <ShardBottomMedium />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: -20, x: 30, scale: 0.3 }}
        animate={{ y: 0, x: -20, scale: 0.8 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.8 }}
        className="w-12 cursor-pointer"
        style={{ rotate: rotate2 }}
      >
        <ShardBottomSmall />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: -30, x: -10, scale: 0.1 }}
        animate={{ y: 25, x: 0, scale: 1.8 }}
        transition={{ ease: "easeOut", duration: 3, delay: 1.2 }}
        className="w-12 cursor-pointer"
        style={{ rotate: rotate3 }}
      >
        <ShardBottomBig
          color={classNames(theme === "dark" ? "#D9D9D9" : "#666666")}
        />
      </motion.div>
    </div>
  );
};
export default BottomShards;
