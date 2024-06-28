import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FooterText from "../../components/FooterText";
import Booking from "../index/Booking";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const ServicesDinamic: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    { name: "Limpieza-Dental", url: "limpieza-dental" },
    { name: "Endodoncia", url: "endodoncia" },
    { name: "Rehabilitacion-Oral", url: "rehabilitacion-oral" },
    { name: "Blanqueamiento", url: "blanqueamiento" },
    { name: "Carillas", url: "carillas" },
    { name: "Coronas", url: "coronas" },
    { name: "Ortodoncia", url: "ortodoncia" },
    { name: "Resinas", url: "resinas" },
    { name: "Implantes-Dentales", url: "implantes-dentales" },
  ];

  const { id } = useParams<{ id: string }>();

  const service = services.find((service) => service.url === id);

  const titles: { [key: string]: string } = {
    "limpieza-dental": t("services.DentalCleaningText1"),
    endodoncia: t("services.EndodonticsText1"),
    "rehabilitacion-oral": t("services.OralText1"),
    blanqueamiento: t("services.WhiteningText1"),
    carillas: t("services.VennerText1"),
    coronas: t("services.CrowText1"),
    ortodoncia:
      "Nuestro servicio de ortodoncia previene y corrige problemas de mordida, espacios entre dientes, desviaciones de mandíbula entre otros.",
    resinas: t("services.ResinText1"),
    "implantes-dentales": t("services.ImplantText"),
  };
  const subtitles: { [key: string]: string } = {
    "limpieza-dental": t("services.DentalCleaningText2"),
    endodoncia: t("services.EndodonticsText2"),

    "rehabilitacion-oral": "",
    blanqueamiento: t("services.WhiteningText2"),
    carillas: t("services.VennerText2"),
    coronas: t("services.CrowText2"),
    ortodoncia:
      "Gracias a nuestros procedimientos logramos corregirlos, proporcionarte funcionalidad y mejorar tu estética facial, a su vez te instruimos a una buena práctica de higiene bucal con una explicación detallada y un seguimiento puntual y de eficiencia donde veas resultados progresivos. ",
    resinas: t("services.ResinText2"),
    "implantes-dentales": "",
  };

  const subtitles2: { [key: string]: string } = {
    "limpieza-dental": t("services.DentalCleaningText3"),
    endodoncia: t("services.EndodonticsText3"),
    "rehabilitacion-oral": "",
    blanqueamiento: t("services.WhiteningText3"),
    carillas: t("services.VennerText3"),
    coronas: t("services.CrowText3"),
    ortodoncia: "",
    resinas: t("services.ResinText3"),
    "implantes-dentales": "",
  };

  let title;
  if (typeof id === "string") {
    title = titles[id];
  }

  let subtitle;
  if (typeof id === "string") {
    subtitle = subtitles[id];
  }

  let subtitle2;
  if (typeof id === "string") {
    subtitle2 = subtitles2[id];
  }

  return (
    <main>
      <Helmet>
        <title>{service ? t(service.name) : t("serviceNotFound")}</title>
        <meta
          name="description"
          content={title ? `${title}` : "Servicio no encontrado"}
        />
      </Helmet>
      <Navbar />
      <Hero title={service ? t(service.name) : t("serviceNotFound")} />
      <section className="md:py-32 md:px-24">
        <article className="flex gap-8">
          <div className="w-3/12 px-4 hidden md:block ">
            <h1 className="text-[#E72381] text-3xl font-normal font-poppins">
              {t("services.services")}
            </h1>
            <ul>
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`text-base font-normal font-poppins ${id === service.url ? "text-blue-500" : "text-[#E72381]"}`}
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
                  } else if (e.target.value === "servicios") {
                    window.location.href = "/servicios";
                  }
                }}
              >
                <option value="">Listado de servicios</option>
                {services.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name}
                  </option>
                ))}
                <option value="servicios">Regresar a servicios</option>
              </select>
            </div>
            <h4 className="text-2xl mb-8 text-justify">
              {title ? `${title}` : ""}
            </h4>
            <h3 className="text-2xl mb-8 font-bold text-pink-600 text-justify">
              {subtitle ? `${subtitle}` : ""}
            </h3>
            <h4 className="text-2xl mb-8 text-justify">
              {subtitle2 ? `${subtitle2}` : ""}
            </h4>
          </div>
        </article>
        <Booking />
      </section>
      <Footer />
      <FooterText className="bg-[#FE81BD]" hoverColor="hover:text-blue-400" />
    </main>
  );
};

export default ServicesDinamic;
