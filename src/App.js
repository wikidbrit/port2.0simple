import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProjectTemplate from "./templates/ProjectTemplate";
import FourZeroFour from "./pages/FourZeroFour";
import Layout from "./components/layout";
import useLocalStorage from "./hooks/useLocalStorage";
import { ErrorBoundary } from "react-error-boundary";

import ThemeContext from "./context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import SplashPage from "./components/SplashPage/SplashPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ThemeContext.Provider value={theme}>
        <AnimatePresence mode="wait">
          {loading && <SplashPage />}
          {!loading && (
            <div className="fadeIn">
              <Layout handleChange={handleChange}>
                <motion.div>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home handleChange={handleChange} theme={theme} />
                      }
                    />
                    <Route path="*" element={<FourZeroFour />} />
                    <Route
                      path="project/:slug"
                      element={<ProjectTemplate handleChange={handleChange} />}
                    />
                  </Routes>
                </motion.div>
              </Layout>
            </div>
          )}
        </AnimatePresence>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
