import React from "react";
import Navbar from "./components/Navbar";
import HeroTerminos from "./components/Hero";
import FooterAbout from "./pages/about/FooterAbout";
import FooterText from "./components/FooterText";
import TerminosPage from "./terminos/terminos";
import { useTranslation } from "react-i18next";

const Politicas: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <HeroTerminos title={t("terminos.title")} />
      <TerminosPage />
      <FooterAbout />
      <FooterText className="bg-[#6BBAE9]" hoverColor="hover:text-pink-400" />
    </div>
  );
};

export default Politicas;
