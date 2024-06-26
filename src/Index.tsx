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
function Bites() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Information />
      <Mision />
      <Task />
      <Contact />
      <Booking />
      <Map />
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </div>
  );
}

export default Bites;
