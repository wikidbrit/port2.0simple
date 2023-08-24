import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const textLines = [
  "useEffect(()\u00A0=>\u00A0{",
  "\u00A0window.addEventListener('scroll',\u00A0handleScroll,\u00A0{ passive:\u00A0true });",
  "\u00A0return ()\u00A0=>\u00A0{",
  "\u00A0\u00A0window.removeEventListener('scroll',\u00A0handleScroll);",
  "\u00A0};",
  "},\u00A0[]);",
];

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const BottomCode = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey(animationKey + 1);
    }, 9000); // Adjust the delay in milliseconds here

    return () => {
      clearTimeout(timer);
    };
  }, [animationKey]);

  return (
    <div className="flex h-32 translate-x-5 flex-col place-content-center opacity-40">
      <motion.p
        className="text-xs tracking-wide text-green-300"
        key={animationKey} // This is important to reset the animation
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {textLines.map((line, index) => (
          <React.Fragment key={index}>
            <span className="pl-8 leading-4 tracking-wide">
              {line.split("").map((char, charIndex) => (
                <motion.span key={charIndex} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
            <br />
          </React.Fragment>
        ))}
      </motion.p>
    </div>
  );
};

export default BottomCode;
