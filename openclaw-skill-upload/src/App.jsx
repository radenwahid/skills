import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Skills from './pages/Skills';
import Workflow from './pages/Workflow';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/workflow" element={<Workflow />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
