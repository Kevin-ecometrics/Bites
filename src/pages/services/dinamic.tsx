import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FooterText from "../../components/FooterText";
import Booking from "../index/Booking";
import { useTranslation } from "react-i18next";

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
  const titles: { [key: string]: string } = {
    "limpieza-dental":
      "Nuestros servicios de limpieza dental eliminan placa y sarro, promoviendo encías saludables y previniendo problemas dentales, asegurando que cada limpieza sea un paso hacia una sonrisa que no solo brilla, sino que también refleja una salud óptima.",
    endodoncia:
      "Nuestros expertos en endodoncia utilizan técnicas avanzadas para preservar la salud dental y restaurar la funcionalidad de tus dientes. Descubre cómo la endodoncia en Bites es más que un tratamiento, es una revitalización dental. ",
    "rehabilitacion-oral":
      "Nuestros especialistas logran resultados impresionantes mediante diferentes procedimientos integrales de acuerdo con lo que necesites, puede ser mediante: Prótesis, estas pueden ser fijas o removibles; realizamos de la misma manera alineamiento de mordida e implantes dentales.",
    blanqueamiento:
      "Nuestro servicio de blanqueamiento  es de los tratamientos más rápidos y no invasivos que mejora gradualmente la apariencia de tus dientes que padecen de oscurecimiento y manchas amarillas. ",
    carillas:
      "En Bites somos reconocidos por nuestras carillas, somos expertos en el diseño y aplicación de carillas de composite o porcelana que, además de restaurar y modificar la estructura de tus dientes, te proporcionan un aspecto estético increíble, empoderándote a sonreír más que nunca. ",
    coronas:
      "Es unos de los servicios más populares en restauración si tus dientes tienen cavidades grandes, o se encuentra desgastado o solamente te gustaría mejorar su apariencia.",
    ortodoncia:
      "Nuestro servicio de ortodoncia previene y corrige problemas de mordida, espacios entre dientes, desviaciones de mandíbula entre otros.",
    resinas:
      "Las resinas mejoran la apariencia de las grietas y astillados de tus dientes, así como cavidades, te ayuda a protegerlos de la hipersensibilidad al consumir alimentos fríos o calientes, por medio de este procedimiento nuestros expertos restauran tus dientes frontales y premolares dándoles un acabado altamente estético y funcional. ",
    "implantes-dentales":
      "Los implantes dentales restauran tu sonrisa evitando que el hueso de tu mandíbula se absorba cuando has perdido uno o varios dientes. Pueden ser de diferentes materiales los más populares son: Titanio y zirconio pueden ir en la parte superior o inferior de tus hueso maxilar  ",
  };
  const subtitles: { [key: string]: string } = {
    "limpieza-dental": "",
    endodoncia: "",
    "rehabilitacion-oral":
      "Nos encargamos de restaurar áreas dañadas, para recuperar de forma estética la capacidad de comer, hablar y sonreír de la forma más espectacular posible.",
    blanqueamiento:
      "Logrando aclarar y dar la apariencia de dientes luminosos, más sanos y con uniformidad desde la primera sesión. Anímate a realizarte este procedimiento en manos de nuestros expertos.",
    carillas: "",
    coronas:
      "Te aplicamos coronas dentales que son prótesis que nos permite cubrir y proteger el diente afectado, para recuperar su forma, darle más resistencia y mejorar su apariencia en general. ",
    ortodoncia:
      "Gracias a nuestros procedimientos logramos corregirlos, proporcionarte funcionalidad y mejorar tu estética facial, a su vez te instruimos a una buena práctica de higiene bucal con una explicación detallada y un seguimiento puntual y de eficiencia donde veas resultados progresivos. ",
    resinas: "",
    "implantes-dentales":
      "Es un proceso que se realiza por etapas con tiempo de curación entre cada procedimiento ya que el primer paso es una revisión exhaustiva posterior a la colocación, una vez puesto el implante y que este se fusione con el hueso de la mandíbula se hace la colocación del pilar para finalizar con la colocación de la corona ",
  };

  let title;
  if (typeof id === "string") {
    title = titles[id];
  }

  let subtitle;
  if (typeof id === "string") {
    subtitle = subtitles[id];
  }

  return (
    <main>
      <Navbar />
      <Hero title={id} />
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
            <h1 className="text-2xl mb-8 text-justify">
              {title ? `${title}` : "Servicio no encontrado"}
            </h1>
            <h2 className="text-2xl mb-24 text-justify">
              {subtitle ? `${subtitle}` : ""}
            </h2>
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
