import React from "react";
import HeroServices from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./pages/services/services";
import Booking from "./pages/index/Booking";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
const Services: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroServices title="Servicios" />
      <ServicesSection />
      <Booking />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </div>
  );
};

export default Services;
