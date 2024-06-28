import React from "react";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import Navbar from "./components/Navbar";
import Reviews from "./pages/about/Reviews";
import { Helmet } from "react-helmet-async";

const Galery: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>
          Find Tijuana’s best solution for veneers and smile design{" "}
        </title>
        <meta
          name="description"
          content="Bites Creadores de Sonrisas has the nearest and top rated dental clinic in high aesthetic dentistry in Tijuana as seen in Facebook and Instagram "
        />
        <meta
          name="keywords"
          content="cosmeticdsadsa, bestdasdsadsa, top rated,das near me, family"
        />
      </Helmet>
      <Navbar />
      <Gallery />
      <Reviews />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </div>
  );
};

export default Galery;
