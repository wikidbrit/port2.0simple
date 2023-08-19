import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ProjectTemplate from './templates/ProjectTemplate';
import FourZeroFour from './pages/FourZeroFour';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<ProjectTemplate />} />
        <Route path="*" element={<FourZeroFour />} />
        <Route path="project/:slug" element={<ProjectTemplate />} />
      </Routes>
    </>
  );
}

export default App;
