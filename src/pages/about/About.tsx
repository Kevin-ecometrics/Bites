import React, { useEffect, useState } from "react";
import FacebookWhite from "../../assets/icons/facebook_white.svg";
import InstagramWhite from "../../assets/icons/instagram_white.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import AboutImage from "../../assets/Hacemos veneers que luzcan naturales para resaltar tu belleza.png";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
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
            {t("about.title")}
          </h1>
          <h1 className="font-pompiere font-normal  text-white md:text-[#E72381] text-6xl text-center mb-4">
            {t("about.subtitle")}
          </h1>
          <p className="text-lg font-poppins font-normal px-8 mb-4 text-justify">
            {" "}
            {t("about.platicamos")}
          </p>
          <ul className="text-lg font-poppins font-normal px-8 text-justify list-disc list-inside mb-8">
            <li>{t("about.queremos")}</li>
            <li>{t("about.destino")}</li>
          </ul>
          <p className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            {t("about.cuidamos")}
          </p>
          <p className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            {t("about.creemos")}
          </p>
          <p className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {t("about.contamos")}
          </p>
          <p className="text-lg font-poppins font-normal px-8 mb-2 text-justify">
            {" "}
            {t("about.servicios")}
          </p>
          <ul className="text-lg font-poppins font-normal px-8 mb-8 text-justify list-inside list-disc">
            <li>{t("about.estetica")}</li>
            <li>{t("about.higienistas")}</li>
            <li>{t("about.ortodóncicos")}</li>
            <li> {t("about.oral")}</li>
            <li> {t("about.implantes")}</li>
          </ul>
        </div>
        <div className="md:my-32 flex justify-center items-center flex-col px-8">
          <img
            src={AboutImage}
            className="mb-8"
            alt="Nuestra misión es trasformar vidas a través de sonrisas saludables y radiantes que sean unicas como tu rostro "
            title="Nuestra misión es trasformar vidas a través de sonrisas saludables y radiantes que sean unicas como tu rostro "
          />
          <div className="flex justify-center items-center gap-8 mb-8">
            {isMobile ? (
              <>
                <img
                  src={InstagramWhite}
                  alt="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
                  title="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
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
                  alt="Give us a like on our Facebook page, we are the best option for dental design  "
                  title="Give us a like on our Facebook page, we are the best option for dental design  "
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
                  alt="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
                  title="No te pierdas de contenido, procedimientos de alta estética dental en nuestro Instagram bitescreadoresdesonrisas "
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
                  alt="Give us a like on our Facebook page, we are the best option for dental design  "
                  title="Give us a like on our Facebook page, we are the best option for dental design  "
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
