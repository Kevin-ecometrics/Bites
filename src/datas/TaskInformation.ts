import { useTranslation } from "react-i18next";

export const Servicioshigienistas = ()  => {

    const { t } = useTranslation();
    const taskInformation = [
    {
        // image: "/Con Bites manten tus encias saludables libres de cualquier enfermedad.svg",
        image: "/1.png",
        alt: "Bites te ayuda a eliminar problemas de sarro y placa con limpiezas dentales.",
        title: t("limpieza"),
        paragraph: t("limpiezatext"),
        number: 1,
        link: "/servicios/limpieza-dental"  
        
    },
    {
        // image: "/Fix any detail of your smile with resin with the experts on aesthetic dentistry.svg",
        image: "/2.png",
        title: t("resinas"),
        alt: "Our high quality of resign allows you to have a functional and beautiful smile",
        paragraph: t("resinastext"),
        number: 2,
        link: "/servicios/resinas"
    },
    {
        // image: "/Nuestros expertos en endodoncia alivian el dolor y restauran tu sonrisa.svg",
        image: "/3.png",
        title: t("endodoncia"),
        alt: "Una endodoncia con bites preserva tu salud oral y la estética general de tus dientes",
        paragraph: t("endodonciatext"),
        number: 3,
        link: "/servicios/endodoncia"
    },
    {
        // image: "/Smile with our hygienist services.svg",
        image: "/4.png",
        title: t("rehabilitacion"),
        alt: "Smile with our hygienist services",
        paragraph: t("rehabilitaciontext"),
         number: 4,
         link: "/servicios/rehabilitacion-oral"
    },
    
];

return taskInformation;
};