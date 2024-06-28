import React from "react";
import { useTranslation } from "react-i18next";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { name: "Limpieza-Dental", url: "/servicios/limpieza-dental" },
    { name: "Endodoncia", url: "/servicios/endodoncia" },
    { name: "Rehabilitación-Oral", url: "/servicios/rehabilitacion-oral" },
    { name: "Blanqueamiento", url: "/servicios/blanqueamiento" },
    { name: "Carillas", url: "/servicios/carillas" },
    { name: "Coronas", url: "/servicios/coronas" },
    { name: "Ortodoncia", url: "/servicios/ortodoncia" },
    { name: "Resinas", url: "/servicios/resinas" },
    { name: "Implantes-Dentales", url: "/servicios/implantes-dentales" },
  ];

  return (
    <main className="md:py-32 md:px-24">
      <article className="flex gap-8">
        <div className="w-3/12 px-4 hidden md:block">
          <h1 className="text-[#E72381] text-3xl font-normal font-poppins">
            {t("services.services")}
          </h1>
          <ul>
            {services.map((service, index) => (
              <li
                key={index}
                className="text-[#E72381] text-base font-normal font-poppins"
              >
                <a className="hover:text-blue-500" href={service.url}>
                  {t(service.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-2/4 px-4">
          <div className="block md:hidden py-4">
            <select
              className="w-full bg-[#E72381] text-white font-poppins font-normal text-lg rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              onChange={(e) => {
                const selectedService = services.find(
                  (service) => service.name === e.target.value
                );
                if (selectedService) {
                  window.location.href = selectedService.url;
                }
              }}
            >
              <option value="">Listado de servicios</option>
              {services.map((service, index) => (
                <option key={index} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <h1 className="text-2xl mb-8 text-justify">
            {t("services.serviceText1")}
          </h1>
          <h3 className="text-lg text-justify mb-8">
            {t("services.serviceText2")}
          </h3>
          <h2 className="mb-4 text-lg">{t("services.serviceText3")}</h2>
          <h4 className="mb-4 text-lg">{t("services.serviceText4")}</h4>
        </div>
      </article>
    </main>
  );
};

export default ServicesSection;
