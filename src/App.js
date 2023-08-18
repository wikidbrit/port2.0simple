import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ProjectTemplate from './template/ProjectTemplate';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<ProjectTemplate />} />
      </Routes>
    </>
  );
}

export default App;
