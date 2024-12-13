import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Profile from "../../assets/blog6-profile.webp";
import BlogA from "../../assets/blog6-1.webp";
import BlogB from "../../assets/blog6-2.webp";
import BlogC from "../../assets/blog6-3.webp";
import BlogD from "../../assets/blog6-4.webp";
import Profile2 from "../../assets/blog4-profile.webp";
import Profile3 from "../../assets/blog5-profile.webp";

const Section6: React.FC = () => {
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
            Descubre como trasformamos una sonrisa juvenil a una sonrisa
            sofisticada: La Sonrisa de ensueño diseñada para armonizar tu
            rostro.
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-lg">Dic. 10, 2024</p>
        </div>
        <div className="flex justify-center items-center mx-auto">
          {/* <ReactCompareSlider
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
          /> */}
          <img src={Profile} alt="" className="rounded-2xl h-96" />{" "}
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
            {URL.pathname ===
            "/blog/Descubre-como-trasformamos-una-sonrisa-juvenil-a-una-sonrisa-sofisticada-La-Sonrisa-de-ensueno-disenada-para-armonizar-tu-rostro" ? (
              <div>
                <strong className="text-2xl mb-6">Nuestros blogs </strong>
                <a
                  href="Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <img src={Profile3} alt="" className="w-28 h-28" />
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Renueva tu sonrisa sin cirugia con carillas de porcelana
                    </h1>
                    <p className="text-sm">
                      Una paciente cuya personalidad deseaba que se manifestara
                      en una sonrisa resplandeciente
                    </p>
                  </div>
                </a>
                <a
                  href="Remodela-tus-encias-luce-unos-dientes-mas-grandes-y-bellos-te-presentamos-la-gingivoplastia"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      Remodela tus encias, luce unos dientes mas grandes.
                    </h1>
                    <p className="text-sm">
                      Te compartimos el cambio increíble y natural de nuestra
                      paciente con ayuda de una gingivoplastia
                    </p>
                  </div>
                  <img src={Profile2} alt="" className="w-28 h-28" />
                </a>
                <a
                  href="Con-el-implante-dental-elevala-al-siguiente-nivel"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <img
                    src="/Dental implants the ambulatory procedure that guarantees a good-looking and healthy smile.png"
                    alt=""
                    className="w-28 h-28"
                  />
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
                </a>
                <a
                  href="Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
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
                  <img
                    src="/Improve your self-confidence enjoy your smile with the top-rated dentist in Tijuana Bites Creadores de Sonrisas.png"
                    alt=""
                    className="w-28 h-28"
                  />
                </a>
                <a
                  href="La-solucion-para-una-sonrisa-ideal"
                  className="flex gap-4 border-t border-gray-300 py-8"
                >
                  <img
                    src="/Composite veneers enhance your smile without shaving teeth.png"
                    alt=""
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl mb-4 font-semibold">
                      La solucion para una sonrisa ideal
                    </h1>
                    <p className="text-sm">
                      Una sonrisa espectacular está al alcance de todos.
                    </p>
                  </div>
                </a>
              </div>
            ) : null}
          </aside>
        </div>
        <div className="col-span-2 ">
          <p className="text-7xl float-left md:mr-4 text-[#E72381]">H</p>
          <p className="text-xl">
            oy nos gustaría que nos acompañaras a conocer como en nuestra
            clínica estética trasformamos la sonrisa de nuestra paciente con una
            sonrisa bella con un aspecto más juvenil, que buscaba tener una
            sonrisa con más proyección, elegante y sofisticada que reflejara tu
            seguridad y madurez.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center">
            <img src={BlogA} alt="" />
          </div>
          <br /> <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Antes de Bites CDS
          </h1>
          <br />
          <br />
          <p className="text-xl">
            A través de nuestro diseño de carillas de composite creamos para
            nuestra paciente una sonrisa pensada en su gusto y personalidad, que
            fuera deslumbrante y que armonizara perfectamente con su belleza
            facial.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center">
            <img src={BlogB} alt="" />
          </div>
          <br /> <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Primera visita al consultorio de Bites Creadores de Sonrisa:
          </h1>
          <br />
          <br />
          <p className="text-xl">
            La Primera visita a nuestra clínica estética consistió en realizar
            una evaluación general para conocer el estado de sus dientes; esta
            evaluación fue para examinar cada diente y determinar si las
            condiciones de las encías nos ayudarían y para detectar si no había
            algún problema que requiera tratarse previo al tratamiento estético.
            <br /> <br />
            Después realizamos la toma de radiografías que nos permitió ver más
            allá de la vista y donde se puede apreciar la estructura ósea y
            permite descartar algún problema. Una vez inspeccionado todo,
            nuestra paciente resultó ser candidata ideal para poderle aplicar
            carillas de composite ya que deseaba un aspecto natural, duradero y
            sofisticado y nuestras carillas de composite al ser elaboradas a
            mano garantizan una personalización absoluta con una alta estética y
            durabilidad.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center">
            <img src={BlogC} alt="" />
          </div>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Impresiones digitales:
          </h1>
          <br />
          <br />
          <p className="text-xl">
            Le realizamos a la paciente una impresión digital que consistió en
            introducir un aparato con una pequeña cámara que nos permitió
            escanear imágenes 3D de sus dientes y con ayuda de esto diseñamos la
            sonrisa en la forma y el tamaño que deseaba
            <br />
            <br />
            La paciente buscaba una sonrisa con incisivos más grandes y
            ligeramente más rectos para una apariencia más elegante y madura.
            <br />
            <br />
            Este método se pudo llevar a cabo debido a que la sonrisa de nuestra
            paciente se encontraba saludable haciendo el proceso más rápido y
            cómodo.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center">
            <img src={BlogD} alt="" />
          </div>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Último paso en la transformación de sonrisa:
          </h1>
          <br />
          <br />
          <p className="text-xl">
            siguiente paso fue ponernos en marcha con su trasformación y aplicar
            las carillas
            <br />
            <br />
            Comenzamos primero con una limpieza profunda y preparáramos la
            superficie de sus dientes para poder moldear el composite a cada
            diente, una vez moldeado. Finalizamos esta trasformación con un
            detallado y pulido para que queden perfectamente estéticas.
            <br />
            <br />
            <div className="w-full flex justify-center items-center">
              <iframe
                src="https://www.instagram.com/reel/C-86TNHSjvW/embed"
                title="Instagram video"
                className="md:w-[800px] md:h-[1300px] w-full h-[650px]"
                scrolling="No"
              ></iframe>
            </div>
            <br />
            Nuestra paciente quedo muy emocionada por su nueva sonrisa, y
            nosotros más que contentos de poder hacer posible una sonrisa soñada
            en nuestra clínica estética.
          </p>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Si te gusto esta trasformación de sonrisa con carillas de composite
            te invitamos a agendar tu cita de valoración para trabajar juntos en
            crear tu sonrisa soñada.
          </h1>
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

export default Section6;
