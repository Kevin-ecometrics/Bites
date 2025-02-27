import React from "react";
import { useTranslation } from "react-i18next";

const TerminosPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto md:w-[70%] md:py-8 py-4 text-xl md:text-2xl px-8">
      <p className="mb-4">
        {t("terminos.text1")}
        <strong className="text-pink-600"> {t("terminos.text2")}</strong>{" "}
        {t("terminos.text3")}
      </p>
      <p className="mb-4">{t("terminos.text4")}</p>
      <p className="mb-4">{t("terminos.text5")}</p>
      <p className="mb-4">{t("terminos.text6")}</p>
      <p className="mb-4">
        {t("terminos.text7")}{" "}
        <strong className="text-pink-600 break-words ">
          {t("terminos.text8")}
        </strong>{" "}
        {t("terminos.text9")}
      </p>
    </div>
  );
};

export default TerminosPage;
