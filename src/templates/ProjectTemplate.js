import React, { useContext } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import Masonry from "react-responsive-masonry";

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
        <div className="mb-12 mt-32">
          <div className="pt-4">
            <p className="mb-8 text-5xl font-bold text-steel lg:text-[4.2rem]">
              {data[0].title}
            </p>
            <p className="w-2/3 text-steel-400">{data[0].openingText}</p>
            <hr className="my-8 w-1/4 border-water-200 "></hr>
          </div>
          <Masonry gutter="16px">
            {data[0].contentImageCollection.items.map((item, index) => (
              <Popup
                modal
                nested
                trigger={
                  <img
                    key={index}
                    alt={item.description}
                    src={item.url}
                    className="transition-all duration-200 hover:scale-105 active:scale-95"
                  ></img>
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
          </Masonry>
        </div>
        <hr className="w-1/4 border-water-200 "></hr>
        <p className="w-1/2 py-4 text-steel-400">{data[0].conclusion}</p>
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
