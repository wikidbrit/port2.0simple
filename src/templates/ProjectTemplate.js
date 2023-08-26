import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import useGetSlugContent from "../hooks/useGetSlugContent";

import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeContext from "../context/ThemeContext";
import IconButtonSmall from "../components/buttons/IconButtonSmall";
import Footer from "../components/Footer/Footer";
import MainButton from "../components/buttons/MainButton";
import Popup from "reactjs-popup";
import ImageInteraction from "./components/ImageInteraction";
import classNames from "classnames";

const ProjectTemplate = ({ handleChange }) => {
  const { slug } = useParams();
  const { data } = useGetSlugContent({ slug });

  const theme = useContext(ThemeContext);
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };

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

      <div
        className={classNames(
          theme === "dark" ? "text-steel" : "text-steel-800",
          "space-y-4 ",
        )}
      >
        <div>
          <p className="text-[4.2rem] ">{data[0].title}</p>
          <p className="pb-20 ">{data[0].openingText}</p>
        </div>

        {data[0].contentImageCollection.items.map((item, index) => (
          <Popup
            modal
            nested
            trigger={
              <img key={index} alt={item.description} src={item.url}></img>
            }
            {...{ overlayStyle }}
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
