import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imagenA from "../../assets/Un diseno de sonrisa es perfecto para sonrisas que buscan resultar.png";
import imagenB from "../../assets/La doctora Anyi experta en estetica dental crea sonrisas que realzan tus facciones para que luzcan en armonia con tu belleza.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile2 from "../../assets/blog4-profile.webp";
import Profile3 from "../../assets/blog5-profile.webp";
import Profile1 from "../../assets/blog6-profile.webp";
const Section1: React.FC = () => {
  const URL = useLocation();

  const navigate = useNavigate();

  const handleScrollToBooking = () => {
    navigate("/#Booking");
    setTimeout(() => {
      const bookingElement = document.getElementById("Booking");
      if (bookingElement) {
        bookingElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="lg:px-8 font-poppins">
      <div
        className="grid grid-cols-1 lg:grid-cols-3 text-white w-full"
        style={{
          backgroundColor: "#6BBAE9",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="text-start col-span-2 flex justify-end items-start flex-col">
          <h1 className="font-bold text-2xl">(Carillas de Composite)</h1>
          <p className="mt-4 text-4xl">
            Las carillas dentales de composite: La solución para una sonrisa
            ideal{" "}
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-xl">Mar. 11, 2024</p>
        </div>
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
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-16">
        <div className="col-span-1">
          <aside className="w-full">
            <hr className="w-full border border-gray-300 mb-4" />
            <h1 className="text-[#5C9BC0] mb-8 font-bold">
              (Transforma tu sonrisa)
            </h1>
            <p className="text-xl mb-4">
              Agenda tu cita en{" "}
              <strong className="text-[#E72381]">
                Bitescreadores de sonrisas
              </strong>{" "}
            </p>
            <div className="mb-8">
              {/* Otros contenidos de la sección */}
              <button
                className="bg-[#E72381] text-white px-4 py-2 rounded mt-4 hover:opacity-80"
                onClick={handleScrollToBooking}
              >
                Agendar cita
              </button>
            </div>
            {URL.pathname === "/blog/La-solucion-para-una-sonrisa-ideal" ? (
              <div>
                <strong className="text-2xl mb-6">Nuestros blogs </strong>
                <a
                  href="Descubre-como-trasformamos-una-sonrisa-juvenil-a-una-sonrisa-sofisticada-La-Sonrisa-de-ensueno-disenada-para-armonizar-tu-rostro"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <img src={Profile1} alt="" className="w-28 h-28" />
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Descubre como trasformamos una sonrisa juvenil a una
                      sonrisa sofisticada{" "}
                    </h1>
                    <p className="text-sm">
                      Hoy nos gustaría que nos acompañaras a conocer como en
                      nuestra clínica estética trasformamos la sonrisa de
                      nuestra paciente con una sonrisa bella
                    </p>
                  </div>
                </a>
                <a
                  href="Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Renueva tu sonrisa sin cirugia con carillas de porcelana
                    </h1>
                    <p className="text-sm">
                      Una paciente cuya personalidad deseaba que se manifestara
                      en una sonrisa resplandeciente
                    </p>
                  </div>
                  <img src={Profile3} alt="" className="w-28 h-28" />
                </a>
                <a
                  href="Remodela-tus-encias-luce-unos-dientes-mas-grandes-y-bellos-te-presentamos-la-gingivoplastia"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <img src={Profile2} alt="" className="w-28 h-28" />

                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Remodela tus encias, luce unos dientes mas grandes.
                    </h1>
                    <p className="text-sm">
                      Te compartimos el cambio increíble y natural de nuestra
                      paciente con ayuda de una gingivoplastia
                    </p>
                  </div>
                </a>
                <a
                  href="Con-el-implante-dental-elevala-al-siguiente-nivel"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Con el implante dental elevala al siguiente nivel
                    </h1>
                    <p className="text-sm">
                      Una sonrisa completa refleja nuestra salud. No solo es
                      importante sentirnos bien, sino que funcione a la
                      perfección.
                    </p>
                  </div>
                  <img
                    src="/Dental implants the ambulatory procedure that guarantees a good-looking and healthy smile.png"
                    alt=""
                    className="w-28 h-28"
                  />
                </a>
                <a
                  href="Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <img
                    src="/Improve your self-confidence enjoy your smile with the top-rated dentist in Tijuana Bites Creadores de Sonrisas.png"
                    alt=""
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Descubre como obtener una sonrisa deslumbrante
                    </h1>
                    <p className="text-sm">
                      El blanqueamiento dental es uno de los tratamientos
                      dentales estéticos con los resultados más visibles de
                      forma inmediata.
                    </p>
                  </div>
                </a>
              </div>
            ) : null}
          </aside>
        </div>
        <div className="col-span-2 ">
          <p className="text-7xl float-left mr-4 text-[#E72381]">U</p>
          <p className="text-xl">
            na sonrisa espectacular está al alcance de todos. En Bites creadores
            de sonrisas somos fieles creyentes que mereces disfrutar cuando
            sonríes, y que esa misma sonrisa sea funcional al comer y hablar.
            Creemos que la estética y funcionalidad son esenciales para una
            calidad de vida digna.
            <br />
            <br />
            Acompáñanos a conocer todo sobre las carillas dentales de composite.
            <br /> <br />
            Las carillas de composite hacen posible combinar la estética y la
            funcionalidad. <br /> Ya no solo las grandes celebridades o
            personajes de internet las tienen, sino que se han convertido en los
            tratamientos de estética dental más frecuentes y populares para
            todos.
            <br /> <br />
          </p>

          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Cómo identificar si eres candidato?
          </h1>
          <br />
          <ul className="list-decimal text-xl mb-2">
            <li>
              Si tus dientes son naturalmente pequeños, las carillas pueden
              darle ese realce que necesitas.
            </li>
            <li>
              Si tus dientes han pasado por varios tratamientos a lo largo de tu
              vida, pero no pudiste terminarlos o volvieron a su forma anterior,
              las carillas pueden darle esa forma estética y atractiva que
              siempre has deseado.
            </li>
            <li>
              Si tienes algún diente roto o te falta uno, las carillas pueden
              devolverte esa vitalidad.
            </li>
            <li>
              Si tus dientes tienen alguna forma irregular, espacios y
              tonalidades diferentes.
            </li>
          </ul>
          <p className="text-xl">
            Te recomendamos la carilla composite, ya que no es necesario un
            procedimiento invasivo.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Son costosas las carillas?
          </h1>
          <br />
          <p className="text-xl">
            Tranquilo, las carillas de composite son más económicas que las de
            porcelana. La inversión que realices depende de la cantidad de
            carillas que requieras. Puedes iniciar con las carillas superiores y
            después las inferiores. Lo importante es que te animes a dar ese
            paso para tu sonrisa ideal.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Qué hacer antes del procedimiento?
          </h1>
          <br />
          <p className="text-xl">
            Previo a colocar las carillas, hacemos un estudio de sonrisa para
            conocer tu salud oral para saber cómo perfeccionarla. Tú eres la
            pieza clave más importante y estamos para escuchar tus necesidades
            dentales. <br /> <br /> El tratamiento consiste en preparar los
            dientes sin generar desgaste dental para colocar pequeñas cantidades
            sobre los dientes de un material moldeado a base de resina acrílica
            mezclada con partículas de cerámica, que se moldea según el gusto y
            necesidad del paciente. <br /> <br /> Una vez los dientes tengan la
            forma deseada el siguiente paso es endurecerlo con una luz halógena
            especializada, esta dureza es muy similar a la de los dientes,
            finalmente se pule para eliminar cualquier impureza y darle brillo.{" "}
            <br /> <br />
            Esto se realiza en una sola sesión, quedando un resultado de aspecto
            muy natural, siendo un procedimiento sin dolor.
          </p>
          <br />
          <div className="w-full flex justify-center items-center">
            <iframe
              src="https://www.instagram.com/reel/C1Ycgmwr0xN/embed"
              title="Instagram video"
              className="md:w-[800px] md:h-[1300px] w-full h-[650px]"
              scrolling="No"
            ></iframe>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button
              className="bg-[#E72381] text-white px-4 py-2 rounded mt-4 hover:opacity-80"
              onClick={handleScrollToBooking}
            >
              <strong>Agendar cita</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
