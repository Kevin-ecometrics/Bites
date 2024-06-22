import React from "react";
import CardService from "./CardService";
import ImageService1 from "../assets/Composite veneers enhance your smile without shaving teeth.png";
import ImageService2 from "../assets/Dental implants the ambulatory procedure that guarantees a good-looking and healthy smile.png";
import ImageService3 from "../assets/Improve your self-confidence enjoy your smile with the top-rated dentist in Tijuana Bites Creadores de Sonrisas.png";
import { useTranslation } from "react-i18next";
const Service: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div className="flex justify-center items-center flex-col mt-12">
        <h1 className="font-normal font-poppins text-center text-3xl mb-6 text-pink-600">
          {t("obten")}
        </h1>
        <h3 className="text-black text-2xl text-center md:text-6xl px-2 font-normal font-pompiere">
          {t("encontrar")}
        </h3>
        <div className="flex flex-col gap-0 md:gap-4 md:flex-row">
          <CardService
            comments={t("card1")}
            hoverComments={t("card1text")}
            date="11 Mar, 2024  "
            image={ImageService1}
            alt="Composite veneers combine functionality and aesthetic  "
            url="/blog/La-solución-para-una-sonrisa-ideal"
          />
          <CardService
            comments={t("card2")}
            hoverComments={t("card2text")}
            date="25 Mar, 2024  "
            image={ImageService3}
            alt="Top rated dentist in Tijuana Bites heps you  to achieve your dream smile "
            url="/blog/Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental"
          />
          <CardService
            comments={t("card3")}
            hoverComments={t("card3text")}
            date="15 Abri, 2024  "
            image={ImageService2}
            alt="With Bites dental implants aren't intimidating anymore "
            url="/blog/con-el-implante-dental-elévala-al-siguiente-nivel"
          />
        </div>
      </div>
    </main>
  );
};

export default Service;
