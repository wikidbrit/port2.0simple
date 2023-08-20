import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Header from '../components/Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};
export default Home;
