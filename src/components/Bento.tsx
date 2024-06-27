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
import { Gallery, Item } from "react-photoswipe-gallery";

const BentoGrid: React.FC = () => {
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
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: "rgba(231, 35, 129, 0.7)" }}
    >
      <div className="md:mx-48 my-32 z-10">
        <div className="py-8 text-white">
          <h1 className="text-3xl text-center mb-4">
            ¡Bienvenido a nuestra galería, un pequeño vistazo de Bites!
          </h1>
          <h2 className="text-2xl text-center mb-8">
            Te queremos compartir nuestra apasionante labor con nuestro atento y
            profesional equipo expertos en odontología estética
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
                                          : ""
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
