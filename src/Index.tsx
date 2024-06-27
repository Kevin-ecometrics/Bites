import { Hero } from "./pages/index/Hero";
import Information from "../src/pages/index/Information";
import Navbar from "../src/components/Navbar";
import Mision from "./pages/index/Mision";
import Task from "./pages/index/Task";
import Contact from "./pages/index/Contact";
import Booking from "./pages/index/Booking";
import Map from "./components/Map";
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import ServiceCard from "./components/ServiceCard";
import { Helmet } from "react-helmet-async";
function Bites() {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>
          Descubre el Poder de una Sonrisa con Bites Creadores de Sonrisas.
        </title>
        <meta
          name="description"
          content="Descubre el arte de la odontología estética en Bites Creadores de Sonrisas. Desde blanqueamiento hasta rehabilitación oral, crea una sonrisa saludable y deslumbrante con nuestros expertos en cuidado bucal."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <Information />
      <Mision />
      <Task />
      <Contact />
      <Booking />
      <Map />
      <ServiceCard />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </div>
  );
}

export default Bites;
