import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Index';
import GalleryPage from './Gallery';
import AboutPage from './About';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;