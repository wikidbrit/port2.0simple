import React, { useContext } from "react";

import { motion, useTime, useTransform } from "framer-motion";
import ThemeContext from "../../../context/ThemeContext";

import images from "../../../assets/images/Shards";

const BottomShards = () => {
  const theme = useContext(ThemeContext);

  const time = useTime();
  const rotate1 = useTransform(time, [0, 16000], [0, 360], { clamp: false });
  const rotate2 = useTransform(time, [0, 20000], [0, -360], { clamp: false });

  return (
    <div className="flex h-32 transform-gpu flex-row items-center justify-between">
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
        style={{ rotate: rotate1, willChange: "transform" }}
      >
        <div className="relative h-16 w-16">
          <img
            src={images.BottomShardMedium}
            alt="A small shard dynamiclly placed"
            className="pointer-events-none absolute left-0 right-0 mx-auto p-4"
          ></img>
        </div>
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
        style={{ rotate: rotate2, willChange: "transform" }}
      >
        <div className="relative h-16 w-16">
          {theme === "dark" ? (
            <img
              src={images.BottomShardLarge}
              alt="A small shard dynamiclly placed"
              className="pointer-events-none absolute left-0 right-0 mx-auto p-4"
            ></img>
          ) : (
            <img
              src={images.BottomShardLargeDark}
              alt="A small shard dynamiclly placed"
              className="pointer-events-none absolute left-0 right-0 mx-auto p-4"
            ></img>
          )}
        </div>
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
        style={{ rotate: rotate2, willChange: "transform" }}
      >
        <div className="relative h-20 w-20">
          <img
            src={images.BottomShardSmall}
            alt="A small shard dynamiclly placed"
            className="pointer-events-none absolute left-0 right-0 mx-auto p-4"
          ></img>
        </div>
      </motion.div>
    </div>
  );
};
export default BottomShards;
