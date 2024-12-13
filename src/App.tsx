import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Index";
import GalleryPage from "./Gallery";
import AboutPage from "./About";
import ServicesPage from "./Services";
import ServicesDinamic from "./pages/services/dinamic";
import ContactPage from "./Contact";
import IndexBlog from "./pages/blog/IndexBlog";
import BlogPage from "./BlogPage";
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
        {/* <Route path="/blog/:id" element={<BlogID />} /> */}
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/blog/:id" element={<IndexBlog />} />
        <Route path="/política de privacidad" element={<Politicas />} />
        <Route path="/términos de servicio" element={<Terminos />} />
      </Routes>
    </Router>
  );
};

export default App;
