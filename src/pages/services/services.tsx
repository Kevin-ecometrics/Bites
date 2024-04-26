import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    { name: "Limpieza Dental", url: "/services/limpieza-dental" },
    { name: "Endodoncia", url: "/services/endodoncia" },
    { name: "Rehabilitación Oral", url: "/services/rehabilitacion-oral" },
    { name: "Blanqueamiento", url: "/services/blanqueamiento" },
    { name: "Carillas", url: "/services/carillas" },
    { name: "Coronas", url: "/services/coronas" },
    { name: "Ortodoncia", url: "/services/ortodoncia" },
    { name: "Resinas", url: "/services/resinas" },
  ];

  return (
    <main className="md:py-32 md:px-24">
      <article className="flex gap-8">
        <div className="w-3/12 px-4">
          <h1 className="text-[#E72381] text-3xl font-normal font-poppins">
            Servicios
          </h1>
          <ul>
            {services.map((service, index) => (
              <li
                key={index}
                className="text-[#E72381] text-base font-normal font-poppins"
              >
                <a className="hover:text-blue-500" href={service.url}>{service.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/4 px-4">
          <h1 className="text-2xl mb-24 text-justify">
            En Bites Creadores de Sonrisas, nos enorgullece ofrecer una variedad
            de servicios estéticos de alta calidad diseñados para mejorar la
            apariencia y funcionalidad de tu sonrisa
          </h1>
          <p className="text-lg text-justify">
            ¡Descubre cómo Bites Creadores de Sonrisas puede hacer que tu viaje
            dental sea cómodo, agradable y transformador!
          </p>
        </div>
      </article>
    </main>
  );
};

export default ServicesSection;
