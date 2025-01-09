import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FooterText from "../../components/FooterText";
import Booking from "../index/Booking";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import image1 from "../../assets/At bites CS be are believers of the positive impact of a healthy smile.png";
import image4 from "../../assets/Nuestros dentistas en Bites CS rehabilitan sonrisas para que esten saludables y luzcan radiantes.png";
import image5 from "../../assets/At Bites CS you will find affordable prices and spectacular results in teeth whitening treatments.jpg";
import image6 from "../../assets/We are bites Cs   qualified dentist team experienced in aesthetic dentistry near you.jpg";
import image7 from "../../assets/We are Bites CS with Personalized consultation and skilled dentistry that guides patients through the smile enhancement journey.jpg";
import image8 from "../../assets/Somos Bites CS queremos ser los aliados detras de tu sonrisaa, conoce nuestra cdontologia de alta  estetica.jpg";
import image9 from "../../assets/Veneers are custom-made shells that cover teeth to hide any imperfections    Book your dream smile with Bites CS.jpg";
import image10 from "../../assets/Bites CS Smile design considers your facial features to achieve a balanced smile.jpg";
import image11 from "../../assets/We are Bites CS we offer a personalized Plan treatments to achieve a balanced smile that complements the patient's facial structure and personality.jpg";
import image12 from "../../assets/We are Bites CS high-aesthetic dentistry center that offers Budget friendly Treatments in tijuana to boost confidence and enhance quality of life.jpg";
import image13 from "../../assets/Transform your smile and boost self-esteem with great prices in Tijuana at Bites CS.jpg";
import image14 from "../../assets/Resins are perfect for those who want a natural and subtle look get them done with Bites CS.png";
import image15 from "../../assets/Treat yourself with a smile design and enhance your features with the top-rated dentist at Bites CS.png";
import image16 from "../../assets/Bites CS Dental implants are the number one solution for missing teeth get your implants with experts in cosmetic dentistry.png";
import image17 from "../../assets/AT bites CS Preserve your bone and gums health with dental implants with the most qualified dentists in Tijuana.png";
import image18 from "../../assets/Endodoncia-Image1.webp";
import image19 from "../../assets/Endodoncia-Image2.webp";
import image20 from "../../assets/Ortodoncia-Image1.webp";
import image21 from "../../assets/Ortodoncia-Image2.webp";
const ServicesDinamic: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      name: "Limpieza-Dental",
      url: "limpieza-dental",
    },
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

  const images: { [key: string]: string[] } = {
    "limpieza-dental": [image1],
    endodoncia: [image18, image19],
    "rehabilitacion-oral": [image4],
    blanqueamiento: [image5],
    carillas: [image8],
    coronas: [image11],
    ortodoncia: [image20, image21],
    resinas: [image14],
    "implantes-dentales": [image15],
  };

  const sliders1: { [key: string]: string } = {
    "limpieza-dental": "",
    endodoncia: "",
    "rehabilitacion-oral": "",
    blanqueamiento: image6,
    carillas: image9,
    coronas: image12,
    ortodoncia: "",
    resinas: "",
    "implantes-dentales": image16,
  };

  const sliders2: { [key: string]: string } = {
    "limpieza-dental": "",
    endodoncia: "",
    "rehabilitacion-oral": "",
    blanqueamiento: image7,
    carillas: image10,
    coronas: image13,
    ortodoncia: "",
    resinas: "",
    "implantes-dentales": image17,
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

  let image;
  if (typeof id === "string") {
    image = images[id];
  }

  let slider1;
  if (typeof id === "string") {
    slider1 = sliders1[id];
  }

  let slider2;
  if (typeof id === "string") {
    slider2 = sliders2[id];
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
            <h4 className=" font-poppins font-normal text-xl mb-8 ">
              {title ? `${title}` : ""}
            </h4>
            <h3 className=" font-poppins text-xl mb-8 font-bold text-pink-600 ">
              {subtitle ? `${subtitle}` : ""}
            </h3>
            <h4 className=" font-poppins font-normal text-lg mb-8 ">
              {subtitle2 ? `${subtitle2}` : ""}
            </h4>
            <div className=" font-poppins font-normal flex gap-8 md:flex-row flex-col">
              {image?.map((img, index) =>
                img ? (
                  <img key={index} src={img} alt="" className="w-96" />
                ) : null
              )}
              {slider1 && slider2 && (
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage src={slider1} alt="Image one" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={slider2} alt="Image two" />
                  }
                />
              )}
            </div>
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
