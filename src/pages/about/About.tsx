import React, { useEffect, useState } from "react";
import FacebookWhite from "../../assets/icons/facebook_white.svg";
import InstagramWhite from "../../assets/icons/instagram_white.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import AboutImage from "../../assets/about_image.png";
const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Actualizar isMobile cuando cambia el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el controlador de eventos cuando se desmonta el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url('/src/assets/background_about.png')`,
        backgroundPosition: "center top -180px",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="my-8 md:my-32 lg:w-[650px] sm:w-full">
          <h1 className="font-pompiere font-normal md:my-24 text-white md:text-[#E72381] text-6xl text-center mb-4">
            Hola ¡Bienvenido!
          </h1>
          <h1 className="font-pompiere font-normal  text-white md:text-[#E72381] text-6xl text-center mb-4">
            Conoce más acerca de Bites
          </h1>
          <p className="text-lg font-poppins font-normal px-8 mb-4 text-justify">
            {" "}
            Te platicaremos brevemente sobre nuestra misión en Bites Creadores
            de Sonrisas:
          </p>
          <ul className="text-lg font-poppins font-normal px-8 text-justify list-disc list-inside mb-8">
            <li>
              Queremos transformar vidas a través de sonrisas saludables y
              radiantes.
            </li>
            <li>
              Ser el destino por excelencia para transformar y cuidar tu salud
              dental.
            </li>
          </ul>
          <p className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            No solo cuidamos de tu sonrisa, sino que también te ofrecemos un
            servicio exclusivo que escucha tus necesidades de inicio a fin para
            que tu experiencia sea cómoda y placentera.
          </p>
          <p className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            Creemos que una sonrisa sana puede empoderar, mejorando
            significativamente la imagen de uno mismo e implementar una calidad
            de vida más elevada.
          </p>
          <p className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            Contamos con equipo de alta gama y personal dental profesional,
            aptos para todo tipo de procedimientos de una manera segura y
            eficaz.
          </p>
          <p className="text-lg font-poppins font-normal px-8 mb-2 text-justify">
            {" "}
            Nuestros servicios abarcan desde:
          </p>
          <ul className="text-lg font-poppins font-normal px-8 mb-8 text-justify list-inside list-disc">
            <li>
              Estética dental, cirugía y periodoncia, endodoncias y ortodoncia.
            </li>
            <li>
              Servicios higienistas como eliminación de caries y colocación de
              resinas.
            </li>
            <li>
              Tratamientos ortodóncicos para corregir la alineación dental.
            </li>
            <li>Rehabilitación oral de coronas.</li>
            <li>Implantes y prótesis removibles o totales.</li>
          </ul>
        </div>
        <div className="md:my-32 flex justify-center items-center flex-col px-8">
          <img src={AboutImage} className="mb-8" alt="" />
          <div className="flex justify-center items-center gap-8 mb-8">
            {isMobile ? (
              <>
                <img
                  src={InstagramWhite}
                  alt="Instagram"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/bitescreadoresdesonrisas/",
                      "_blank"
                    )
                  }
                />
                <img
                  src={FacebookWhite}
                  alt="Facebook"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/BitesCreadoresdeSonrisas",
                      "_blank"
                    )
                  }
                />
              </>
            ) : (
              <>
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/bitescreadoresdesonrisas/",
                      "_blank"
                    )
                  }
                />
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/BitesCreadoresdeSonrisas",
                      "_blank"
                    )
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
