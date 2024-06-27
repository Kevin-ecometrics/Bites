import { useState } from "react";
import info1 from "../../assets/Area de trabajo amplia y esterilizada para aplicar tus veeners.png";
import info2 from "../../assets/Top cleaning Protocols guarantee your well-being.png";
import Play from "../../assets/icons/Play.svg";
import diente from "../../assets/icons/diente.svg";
import diente2 from "../../assets/icons/diente2.svg";
import check from "../../assets/icons/check.svg";
import { useTranslation } from "react-i18next";
export const Information = (): JSX.Element => {
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    setPlaying(true);
  };

  const closeModal = () => {
    setPlaying(false);
  };

  const { t } = useTranslation();

  return (
    <main className="w-[80%] mx-auto">
      <div className="bg-[#6BBAE9] rounded-b-[30px]">
        <h1 className="text-white flex justify-center items-center text-3xl px-8 text-center md:text-6xl py-4 font-pompiere ">
          {t("nuestrotrabajo")}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 px-8 py-8 ">
        <div className="">
          <img
            src={info1}
            className="translate-x-0 xl:translate-x-36 w-96"
            alt="En Bites Nos aseguramos de preparar todo lo necesario en nuestro espacio para que tu visita sea agradable. "
            title="En Bites Nos aseguramos de preparar todo lo necesario en nuestro espacio para que tu visita sea agradable. "
          />
          <img
            src={info2}
            className="hidden lg:block translate-x-[-60px] translate-y-[-170px] absolute"
            alt="We follow rigorous protocols to provide you and your family the best dental services  "
            title="We follow rigorous protocols to provide you and your family the best dental services  "
          />
          <div className="size-32 absolute bg-gradient-to-l from-pink-600 via-pink-400 to-blue-400 translate-x-24 translate-y-[-230px] md:translate-x-[260px] md:translate-y-[-280px] lg:translate-x-40 lg:translate-y-[-200px]  rounded-full flex items-center justify-center">
            <img
              onClick={playVideo}
              className="size-16 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src={Play}
              alt={Play}
            />
          </div>
          <div className="flex gap-4 lg:justify-start justify-center items-center py-4 lg:py-0 lg:translate-x-72 lg:translate-y-[100px]">
            <a href="/galeria">
              <img
                src={diente2}
                className="size-16 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500"
              />
            </a>
            <a
              className="bg-blue-400 hover:bg-blue-500 rounded-xl block md:block lg:hidden xl:block text-white font-poppins font-light p-4"
              href="https://wa.me/+526633249611/?text=Quiero obtener mas información sobre sus servicios."
              target="_blank"
            >
              {t("contactanos")}
            </a>
          </div>
          {playing && (
            <div
              className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
              onClick={closeModal}
            >
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/948822686?h=aebb1bba75"
                width="640"
                height="560"
              ></iframe>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <div className="text-justify py-1">
            <h2 className="text-pink-600 text-center lg:text-start text-lg md:text-2xl font-normal font-poppins mb-4">
              {t("labor")}
            </h2>

            <div className="text-black text-4xl font-normal font-poppins mb-2">
              <h1 className="font-pompiere text-3xl md:text-5xl text-center lg:text-start py-2">
                {t("bites")}
              </h1>
            </div>
            <div className="flex gap-8 my-4 ">
              <img
                src={diente}
                className="size-16 px-2 rounded-2xl hidden md:block"
              />
              <h4 className=" text-black md:text-2xl mb-2 font-normal font-poppins">
                {t("bienvenido")}
              </h4>
            </div>
            <h4 className=" text-black md:text-2xl mb-4 font-normal font-poppins">
              {t("bienvenido2")}
            </h4>
            <h4 className="text-black md:text-2xl text-start font-normal font-poppins mb-8">
              {t("ofrecemos")}
            </h4>
            <div className="flex justify-center lg:justify-start gap-6 mt-2 mb-3">
              <img src={check} alt="" />
              <h4>{t("obtensonrisa")}</h4>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-3">
              <img src={check} alt="" />
              <h4>{t("equipodental")}</h4>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-3">
              <img src={check} alt="" />
              <h4>{t("servicioexclusivo")}</h4>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-3">
              <img src={check} alt="" />
              <h4>{t("desdecarillas")}</h4>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-3">
              <img src={check} alt="" />
              <h4>{t("tratamientosavanzados")}</h4>
            </div>
            <div className="flex justify-center items-center lg:justify-start">
              <a
                href="/servicios"
                className="text-white text-lg py-4 px-12 hover:bg-pink-500 my-8 rounded-xl font-bold font-poppins bg-[#FF77B8]"
              >
                {t("vermas")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center">
        <h2 className="text-7xl font-semibold font-pompiere text-pink-500 text-center mb-2">
          1868{" "}
        </h2>
        <h2 className="mt-3 text-black text-lg md:text-3xl font-light font-poppins mb-8 text-center">
          {t("pacientessonrisa")}
        </h2>
        <h3 className="text-xl font-normal text-center font-poppins text-pink-500 mb-4">
          {t("contamos")}
        </h3>
        <h2 className="mt-3 text-black text-lg md:text-5xl font-normal font-poorstory mb-6">
          {t("esteticapersonalizada")}
        </h2>
      </div>
    </main>
  );
};

export default Information;
