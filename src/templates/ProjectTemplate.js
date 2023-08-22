import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useGetSlugContent from "../hooks/useGetSlugContent";

import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import NavButton from "../components/buttons/NavButton";
import ThemeContext from "../context/ThemeContext";
import classNames from "classnames";
import NavBar from "../navBar/NavBar";

const ProjectTemplate = ({ handleChange }) => {
  const { slug } = useParams();
  const { data } = useGetSlugContent({ slug });

  const theme = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data) {
    return (
      <motion.div
        exit={{ opacity: 0, scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      >
        <div></div>
      </motion.div>
    );
  }

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
    >
      <div
        className={classNames(
          scrollPosition >= 200
            ? "opacity-1 pointer-events-auto "
            : "pointer-events-none opacity-0",
          "fixed top-4 -translate-x-20 duration-300",
        )}
      >
        <NavBar
          scrollPosition={scrollPosition}
          template
          hero
          theme={theme}
          handleChange={handleChange}
        />
      </div>
      <NavButton hash icon={<FiArrowLeft />} theme={theme} to={"/#Projects"} />

      <p className="text-[4.2rem] text-neoGrey ">{data[0].title}</p>
      <p className="text-neoGrey">{data[0].openingText}</p>
      {data[0].contentImageCollection.items.map((item, index) => (
        <img key={index} alt="test" src={item.url}></img>
      ))}
      <p className="text-pText">{data[0].conclusion}</p>
    </motion.div>
  );
};
export default ProjectTemplate;
