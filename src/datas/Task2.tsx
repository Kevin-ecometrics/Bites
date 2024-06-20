import { useTranslation } from "react-i18next";

export const Serviciosesteticos = () => {
  const { t } = useTranslation();
  const taskInformation = [
    {
      image:
        "/Tonos mas blancos y radiantes solo con los expertos en bites.svg",
      title: t("blanqueamiento"),
      alt: "Dientes blancos sin sensibilidad solo se hacen en Bites",
      paragraph: t("blanqueamientotext"),
      number: 1,
      link: "/servicios/blanqueamiento",
    },
    {
      image: "/Una Sonrisa natural y atractiva es gracias a Bites.svg",
      title: t("carillas"),
      alt: "Las carillas hechas por Bites siempre son esteticas y funcionales",
      paragraph: t("carillastext"),
      number: 2,
      link: "/servicios/carillas",
    },
    {
      image:
        "/Bites are experts on Orthodontic treatments providing a warm treatment during the process.svg",
      title: t("coronas"),
      alt: "Enjoy your orthodontic treatmets with Bites Creadores de Sonrisas",
      paragraph: t("coronastext"),
      number: 3,
      link: "/servicios/coronas",
    },
    {
      image: "/icon8.svg",
      title: t("implantesdentales"),
      paragraph: t("implantesdentalestext"),
      number: 4,
      link: "/servicios/implantes-dentales",
    },
  ];

  return taskInformation;
};
