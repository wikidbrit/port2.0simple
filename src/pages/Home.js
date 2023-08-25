import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Projects from "../Projects/Projects";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

const Home = ({ handleChange }) => {
  const scrollToElement = () => {
    const element = document.getElementById("target-element");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    scrollToElement();
  }, []);

  return (
    <>
      <motion.div
        key={2}
        className="space-y-20"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Header handleChange={handleChange} />
        <Projects />
        <Footer handleChange={handleChange} />
      </motion.div>
    </>
  );
};
export default Home;
