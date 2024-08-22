import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import imagenA from "../assets/A dental implant it's a procedure that requires an expert in odontology and aesthetic dentistry.png";
import imagenB from "../assets/Una sonrisa completa y sana permite que disfrutes del comer y hablar con libertad y comodidad.png";

const Tema3: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="[&>h1]:text-pink-600 [&>h1]:text-3xl *:mb-4 [&>h2]:text-xl [&>p]:text-xl [&>ol]:text-xl [&>h1]:font-medium">
      <Helmet>
        <title>
          Diseña tu sonrisa con el implante dental y elévala al siguiente nivel
        </title>
        <meta
          name="description"
          content="Te apoyamos a resolver las dudas más comunes sobre implantes dentales. Brindamos la solución para recuperar tu salud y te sientas empoderado"
        />
      </Helmet>
      <h1>{t("blog3.text1")}</h1>
      <h2>{t("blog3.text2")}</h2>
      <h2>{t("blog3.text3")}</h2>
      <h2>{t("blog3.text4")}</h2>
      <h2>{t("blog3.text5")}</h2>
      <h2>{t("blog3.text6")}</h2>
      <h1>{t("blog3.text7")}</h1>
      <h2>{t("blog3.text8")}</h2>
      <h2>{t("blog3.text9")}</h2>
      <h1>{t("blog3.text10")}</h1>
      <ol className="list-decimal">
        <li>{t("blog3.text11")}</li>
        <li>{t("blog3.text12")}</li>
        <li>{t("blog3.text13")}</li>
        <li>{t("blog3.text14")}</li>
        <li>{t("blog3.text15")}</li>
      </ol>
      <div className="flex justify-center items-center mx-auto">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={imagenA}
              alt="Dental implants improve your smile and an overall health  "
              title="Dental implants improve your smile and an overall health  "
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={imagenB}
              alt="Disfruta de buenos momentos con una sonrisa completa"
              title="Disfruta de buenos momentos con una sonrisa completa"
            />
          }
        />
      </div>
      <h1>{t("blog3.text16")}</h1>
      <h2>{t("blog3.text17")}</h2>
      <h2>{t("blog3.text18")}</h2>
      <h2>{t("blog3.text19")}</h2>
      <h2>{t("blog3.text20")}</h2>
      <h1>{t("blog3.text21")}</h1>
      <h2>{t("blog3.text22")}</h2>
      <h1>{t("blog3.text23")}</h1>
      <h2>{t("blog3.text24")}</h2>
      <h2>{t("blog3.text25")}</h2>
      <h2>{t("blog3.text26")}</h2>
      <h2>{t("blog3.text27")}</h2>
      <h1>{t("blog3.text28")}</h1>
      <h2>{t("blog3.text29")}</h2>
      <h2>{t("blog3.text30")}</h2>
      <h1>{t("blog3.text31")}</h1>
      <h2>{t("blog3.text32")}</h2>
      <h2>{t("blog3.text33")}</h2>
      <footer className="flex justify-between items-center py-4 ">
        <a
          href="Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental"
          className="px-8 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700"
        >
          Blog anterior
        </a>
        <a
          href="/"
          className="px-8 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700"
        >
          Regresar al inicio
        </a>
      </footer>
    </div>
  );
};

export default Tema3;
