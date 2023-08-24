import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../../context/ThemeContext";
import classNames from "classnames";

const line1 = "const myPortfolio => ({children: React.ReactElement}) = {";

const textLines = [
  "const\u00A0{ a:\u00A0name\u00A0,\u00A0b:\u00A0age\u00A0}\u00A0:\u00A0{ a:\u00A0string\u00A0,\u00A0b:\u00A0number\u00A0}\u00A0=\u00A0{ Paul\u00A0,\u00A035\u00A0}",
  "const\u00A0[scrollPosition,\u00A0setScrollPosition]\u00A0=\u00A0useState(0)",
  "const\u00A0handleScroll\u00A0=\u00A0() =>\u00A0{",
  "\u00A0\u00A0\u00A0\u00A0const\u00A0position\u00A0=\u00A0window.scrollY;",
  "\u00A0\u00A0\u00A0\u00A0setScrollPosition(position);",
  "}\u00A0",
];

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.02,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const TopCode = () => {
  const theme = useContext(ThemeContext);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey(animationKey + 1);
    }, 7000); // Adjust the delay in milliseconds here

    return () => {
      clearTimeout(timer);
    };
  }, [animationKey]);

  return (
    <div
      className={classNames(
        theme === "dark" ? "opacity-40" : "opacity-60",
        "flex h-32 translate-x-5  flex-col place-content-center space-y-2",
      )}
    >
      <motion.p
        className={classNames(
          theme === "dark" ? "text-green-300" : "text-green-700",
          "text-xs tracking-wide",
        )}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        key={animationKey}
        className={classNames(
          theme === "dark" ? "text-green-300" : "text-green-700",
          "ml-8 text-xs tracking-wide",
        )}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {textLines.map((line, index) => (
          <React.Fragment key={index}>
            <span className="pl-0 leading-4 tracking-wide">
              {line.split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
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

export default TopCode;
