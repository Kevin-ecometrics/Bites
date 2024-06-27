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
          <h3 className="font-pompiere font-normal md:my-24 text-black text-6xl text-center mb-4">
            {t("about.title")}
          </h3>
          <h1 className="font-pompiere font-normal  text-black md:text-[#E72381] text-6xl text-center mb-8">
            {t("about.subtitle")}
          </h1>
          <h2 className="font-pompiere font-normal  text-black text-4xl text-center mb-4">
            {t("about.subtitle2")}
          </h2>
          <h3 className="text-lg font-poppins font-normal px-8 mb-4 text-justify">
            {" "}
            {t("about.platicamos")}
          </h3>
          <ul className="text-lg font-poppins font-normal px-8 text-justify list-disc list-inside mb-8">
            <li>{t("about.queremos")}</li>
            <li>{t("about.destino")}</li>
          </ul>
          <h4 className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            {t("about.cuidamos")}
          </h4>
          <h4 className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {" "}
            {t("about.creemos")}
          </h4>
          <h4 className="text-lg font-poppins font-normal px-8 mb-8 text-justify">
            {t("about.contamos")}
          </h4>
          <h2 className="text-lg font-poppins font-normal px-8 mb-2 text-justify">
            {" "}
            {t("about.servicios")}
          </h2>
          <ul className="text-lg font-poppins font-normal px-8 mb-8 text-justify list-inside list-disc">
            <li>{t("about.estetica")}</li>
            <li>{t("about.higienistas")}</li>
            <li>{t("about.ortodóncicos")}</li>
            <li> {t("about.oral")}</li>
            <li> {t("about.implantes")}</li>
          </ul>
          <div className="flex justify-center items-center lg:justify-start px-8">
            <a
              href="/servicios"
              className="text-white text-lg py-4 px-12 hover:bg-pink-500 my-8 rounded-xl font-bold font-poppins bg-[#FF77B8]"
            >
              {t("vermas")}
            </a>
          </div>
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
