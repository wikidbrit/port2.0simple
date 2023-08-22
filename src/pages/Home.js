import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../components/contact/Contact';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollToElement = () => {
    const element = document.getElementById('target-element');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    scrollToElement();
  }, []);

  return (
    <>
      <motion.div
        className="space-y-20"
        exit={{ opacity: 0, scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Header />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
};
export default Home;
