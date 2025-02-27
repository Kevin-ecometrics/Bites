import React from "react";
import { useTranslation } from "react-i18next";

const TerminosPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-[80%] md:w-[60%] md:py-8 py-4 [&>h1]:text-pink-600 text-xl [&>h1]:font-bold [&>h1]:text-2xl">
      <h1>{t("politicas.text1")}</h1>
      <p className="mb-6">{t("politicas.text2")}</p>

      <h1>{t("politicas.text3")}</h1>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text4")}</li>
        <li>{t("politicas.text5")}</li>
        <li>{t("politicas.text6")}</li>
        <li>{t("politicas.text7")}</li>
        <li>{t("politicas.text8")}</li>
      </ol>

      <h1>{t("politicas.text9")}</h1>
      <p className="mb-6">{t("politicas.text10")}</p>

      <h1>{t("politicas.text11")}</h1>
      <p className="mb-6">{t("politicas.text12")} </p>
      <ol className="list-decimal mb-4">
        <li> {t("politicas.text13")}</li>
        <li> {t("politicas.text14")}</li>
        <li> {t("politicas.text15")} </li>
      </ol>
      <p className="mb-6">{t("politicas.text16")}</p>
      <h1>{t("politicas.text17")} </h1>
      <p className="mb-6">{t("politicas.text18")}</p>
      <ol className="list-decimal mb-4">
        <li> {t("politicas.text19")} </li>
        <li> {t("politicas.text20")}</li>
        <li> {t("politicas.text21")}</li>
        <li> {t("politicas.text22")}</li>
      </ol>
      <h1>{t("politicas.text23")} </h1>
      <p className="mb-6">{t("politicas.text24")}</p>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text25")}</li>
        <li>{t("politicas.text26")} </li>
      </ol>
      <h1>{t("politicas.text27")} </h1>
      <p className="mb-6">{t("politicas.text28")}</p>
      <p className="mb-6">{t("politicas.text29")}</p>
      <ol className="list-decimal mb-4">
        <li> {t("politicas.text30")}</li>
        <li> {t("politicas.text31")}</li>
        <li>{t("politicas.text32")} </li>
        <li>{t("politicas.text33")}</li>
        <li> {t("politicas.text34")}</li>
        <li> {t("politicas.text35")}</li>
      </ol>
      <h1>{t("politicas.text36")}</h1>
      <p className="mb-6">{t("politicas.text37")}</p>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text38")}</li>
        <li>{t("politicas.text39")}</li>
        <li>{t("politicas.text40")} </li>
        <li>{t("politicas.text41")}</li>
      </ol>
      <h1>{t("politicas.text42")}</h1>
      <p className="mb-6">{t("politicas.text43")}</p>
      <p className="mb-6">{t("politicas.text44")}</p>
      <h1>{t("politicas.text45")}</h1>
      <p className="mb-6">{t("politicas.text46")}</p>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text47")}</li>
        <li>{t("politicas.text48")} </li>
        <li>{t("politicas.text49")}</li>
      </ol>
      <h1>{t("politicas.text50")}</h1>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text51")}</li>
        <li>{t("politicas.text52")} </li>
      </ol>
      <h1>{t("politicas.text53")}</h1>
      <p className="mb-6">{t("politicas.text54")}</p>
      <h1>{t("politicas.text55")}</h1>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text56")}</li>
        <li>{t("politicas.text57")}</li>
      </ol>
      <h1>{t("politicas.text58")}</h1>
      <p className="mb-6">{t("politicas.text59")}</p>
      <p className="mb-6"> {t("politicas.text60")}</p>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text61")}</li>
        <li>{t("politicas.text62")}</li>
      </ol>
      <h1>{t("politicas.text63")}</h1>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text64")}</li>
        <li>{t("politicas.text65")}</li>
        <li>{t("politicas.text66")}</li>
      </ol>
      <h1>{t("politicas.text67")}</h1>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text68")} </li>
        <li>{t("politicas.text69")}</li>
      </ol>
      <h1>{t("politicas.text70")}</h1>
      <p className="mb-6">{t("politicas.text71")}</p>
      <ol className="list-decimal mb-4">
        <li>{t("politicas.text72")}</li>
        <li>{t("politicas.text73")}</li>
      </ol>
    </div>
  );
};

export default TerminosPage;
