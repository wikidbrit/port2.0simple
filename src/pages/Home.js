import React from 'react';
import Layout from '../components/layout';
import Header from '../components/Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../components/contact/Contact';
import NavBar from '../navBar/NavBar';
import useLocalStorage from '../hooks/useLocalStorage';
import ThemeContext from '../context/ThemeContext';

const Home = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Layout>
          <NavBar handleChange={handleChange} theme={theme} />
          <Header />
          <Projects />
          <Contact />
        </Layout>
      </ThemeContext.Provider>
    </>
  );
};
export default Home;
