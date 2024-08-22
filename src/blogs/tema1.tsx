import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import imagenA from "../assets/Un diseno de sonrisa es perfecto para sonrisas que buscan resultar.png";
import imagenB from "../assets/La doctora Anyi experta en estetica dental crea sonrisas que realzan tus facciones para que luzcan en armonia con tu belleza.png";

const Tema1: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="[&>h1]:text-pink-600 [&>h1]:text-3xl *:mb-4 [&>h2]:text-xl [&>p]:text-xl [&>ol]:text-xl [&>h1]:font-medium">
      <Helmet>
        <title>
          La solución para una sonrisa ideal son las carillas de composite
        </title>
        <meta
          name="description"
          content="Conoce el arte de la odontología estética en Bites CDS con las carillas de composite que hacen posible combinar la estética y la funcionalidad."
        />
      </Helmet>
      <h1>{t("blog1.text1")}</h1>
      <h2>{t("blog1.text2")}</h2>
      <h2>{t("blog1.text3")}</h2>
      <h2>{t("blog1.text4")}</h2>
      <h2>{t("blog1.text5")}</h2>
      <h1>{t("blog1.text6")}</h1>
      <ol className="list-decimal">
        <li>{t("blog1.text7")}</li>
        <li>{t("blog1.text8")}</li>
        <li>{t("blog1.text9")}</li>
        <li>{t("blog1.text10")}</li>
      </ol>
      <h2>{t("blog1.text11")}</h2>
      <h1>{t("blog1.text12")}</h1>
      <h2>{t("blog1.text13")}</h2>
      <h1>{t("blog1.text14")}</h1>
      <h2>{t("blog1.text15")}</h2>
      <h2>{t("blog1.text16")}</h2>
      <h2>{t("blog1.text17")}</h2>
      <h2>{t("blog1.text18")}</h2>
      <div className="flex justify-center items-center mx-auto">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={imagenA}
              alt="Un diseño de sonrisa corrige tu sonrisa haciendola mas grande, blanca y armoniosa "
              title="Un diseño de sonrisa corrige tu sonrisa haciendola mas grande, blanca y armoniosa "
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={imagenB}
              alt="resalta tu belleza e ilumina tu rostro  con la doctora anyi experta en estetica dental  "
              title="resalta tu belleza e ilumina tu rostro  con la doctora anyi experta en estetica dental  "
            />
          }
        />
      </div>

      <h1>{t("blog1.text19")}</h1>
      <h2>{t("blog1.text20")}</h2>
      <h2>{t("blog1.text21")}</h2>
      <h1>{t("blog1.text22")}</h1>
      <h2>{t("blog1.text23")}</h2>
      <h1>{t("blog1.text24")}</h1>
      <h2>{t("blog1.text25")}</h2>
      <h1>{t("blog1.text26")}</h1>
      <h2>{t("blog1.text27")}</h2>
      <h1>{t("blog1.text28")}</h1>
      <ol className="list-decimal">
        <li>{t("blog1.text29")}</li>
        <li>{t("blog1.text30")}</li>
        <li>{t("blog1.text31")}</li>
        <li>{t("blog1.text32")}</li>
        <li>{t("blog1.text33")}</li>
      </ol>
      <h1>{t("blog1.text34")}</h1>
      <h2>{t("blog1.text35")}</h2>
      <h1>{t("blog1.text36")}</h1>
      <h2>{t("blog1.text37")}</h2>
      <h1>{t("blog1.text38")}</h1>
      <h2>{t("blog1.text39")}</h2>
      <h2>{t("blog1.text40")}</h2>
      <h2>{t("blog1.text41")}</h2>
      <footer className="flex justify-between items-center py-4 ">
        <a
          href="/"
          className="px-8 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700"
        >
          Regresar al inicio
        </a>
        <a
          href="Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental"
          className="px-8 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700"
        >
          Siguiente blog
        </a>
      </footer>
    </div>
  );
};

export default Tema1;
