import React from "react";
import HeroServices from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./pages/services/services";
import Booking from "./pages/index/Booking";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>
          Discover veneres in your dental smile desing at Bites Creadores de
          Sonrisas.{" "}
        </title>
        <meta
          name="description"
          content="Descubre el arte de la odontología estética en Bites Creadores de Sonrisas. Desde blanqueamiento hasta rehabilitación oral, crea una sonrisa saludable y deslumbrante con nuestros expertos en cuidado bucal."
        />
      </Helmet>
      <Navbar />
      <HeroServices title={t("services.services")} />
      <ServicesSection />
      <Booking />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </div>
  );
};

export default Services;
