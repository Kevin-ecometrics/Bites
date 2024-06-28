import "photoswipe/dist/photoswipe.css";
import foto1 from "../assets/Top rated dental treatments in Mexico with great technical detail.png";
import foto5 from "../assets/At Bites We work with passionate and well prepare hygienists and cosmetic dentists.webp";
import foto2 from "../assets/Our mission at is to provide you with warm and comprehensive treatment.jpeg";
import foto8 from "../assets/Veneers de porcelana vs Veneers de composite en bites te ayudamos a decidir.webp";
import foto4 from "../assets/Contamos con equipo de alta gama para crear tu Veneers.webp";
import foto11 from "../assets/Top cleaning Protocols guarantee your well-being.png";
import foto7 from "../assets/Area de trabajo amplia y esterilizada para aplicar tus veeners.png";
import foto3 from "../assets/Somos una clinica especializada en diseno de sonrisa.webp";
import foto9 from "../assets/Meet the Bites  team ready to create a smile.webp";
import foto10 from "../assets/Nuestros implantes dentales te garantizaran una sonrisa bella.webp";
import foto6 from "../assets/The smile wall is a proof of our happy customers.webp";
import foto12 from "../assets/Doctor anyi Manchola is passionate about creating smiles.webp";
import foto13 from "../assets/Conoce nuestras comodas y amplias instalaciones pensadas en ti.webp";
import foto14 from "../assets/Conoce a la doctora Anyi comprometida a crear tu sonrisa soñada.webp";
import foto15 from "../assets/Book your appointment for a new smile with veneers.webp";
import foto16 from "../assets/You can book now on bitesCreadoresde Sonrisas.com.webp";
import foto17 from "../assets/We are bites rated high-aesthetic dentistry center in tijuana.webp";
import foto18 from "../assets/Vive la exclusividad y atencion calida en la mejor clinica de odontologia de alta estetica en tijuana.webp";
import foto19 from "../assets/Teeth whitening treatment near you at bites CS in Tijuana.webp";
import foto20 from "../assets/Lesly the manager at Bites CS is best known for her warm and professional treatment with patients.webp";
import foto21 from "../assets/El diseño de sonrisa mas increible esta hecho por Bites Creadores de Sonrisa.webp";

import { Gallery, Item } from "react-photoswipe-gallery";
import { useTranslation } from "react-i18next";

