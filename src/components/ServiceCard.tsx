import React, { useState } from "react";
import CardService from "./CardService";
import ImageService1 from "../assets/Composite veneers enhance your smile without shaving teeth.png";
import ImageService2 from "../assets/Dental implants the ambulatory procedure that guarantees a good-looking and healthy smile.png";
import ImageService3 from "../assets/Improve your self-confidence enjoy your smile with the top-rated dentist in Tijuana Bites Creadores de Sonrisas.png";
import { useTranslation } from "react-i18next";

const Service: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      comments: t("card1"),
      hoverComments: t("card1text"),
      date: "11 Mar, 2024",
      image: ImageService1,
      alt: "Composite veneers combine functionality and aesthetic",
      url: "/blog/La-solucion-para-una-sonrisa-ideal",
    },
    {
      comments: t("card2"),
      hoverComments: t("card2text"),
      date: "25 Mar, 2024",
      image: ImageService3,
      alt: "Top rated dentist in Tijuana Bites helps you to achieve your dream smile",
      url: "/blog/Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental",
    },
    {
      comments: t("card3"),
      hoverComments: t("card3text"),
      date: "15 Abr, 2024",
      image: ImageService2,
      alt: "With Bites dental implants aren't intimidating anymore",
      url: "/blog/Con-el-implante-dental-elevala-al-siguiente-nivel",
    },
    {
      comments:
        "Remodela tus encías luce unos dientes más grandes y bellos, te presentamos la gingivoplastia.",
      hoverComments:
        "Te compartimos el cambio increíble y natural de nuestra paciente con ayuda de una gingivoplastia combinada con un blanqueamiento dental y resinas para corregir detalles mínimos.",
      date: "26 Nov, 2024",
      image: "/blog4-card.webp",
      alt: "Remodela tus encías, luce unos dientes más grandes y bellos",
      url: "/blog/Remodela-tus-encias-luce-unos-dientes-mas-grandes-y-bellos-te-presentamos-la-gingivoplastia",
    },
    {
      comments: "Renueva tu sonrisa sin cirugía con carillas de porcelana",
      hoverComments:
        "En Este blog te presentamos el “behind the scenes” de una paciente cuya personalidad deseaba que se manifestara en una sonrisa resplandeciente llena de seguridad y felicidad.",
      date: "03 Dic, 2024",
      image: "/blog5-card.webp",
      alt: "Renueva tu sonrisa sin cirugía con carillas de porcelana en Bites Creadores de Sonrisas, tu transformación es radiante y natural",
      url: "/blog/Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural",
    },
    {
      comments:
        "Descubre como trasformamos una sonrisa juvenil a una sonrisa sofisticada: La Sonrisa de ensueño diseñada para armonizar tu rostro.",
      hoverComments:
        "Hoy nos gustaría que nos acompañaras a conocer como en nuestra clínica estética trasformamos la sonrisa de nuestra paciente con una sonrisa bella con un aspecto más juvenil, que buscaba tener una sonrisa con más proyección, elegante y sofisticada que reflejara tu seguridad y madurez.",
      date: "10 Dic, 2024",
      image: "/blog6-card.webp",
      alt: "Descubre cómo trasformamos una sonrisa juvenil a una sonrisa sofisticada. La Sonrisa de ensueño diseñada para armonizar tu rostro",
      url: "blog/Descubre-como-trasformamos-una-sonrisa-juvenil-a-una-sonrisa-sofisticada-La-Sonrisa-de-ensueno-disenada-para-armonizar-tu-rostro",
    },
  ].reverse(); // Invertir el array para mostrar del más reciente al más viejo

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < 3; i++) {
      visibleServices.push(services[(currentIndex + i) % services.length]);
    }
    return visibleServices;
  };

  return (
    <main>
      <div className="flex justify-center items-center flex-col mt-12">
        <h1 className="font-normal font-poppins text-center text-3xl mb-6 text-pink-600">
          {t("obten")}
        </h1>
        <h2 className="text-black text-2xl text-center md:text-6xl px-2 font-normal font-pompiere">
          {t("encontrar")}
        </h2>
        <div className="relative flex items-center justify-evenly w-full px-4">
          <button onClick={handlePrev} className="z-10 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#E72381]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width={64}
              height={64}
              strokeWidth={2}
            >
              {" "}
              <path d="M5 12l14 0"></path> <path d="M5 12l4 4"></path>{" "}
              <path d="M5 12l4 -4"></path>{" "}
            </svg>
          </button>
          <div className="md:flex flex-col gap-0 md:gap-8 md:flex-row hidden ">
            {getVisibleServices().map((service, index) => (
              <CardService
                key={index}
                comments={service.comments}
                hoverComments={service.hoverComments}
                date={service.date}
                image={service.image}
                alt={service.alt}
                url={service.url}
              />
            ))}
          </div>
          <div className="md:hidden flex-col gap-0 md:gap-4 md:flex-row flex ">
            {getVisibleServices()
              .slice(0, 1)
              .map((service, index) => (
                <CardService
                  key={index}
                  comments={service.comments}
                  hoverComments={service.hoverComments}
                  date={service.date}
                  image={service.image}
                  alt={service.alt}
                  url={service.url}
                />
              ))}
          </div>

          <button onClick={handleNext} className="z-10 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#E72381]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width={64}
              height={64}
              strokeWidth={2}
            >
              {" "}
              <path d="M5 12l14 0"></path> <path d="M15 16l4 -4"></path>{" "}
              <path d="M15 8l4 4"></path>{" "}
            </svg>{" "}
          </button>
        </div>
        <div className="md:hidden block">
          <div className="flex justify-center mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center ${
                  index === currentIndex
                    ? "bg-pink-600 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-[#6BBAE9] text-white font-poppins font-normal text-lg px-4 py-2 rounded-md mt-4 hover:opacity-80">
          <a href="/blog">Todos los blogs</a>
        </button>
      </div>
    </main>
  );
};

export default Service;
