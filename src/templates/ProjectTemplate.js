import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import useGetSlugContent from "../hooks/useGetSlugContent";

import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import NavButton from "../components/buttons/NavButton";
import ThemeContext from "../context/ThemeContext";

const ProjectTemplate = ({ handleChange }) => {
  const { slug } = useParams();
  const { data } = useGetSlugContent({ slug });

  const theme = useContext(ThemeContext);

  if (!data) {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      >
        <div></div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className=""
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
    >
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
