import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import imagenA from "../assets/Una sonrisa saludable solo necesita un blaqueamiento dental.png";
import imagenB from "../assets/Una sonrisa se ve espectacular despues de hacerse un blaqueamiento con los mejores en Bites Creadores de Sonrisas.png";

const Tema2: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="[&>h1]:text-pink-600 [&>h1]:text-3xl *:mb-4 [&>h2]:text-xl [&>p]:text-xl [&>ol]:text-xl [&>h1]:font-medium">
      <Helmet>
        <title>Descubre como obtener una sonrisa deslumbrante en Tijuana</title>
        <meta
          name="description"
          content="El blanqueamiento dental es uno de los tratamientos dentales estéticos más visibles Siéntete seguro de mostrarle a todos ese diseño de sonrisa"
        />
      </Helmet>

      <h1>{t("blog2.text1")}</h1>
      <h2>{t("blog2.text2")}</h2>

      <h1>{t("blog2.text3")}</h1>
      <h2>{t("blog2.text4")}</h2>
      <h2>{t("blog2.text5")}</h2>
      <h2>{t("blog2.text6")}</h2>
      <h2>{t("blog2.text7")}</h2>
      <h2>{t("blog2.text8")}</h2>
      <h2>{t("blog2.text9")}</h2>
      <h2>{t("blog2.text10")}</h2>
      <h2>{t("blog2.text11")}</h2>
      <h1>{t("blog2.text12")}</h1>
      <h2>{t("blog2.text13")}</h2>
      <h2>{t("blog2.text14")}</h2>
      <h2>{t("blog2.text15")}</h2>
      <h2>{t("blog2.text16")}</h2>
      <h1>{t("blog2.text17")}</h1>
      <h2>{t("blog2.text18")}</h2>
      <h2>{t("blog2.text19")}</h2>
      <div className="flex justify-center items-center mx-auto">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={imagenA}
              alt="Una sonrisa previa al blaqueamiento dental con Bites "
              title="Una sonrisa previa al blaqueamiento dental con Bites "
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={imagenB}
              alt="Una sonrisa espectacular después del blanqueamiento con Bites CS "
              title="Una sonrisa espectacular después del blanqueamiento con Bites CS "
            />
          }
        />
      </div>
      <h1>{t("blog2.text20")}</h1>
      <h2>{t("blog2.text21")}</h2>
      <h2>{t("blog2.text22")}</h2>
      <h2>{t("blog2.text23")}</h2>
      <h1>{t("blog2.text24")}</h1>
      <h2>{t("blog2.text25")}</h2>
      <h2>{t("blog2.text26")}</h2>
      <h1>{t("blog2.text27")}</h1>
      <h2>{t("blog2.text28")}</h2>
      <h2>{t("blog2.text29")}</h2>
      <h2>{t("blog2.text30")}</h2>
      <h2>{t("blog2.text31")}</h2>

      <footer className="flex justify-between items-center py-4 ">
        <a
          href="La-solución-para-una-sonrisa-ideal"
          className="px-8 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700"
        >
          Anterior blog
        </a>
        <a
          href="con-el-implante-dental-elévala-al-siguiente-nivel"
          className="px-8 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700"
        >
          Siguiente blog
        </a>
      </footer>
    </div>
  );
};

export default Tema2;
