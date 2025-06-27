import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MelonChart from './pages/MelonChart';
import BugsChart from './pages/BugsChart';
import GenieChart from './pages/GenieChart';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/melon" element={<MelonChart />} />
        <Route path="/bugs" element={<BugsChart />} />
        <Route path="/genie" element={<GenieChart />} />
      </Routes>
    </div>
  </Router>
);

export default App;
