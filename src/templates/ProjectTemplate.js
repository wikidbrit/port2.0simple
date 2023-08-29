import React, { useContext } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";

import useGetSlugContent from "../hooks/useGetSlugContent";
import { motion } from "framer-motion";

import { FiArrowLeft } from "react-icons/fi";
import ThemeContext from "../context/ThemeContext";
import { Footer } from "../components/Footer";
import MainButton from "../components/buttons/MainButton";
import ImageInteraction from "./components/ImageInteraction";
import BackButton from "../components/buttons/BackButton";

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
      layout="templateParent"
      className="relative px-4 lg:px-0"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
    >
      <BackButton
        layout="templateButton"
        to={"/#Projects"}
        className={"fixed -translate-x-20 translate-y-6"}
        icon={<FiArrowLeft color="D6D6D6" />}
      />

      <div
        className={classNames(
          theme === "dark" ? "text-steel" : "text-steel-800",
          "space-y-4 ",
        )}
      >
        <div>
          <p className="text-5xl leading-10 lg:text-[4.2rem] lg:leading-normal">
            {data[0].title}
          </p>
          <p className="pb-20 pt-10 lg:pt-0">{data[0].openingText}</p>
        </div>

        {data[0].contentImageCollection.items.map((item, index) => (
          <Popup
            modal
            nested
            trigger={
              <img key={index} alt={item.description} src={item.url}></img>
            }
          >
            {(close) => (
              <ImageInteraction
                close={close}
                image={item.url}
                description={item.description}
              />
            )}
          </Popup>
        ))}
        <p>{data[0].conclusion}</p>
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
