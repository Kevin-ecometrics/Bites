import React from "react";
import Logo from "../../assets/At Bites Creadores de Sonrisas We prioritize your family comfort.png";
import Instagram from "../../assets/icons/Unete a la familia Bites Síguenos en Instagram para más contenido.svg";
import Facebook from "../../assets/icons/Find us in Facebook as Bites Creadores de Sonrisas.svg";
import MapMarker from "../../assets/icons/map.svg";
import Phone from "../../assets/icons/phone.png";
import Clock from "../../assets/icons/clock.png";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const locations = [
    {
      src: MapMarker,
      alt: "Map Marker",
      address: "Calle Frida Kahlo 10410-404 Tijuana, Mexico, 22010",
    },
    {
      src: Phone,
      alt: "663 324 9611",
      address: "663 324 9611",
      // No optionalText for the second location
    },
    {
      src: Clock,
      alt: "Lunes a Viernes 9:00 am - 6:00 pm",
      address: "09:00 am - 6:30 pm",
      optionalText: "09:00 am - 4:00 pm",
    },
    // Puedes agregar más objetos aquí si tienes más ubicaciones
  ];

  const footerLinks = [
    "Inicio",
    "Nosotros",
    "Galeria",
    "Contacto",
    "Servicios",
    "Terminos de Servicio",
    "Politica de Privacidad",
  ];
  const services = [
    "Limpieza-Dental",
    "Resinas",
    "Endodoncia",
    "Rehabilitacion-Oral",
    "Blanqueamiento",
    "Carillas",
    "Coronas",
    "Ortodoncia",
    "Implantes-Dentales",
  ];
  return (
    <main className="flex justify-center items-center relative">
      <footer
        style={{
          background:
            "linear-gradient(to top, #6BBAE9 0%, #6BBAE9 75%, white 75%, white 100%)",
        }}
        className="shadow  w-screen flex justify-center items-end"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-12 gap-12">
          <div className="rounded-tr-[100px] rounded-bl-[100px]  shadow-xl shadow-black bg-white w-80 h-[480px]">
            <div className="flex justify-center items-center">
              <img
                src={Logo}
                alt="Bites Creadores de Sonrisa it's a place carefully design for your comfort "
                title="Bites Creadores de Sonrisa it's a place carefully design for your comfort "
              />
            </div>
            {locations.map((location, index) => (
              <div key={index} className="flex gap-4 py-4 px-12">
                <img
                  src={location.src}
                  className="size-8 flex justify-center items-center"
                  alt={location.alt}
                />
                <div className="flex justify-center items-center flex-col gap-4 font-pompiere">
                  <span className="text-xl font-medium text-black dark:text-black">
                    {location.alt === "663 324 9611" ? (
                      <a
                        className="hover:text-blue-500"
                        href="https://wa.me/+526633249611/?text=Quiero obtener mas información sobre sus servicios."
                      >
                        {location.address}
                      </a>
                    ) : (
                      location.address
                    )}
                  </span>
                  {location.optionalText && (
                    <span className="text-xl font-medium text-black dark:text-black">
                      {location.optionalText}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center md:pt-40 flex-col">
            <a href="/#Booking">
              <motion.button
                whileHover={{
                  borderTopRightRadius: "2.5rem",
                  borderBottomLeftRadius: "2.5rem",
                  borderBottomRightRadius: "0rem",
                  borderTopLeftRadius: "0rem",
                }}
                transition={{ duration: 0.7 }}
                style={{ borderRadius: "1.5rem" }}
                className=" bg-[#FE81BD] px-8 py-4  text-white font-poppins font-normal hover:bg-[#f869ae]"
              >
                ¡Agenda una cita ahora!{" "}
              </motion.button>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-12">
              <div className="gap-8">
                <h1 className="text-white text-2xl py-8">Links Rapidos</h1>
                {footerLinks.map((link, index) => (
                  <a
                    href={link === "inicio" ? "/" : `/${link.toLowerCase()}`}
                    key={index}
                    className="text-lg font-medium hover:text-pink-400 flex justify-start items-start flex-col text-white dark:text-white"
                  >
                    {link}
                  </a>
                ))}
                <div className="flex justify-start my-4 md:my-12 items-start gap-8">
                  <a
                    href="https://www.instagram.com/bitescreadoresdesonrisas/"
                    target="_blank"
                  >
                    <img
                      src={Instagram}
                      className="size-7"
                      alt="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
                      title="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
                    />
                  </a>
                  <a
                    href="https://m.facebook.com/BitesCreadoresdeSonrisas"
                    target="_blank"
                  >
                    <img
                      src={Facebook}
                      className="size-7"
                      alt="Give us a like on our Facebook page, we are the best option for dental design  "
                      title="Give us a like on our Facebook page, we are the best option for dental design  "
                    />
                  </a>
                </div>
              </div>
              <div>
                <h1 className="text-white text-2xl md:py-8">Servicios</h1>
                {services.map((service, index) => (
                  <a
                    href={`/servicios/${service.toLowerCase()}`}
                    key={index}
                    className="text-lg font-medium hover:text-pink-400 flex justify-start items-start flex-col text-white dark:text-white"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="grid grid-cols-1 md:flex justify-center items-center md:justify-evenly">
            <div className="rounded-tr-3xl rounded-bl-3xl shadow-xl shadow-black bg-white w-80">
              <div className="flex justify-center items-center">
                <img src={Logo} alt="Bites Logo" />
              </div>
              {locations.map((location, index) => (
                <div key={index} className="flex gap-8 py-4 px-12">
                  <img
                    src={location.src}
                    className="size-8 flex justify-center items-center"
                    alt={location.alt}
                  />
                  <div className="flex justify-center items-center flex-col gap-4 font-pompiere">
                    <span className="text-xl font-medium text-black dark:text-black">
                      {location.address}
                    </span>
                    {location.optionalText && (
                      <span className="text-xl font-medium text-black dark:text-black">
                        {location.optionalText}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <Button
                name="Agenda una cita ahora!"
                className="bg-[#5C9BC0] text-white py-2 rounded-3xl hover:bg-[#5096be]"
              />
              <div className="flex justify-center items-center flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
                  <div>
                    <h1 className="text-white text-2xl">Links Rapidos</h1>
                    {footerLinks.map((link, index) => (
                      <a
                        href={`/${link.toLowerCase()}`}
                        key={index}
                        className="text-lg font-medium hover:text-blue-400 flex justify-start items-start flex-col text-white dark:text-white"
                      >
                        {link}
                      </a>
                    ))}
                    <div className="flex justify-start my-12 items-start gap-8">
                      <img src={Instagram} className="size-7" alt="" />
                      <img src={Facebook} className="size-7" alt="" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-2xl">Servicios</h1>
                    {services.map((service, index) => (
                      <a
                        href={`/${service.toLowerCase()}`}
                        key={index}
                        className="text-lg font-medium hover:text-blue-400 flex justify-start items-start flex-col text-white dark:text-white"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
          <span className="block font-normal font-poppins text-md text-white text-center dark:text-white">
            All rights reserved by Bites Creadores de Sonrisas 2024 ©.
            <a
              href="https://bitescreadoresdesonrisas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {" "}
              Bitescreadoresdesonrisas.com
            </a>{" "}
            is powered by
            <a
              href="https://ecommetrica.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {" "}
              ecommetrica.com
            </a>
          </span>
        </div> */}
      </footer>
    </main>
  );
};

export default Footer;
