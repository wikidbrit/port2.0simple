import React from "react";

import { motion } from "framer-motion";

const SplashPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      className="flex h-screen w-screen flex-row place-content-center items-center space-x-5 bg-gradient-to-br from-bgBlueDark to-bgBlueLight text-7xl font-black text-steel-500"
    >
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        Lets
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      >
        Build
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
      >
        Something
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
      >
        Cool!
      </motion.p>
    </motion.div>
  );
};
export default SplashPage;
