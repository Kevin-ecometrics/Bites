import React from "react";
import Navbar from "./components/Navbar";
import HeroPoliticas from "./components/Hero";
import FooterAbout from "./pages/about/FooterAbout";
import FooterText from "./components/FooterText";
import PoliticasPage from "./politicas/politicas";
import { useTranslation } from "react-i18next";

const Politicas: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <HeroPoliticas title={t("politicas.title")} />
      <PoliticasPage />
      <FooterAbout />
      <FooterText className="bg-[#6BBAE9]" hoverColor="hover:text-pink-400" />
    </div>
  );
};

export default Politicas;
