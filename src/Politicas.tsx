import React from "react";
import Navbar from "./components/Navbar";
import HeroPoliticas from "./components/Hero";
import FooterAbout from "./pages/about/FooterAbout";
import FooterText from "./components/FooterText";
import PoliticasPage from "./politicas/politicas";

const Politicas: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroPoliticas title="Política de Privacidad" />
      <PoliticasPage />
      <FooterAbout />
      <FooterText className="bg-[#6BBAE9]" hoverColor="hover:text-pink-400" />
    </div>
  );
};

export default Politicas;