const BentoGrid: React.FC = () => {
  const { t } = useTranslation();
  const photos = [
    {
      src: foto1,
      width: 512,
      height: 512,
      id: "The specialist Anyi Manchola makes high- detail procedures with delicacy and precision to improve   function and beauty of your teeth  ",
    },
    {
      src: foto3,
      width: 512,
      height: 512,
      id: "Somos una clínica especializada en diseño de sonrisa con procedimientos no invasivos con técnicas y equipo de primer nivel en Tijuana ",
    },
    {
      src: foto2,
      width: 512,
      height: 812,
      id: "At Bites We humanize, sensitize and listen to your needs and expectations in this dental journey  ",
    },
    {
      src: foto4,
      width: 512,
      height: 512,
      id: "instalaciones de alta gama que te haran sentir lo cómodo durante tus procedimientos de estética dental ",
    },
    {
      src: foto5,
      width: 512,
      height: 812,
      id: "Every Bites team member is ready to provide you the best experience  ",
    },
    {
      src: foto7,
      width: 512,
      height: 812,
      id: "En Bites Nos aseguramos de preparar todo lo necesario en nuestro espacio para que tu visita sea agradable. ",
    },
    {
      src: foto8,
      width: 512,
      height: 812,
      id: "En bites te guiamos a elegir lo mejor para tu sonrisa, ya sea carillas de porcelana o carillas de composite  ",
    },
    {
      src: foto6,
      width: 512,
      height: 512,
      id: "Thousands of smiles we created in Bites Creadores de Sonrisas ",
    },
    {
      src: foto12,
      width: 612,
      height: 512,
      id: "Anyi Manchola is a expert in veneers, one of her mission its making s",
    },
    {
      src: foto10,
      width: 512,
      height: 812,
      id: "En bites hacemos una exhaustiva tarea para crear el mejor plan para tu sonrisa y nuestros implantes son un plan de largo plazo bello y funcional  ",
    },
    {
      src: foto11,
      width: 512,
      height: 812,
      id: "We follow rigorous protocols to provide you and your family the best dental services  ",
    },
    {
      src: foto9,
      width: 512,
      height: 512,
      id: "Dentist Anyi Manchola and Leslie await you with open arms to help you create your ideal smile",
    },
    {
      src: foto13,
      width: 812,
      height: 612,
      id: "Diseñamos una sala de estar y consultorio pensando en tus necesidades y comodidad para que te sientas en confianza",
    },
    {
      src: foto14,
      width: 512,
      height: 812,
      id: "Conoce a la doctora Anyi especializada en Odontología de alta estética, comprometida a crear tu sonrisa ideal ",
    },
    {
      src: foto15,
      width: 512,
      height: 812,
      id: "We are best known for our veneers, book your appointment today to enjoy a new smile  ",
    },
    {
      src: foto16,
      width: 512,
      height: 812,
      id: "Your dental appointment  just one click away, book now on bitescreadores desonrisas.com ",
    },
    {
      src: foto17,
      width: 512,
      height: 812,
      id: "Your dental appointment  just one click away, book now on bitescreadores desonrisas.com ",
    },
    {
      src: foto18,
      width: 512,
      height: 812,
      id: "En bites vive la exclusividad y atención calida somos la mejor clínica de odontología de alta estética en Tijuana  ",
    },
    {
      src: foto19,
      width: 512,
      height: 812,
      id: "Get your teeth whitening treatment with the experts at Bites CS  we are near you in Tijuana  ",
    },
    {
      src: foto20,
      width: 512,
      height: 812,
      id: "Professional and warm dental treatments only with Bites, our team is ready to help you in your smile journey  ",
    },
    {
      src: foto21,
      width: 512,
      height: 812,
      id: "En bites nuestros expertos en diseño de sonrisa harán de tu sonrisa una obra de arte increíble ",
    },
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: "rgba(231, 35, 129, 0.7)" }}
    >
      <div className="md:mx-48 my-32 z-10">
        <div className="py-8 text-white">
          <h1 className="text-3xl text-center mb-4">{t("gallery.title")}</h1>
          <h2 className="text-2xl text-center mb-8">
            {t("gallery.subtitle")}
            <a
              href="https://www.instagram.com/bitescreadoresdesonrisas/"
              target="_blank"
              className="hover:text-blue-500"
            >
              {" "}
              {t("gallery.Instagram")}{" "}
            </a>
            {t("gallery.and")}
            <a
              href="https://www.facebook.com/BitesCreadoresdeSonrisas"
              target="_blank"
              className="hover:text-blue-500"
            >
              {" "}
              {t("gallery.Facebook")}
              {""}
            </a>
          </h2>
        </div>

        <div className="grid grid-cols-1 h-full md:grid-cols-3 gap-4">
          <Gallery id="my-gallery" withCaption>
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`rounded-xl ${
                  i === 0
                    ? "row-span-2"
                    : i === 1
                      ? "row-span-1"
                      : i === 2
                        ? "row-span-2"
                        : i === 3
                          ? "row-span-1"
                          : i === 4
                            ? "row-span-1"
                            : i === 5
                              ? "row-span-2"
                              : i === 6
                                ? "row-span-1"
                                : i === 7
                                  ? "row-span-2"
                                  : i === 8
                                    ? "row-span-2"
                                    : i === 9
                                      ? "row-span-2"
                                      : i === 10
                                        ? "row-span-2"
                                        : i === 11
                                          ? "row-span-2"
                                          : i === 12
                                            ? "row-span-2"
                                            : i === 13
                                              ? "row-span-2"
                                              : i === 14
                                                ? "row-span-2"
                                                : i === 15
                                                  ? "row-span-2"
                                                  : i === 16
                                                    ? "row-span-2"
                                                    : i === 17
                                                      ? "row-span-2"
                                                      : i === 18
                                                        ? "row-span-2"
                                                        : "row-span-1"
                }`}
              >
                <Item
                  original={photo.src}
                  thumbnail={photo.src}
                  width={photo.width}
                  height={photo.height}
                  id={photo.id}
                  alt={photo.id}
                  caption={photo.id}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={photo.src}
                      title={photo.id}
                      alt={photo.id}
                      loading="lazy"
                      className="size-full object-cover rounded-xl p-1 transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  )}
                </Item>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
