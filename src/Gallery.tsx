import React from "react";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import Navbar from "./components/Navbar";

const Galery: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </div>
  );
};

export default Galery;
