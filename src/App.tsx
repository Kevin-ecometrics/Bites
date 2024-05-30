import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Index";
import GalleryPage from "./Gallery";
import AboutPage from "./About";
import ServicesPage from "./Services";
import ServicesDinamic from "./pages/services/dinamic";
import ContactPage from "./Contact";
import BlogPage from "./Blog";
import Politicas from "./Politicas";
import Terminos from "./Terminos";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="/servicios/:id" element={<ServicesDinamic />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/politica de privacidad" element={<Politicas />} />
        <Route path="/terminos de servicio" element={<Terminos />} />
      </Routes>
    </Router>
  );
};

export default App;
