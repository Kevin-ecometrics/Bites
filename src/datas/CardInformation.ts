import { useTranslation } from "react-i18next";
import image from "../assets/At bites we use the state-of-the-art tools to perform excellet results.png";
import image2 from "../assets/Puedes tu cita dental de forma online facil y rapido.png";
import image3 from "../assets/Bites Creadores de Sonrisas only uses top quality materials on your teeth.png";

export const useCardData = () => {
  const { t } = useTranslation();

  const dataCard = [
    {
      image: image,
      title: t("altatecnologia"),
      alt: "At Bites we perform our procedures with high-end tools",
      paragraph: "consecteturLorem ipsum dolor sit amet consectetur"
    },
    {
      image: image2,
      title: t("agendadigital"),
      alt: "En bites puedes agendar facil tu decides el dia y hora para comenzar",
      paragraph: "consecteturLorem ipsum dolor sit amet consectetur"
    },
    {
      image: image3,
      title: t("materiales"),
      alt: "The top-quality materials on your teeth will last and perform for years",
      paragraph: "consecteturLorem ipsum dolor sit amet consectetur"
    }
  ];

  return dataCard;
};