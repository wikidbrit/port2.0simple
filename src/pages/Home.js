import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../components/contact/Contact';

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
      <Header />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
