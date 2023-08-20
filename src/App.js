import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ProjectTemplate from './templates/ProjectTemplate';
import FourZeroFour from './pages/FourZeroFour';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && <div className="h-screen">Loading</div>}
      {!loading && (
        <div className="fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<ProjectTemplate />} />
            <Route path="*" element={<FourZeroFour />} />
            <Route path="project/:slug" element={<ProjectTemplate />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
