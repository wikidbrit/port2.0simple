import React, { useContext } from "react";
import { motion, useTime, useTransform } from "framer-motion";

import {
  ShardTopBig,
  ShardTopMedium,
  ShardTopSmall1,
  ShardTopSmall2,
} from "../../../assets/svgs";
import ThemeContext from "../../../context/ThemeContext";
import classNames from "classnames";

const TopShards = () => {
  const theme = useContext(ThemeContext);

  const time = useTime();
  const rotate1 = useTransform(time, [0, 16000], [0, 360], { clamp: false });
  const rotate2 = useTransform(time, [0, 20000], [0, -360], { clamp: false });

  return (
    <div className="flex h-32 transform-gpu flex-row justify-between">
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: 70, x: 150, scale: 0.1 }}
        animate={{ y: 0, x: -90, scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate1 }}
      >
        <ShardTopSmall2 />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: 60, x: 70, scale: 0.1 }}
        animate={{ y: -80, x: -30, scale: 4.4 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate2 }}
      >
        <ShardTopBig
          color={classNames(theme === "dark" ? "#D9D9D9" : "#666666")}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: 40, x: -20, scale: 0.2 }}
        animate={{ y: -30, x: 10, scale: 1.8 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.8 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate1 }}
      >
        <ShardTopMedium />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ y: 60, x: -40, scale: 0.2 }}
        animate={{ y: 20, x: 60, scale: 1.8 }}
        transition={{ ease: "easeOut", duration: 2, delay: 1 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate2 }}
      >
        <ShardTopSmall1
          color={classNames(theme === "dark" ? "#D9D9D9" : "#666666")}
        />
      </motion.div>
    </div>
  );
};
export default TopShards;
