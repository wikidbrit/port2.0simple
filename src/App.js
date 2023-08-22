import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ProjectTemplate from './templates/ProjectTemplate';
import FourZeroFour from './pages/FourZeroFour';
import Layout from './components/layout';
import useLocalStorage from './hooks/useLocalStorage';

import ThemeContext from './context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {loading && <div className="h-screen">Loading</div>}
        {!loading && (
          <div className="fadeIn">
            <Layout handleChange={handleChange}>
              <AnimatePresence mode="wait">
                <motion.div>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home handleChange={handleChange} theme={theme} />
                      }
                    />
                    <Route path="*" element={<FourZeroFour />} />
                    <Route path="project/:slug" element={<ProjectTemplate />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </Layout>
          </div>
        )}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
