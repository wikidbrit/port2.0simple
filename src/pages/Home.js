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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Projects />
        <Contact />
      </motion.div>
    </>
  );
};
export default Home;
