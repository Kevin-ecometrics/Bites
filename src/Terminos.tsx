import React from "react";
import Navbar from "./components/Navbar";
import HeroTerminos from "./components/Hero";
import FooterAbout from "./pages/about/FooterAbout";
import FooterText from "./components/FooterText";
import TerminosPage from "./terminos/terminos";

const Politicas: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroTerminos title="Términos de Servicio." />
      <TerminosPage />
      <FooterAbout />
      <FooterText className="bg-[#6BBAE9]" hoverColor="hover:text-pink-400" />
    </div>
  );
};

export default Politicas;
