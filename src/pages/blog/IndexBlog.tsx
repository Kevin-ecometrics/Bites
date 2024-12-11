import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../../assets/Bites Creadores de Sonrisas transforma y cuida de tu salud dental.png";
import Footer from "../../components/Footer";
import { sectionIds } from "./Links";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const sectionComponents: { [key: string]: React.FC } = {
  "La-solucion-para-una-sonrisa-ideal": Section1,
  "Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental":
    Section2,
  "Con-el-implante-dental-elevala-al-siguiente-nivel": Section3,
  "Remodela-tus-encias-luce-unos-dientes-mas-grandes-y-bellos-te-presentamos-la-gingivoplastia":
    Section4,
  "Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural":
    Section5,
  "Descubre-como-trasformamos-una-sonrisa-juvenil-a-una-sonrisa-sofisticada-La-Sonrisa-de-ensueno-disenada-para-armonizar-tu-rostro":
    Section6,
};

const IndexBlog: React.FC = () => {
  const [navShadow, setNavShadow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSectionId = location.pathname.split("/").pop() || "";
  const currentIndex = sectionIds.indexOf(currentSectionId);

  // Reordenar las secciones: primero la actual, luego las mayores y finalmente las menores.
  const orderedSections = [
    sectionIds[currentIndex], // La sección actual
    ...sectionIds.slice(currentIndex + 1).reverse(), // Las mayores en orden inverso
    ...sectionIds.slice(0, currentIndex).reverse(), // Las menores en orden inverso
  ];

  return (
    <main>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <nav
        className={`fixed top-0 w-full bg-white ${navShadow ? "z-10 shadow-2xl" : ""}`}
      >
        <div className="container mx-auto px-16">
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
      <section className="container mx-auto px-8 md:px-20 scroll-mt-32 mt-48">
        {orderedSections.map((id: string) => {
          const Component = sectionComponents[id];
          return (
            <div key={id} id={id} className="scroll-mt-32 mt-48">
              <Component />
            </div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
};

export default IndexBlog;
