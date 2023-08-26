import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import useGetSlugContent from "../hooks/useGetSlugContent";

import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeContext from "../context/ThemeContext";
import IconButtonSmall from "../components/buttons/IconButtonSmall";
import Footer from "../components/Footer/Footer";
import MainButton from "../components/buttons/MainButton";

const ProjectTemplate = ({ handleChange }) => {
  const { slug } = useParams();
  const { data } = useGetSlugContent({ slug });

  const theme = useContext(ThemeContext);

  if (!data) {
    return (
      <motion.div
        key={3}
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
      key={4}
      className="relative"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
    >
      <IconButtonSmall
        hash
        icon={<FiArrowLeft color="D6D6D6" />}
        theme={theme}
        to={"/#Projects"}
        parentClassName={"fixed -translate-x-20 translate-y-6"}
      />

      <div className="space-y-4">
        <div>
          <p className="text-[4.2rem] text-steel">{data[0].title}</p>
          <p className="pb-20 text-steel">{data[0].openingText}</p>
        </div>

        {data[0].contentImageCollection.items.map((item, index) => (
          <img key={index} alt="test" src={item.url}></img>
        ))}
        <p className="text-pText">{data[0].conclusion}</p>
        <div>
          <MainButton text={"Go Back"} to={"/#Projects"} />
        </div>

        <div className="h-20"></div>
        <Footer handleChange={handleChange} />
      </div>
    </motion.div>
  );
};
export default ProjectTemplate;
