import React from "react";
import {
  ShardBottomBig,
  ShardBottomMedium,
  ShardBottomSmall,
} from "../../../assets/svgs";

import { motion, useTime, useTransform } from "framer-motion";

const BottomShards = () => {
  const time = useTime();
  const rotate1 = useTransform(time, [0, 8000], [0, 360], { clamp: false });
  return (
    <div className="flex h-32 flex-row items-center justify-between">
      <motion.div
        animate={{ y: -2, x: -110 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
        className="w-16"
        style={{ rotate: rotate1 }}
      >
        <ShardBottomMedium />
      </motion.div>
      <div className="h-16 -translate-x-14 translate-y-20">
        <ShardBottomSmall />
      </div>
      <div className="w-24">
        <ShardBottomBig />
      </div>
    </div>
  );
};
export default BottomShards;
