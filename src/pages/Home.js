import React from 'react';
import Layout from '../components/layout';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../contact/Contact';

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
