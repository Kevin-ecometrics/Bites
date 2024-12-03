import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../../assets/Bites Creadores de Sonrisas transforma y cuida de tu salud dental.png"; // Importa useLocation
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import { sectionIds } from "./Links";

const IndexBlog: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate(); // Inicializa useNavigate
  const location = useLocation(); // Inicializa useLocation
  const [navShadow, setNavShadow] = useState(false);

  const handleScroll = () => {
    const sections = [
      document.getElementById("section1"),
      document.getElementById("section2"),
      document.getElementById("section3"),
      document.getElementById("section4"),
      document.getElementById("section5"),
      document.getElementById("section6"),
    ];

    sections.forEach((section, index) => {
      if (
        section &&
        section.getBoundingClientRect().top <= window.innerHeight / 2
      ) {
        setCurrentSection(index);
      }
    });
    setNavShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Cambia la URL sin recargar la página
    const sectionId = sectionIds[currentSection];
    navigate(`/blog/${sectionId}`, { replace: true });
  }, [currentSection, navigate]);

  useEffect(() => {
    // Desplaza la vista a la sección correspondiente cuando la URL contiene un ID de sección
    const sectionIdFromUrl = location.pathname.split("/").pop();
    if (sectionIdFromUrl) {
      const sectionIndex = sectionIds.indexOf(sectionIdFromUrl);
      if (sectionIndex !== -1) {
        document.getElementById(`section${sectionIndex + 1}`)?.scrollIntoView();
        setCurrentSection(sectionIndex);
      }
    }
  }, [location]); // Incluye location en las dependencias

  return (
    <main>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <nav
        className={`fixed top-0 w-full bg-white ${navShadow ? "z-10 shadow-2xl" : ""}`}
      >
        <div className="container mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="w-[250px] h-[150px]"
              alt="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite"
              title="En Bites Creadores de Sonrisas brindamos servicios de estética dental con veneers de porcelana o composite"
            />
          </Link>
        </div>
      </nav>
      <section className="container mx-auto px-20">
        <div id="section1" className="scroll-mt-32 mt-48">
          <Section1 />
        </div>
        <div className="scroll-mt-32 mt-48" id="section2">
          <Section2 />
        </div>
        <div className="scroll-mt-32 mt-48" id="section3">
          <Section3 />
        </div>
        <div className="scroll-mt-32 mt-48" id="section4">
          <Section4 />
        </div>
        <div className="scroll-mt-32 mt-48" id="section5">
          <Section5 />
        </div>
        <div className="scroll-mt-32 mt-48" id="section6">
          <Section6 />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default IndexBlog;
