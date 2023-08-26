import React, { useContext } from "react";
import { motion, useTime, useTransform } from "framer-motion";

import ThemeContext from "../../../context/ThemeContext";

import images from "../../../assets/images/Shards";

const TopShards = () => {
  const theme = useContext(ThemeContext);

  const time = useTime();
  const rotate1 = useTransform(time, [0, 16000], [0, 360], { clamp: false });
  const rotate2 = useTransform(time, [0, 20000], [0, -360], { clamp: false });

  return (
    <div className="flex h-32 transform-gpu flex-row justify-between">
      <motion.div
        initial={{ y: 70, x: 150, scale: 0.1 }}
        animate={{ y: 0, x: -90, scale: 1.4 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="cursor-pointer"
        style={{ rotate: rotate1, willChange: "transform" }}
      >
        <div className="relative h-16 w-16">
          <img
            src={images.TopShardSmall1}
            alt="A small shard dynamiclly placed"
            className="pointer-events-none absolute left-0 right-0 mx-auto p-4"
          ></img>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 60, x: 70, scale: 0.1 }}
        animate={{ y: -80, x: -60, scale: 4.4 }}
        transition={{ ease: "easeOut", duration: 2.3 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate2, willChange: "transform" }}
      >
        <div className="relative h-8 w-8">
          {theme === "dark" ? (
            <img
              src={images.TopShardLarge}
              alt="A small shard dynamiclly placed"
              className="pointer-events-none absolute left-0 right-0 top-10 m-auto"
            ></img>
          ) : (
            <img
              src={images.TopShardLargeDark}
              alt="A small shard dynamiclly placed"
              className="pointer-events-none absolute left-0 right-0 top-10 m-auto"
            ></img>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 40, x: -20, scale: 0.2 }}
        animate={{ y: -30, x: 10, scale: 1.8 }}
        transition={{ ease: "easeOut", duration: 2.2 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate1, willChange: "transform" }}
      >
        <div className="relative h-8 w-8">
          <img
            src={images.TopShardMedium}
            alt="A small shard dynamiclly placed"
            className="pointer-events-none absolute left-0 right-0 top-10 mx-auto p-1"
          ></img>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 60, x: -40, scale: 0.2 }}
        animate={{ y: 20, x: 60, scale: 1.8 }}
        transition={{ ease: "easeOut", duration: 1.8 }}
        className="w-6 cursor-pointer"
        style={{ rotate: rotate2, willChange: "transform" }}
      >
        <div className="relative h-8 w-8">
          {theme === "dark" ? (
            <img
              src={images.TopShardSmall2}
              alt="A small shard dynamiclly placed"
              className="pointer-events-none absolute left-0 right-0 top-12 m-auto p-1"
            ></img>
          ) : (
            <img
              src={images.TopShardSmall2Dark}
              alt="A small shard dynamiclly placed"
              className="pointer-events-none absolute left-0 right-0 top-12 m-auto p-1"
            ></img>
          )}
        </div>
      </motion.div>
    </div>
  );
};
export default TopShards;
