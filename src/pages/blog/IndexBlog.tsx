import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import { sectionIds } from "./Links";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Navbar from "./Navbar";
import { useEffect } from "react";

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
  const location = useLocation();

  const currentSectionId = location.pathname.split("/").pop() || "";
  const currentIndex = sectionIds.indexOf(currentSectionId);

  // Reordenar las secciones: primero la actual, luego las mayores y finalmente las menores.
  const orderedSections = [
    sectionIds[currentIndex], // La sección actual
    ...sectionIds.slice(currentIndex + 1).reverse(), // Las mayores en orden inverso
    ...sectionIds.slice(0, currentIndex).reverse(), // Las menores en orden inverso
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section > div");
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = section.id;
        }
      });

      if (
        currentSectionId &&
        currentSectionId !== location.pathname.split("/").pop()
      ) {
        window.history.replaceState(null, "", `/blog/${currentSectionId}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <main>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Navbar />
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
      <FloatingWhatsApp
        phoneNumber="526633249611"
        accountName="Bites Creadores de Sonrisas"
        avatar="/whatsapp-icon.webp"
        chatMessage="Hola, ¿en qué puedo ayudarte?"
        allowClickAway
      />
      <Footer />
    </main>
  );
};

export default IndexBlog;
