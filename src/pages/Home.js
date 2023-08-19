import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Header from '../components/Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../components/contact/Contact';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Layout>
        {loading && <div className="h-screen">Loading</div>}
        {!loading && (
          <div className="fadeIn">
            <Header />
            <Projects />
            <Contact />
          </div>
        )}
      </Layout>
    </>
  );
};
export default Home;
