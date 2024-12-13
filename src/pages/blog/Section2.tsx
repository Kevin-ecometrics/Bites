import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imagenA from "../../assets/Una sonrisa saludable solo necesita un blaqueamiento dental.png";
import imagenB from "../../assets/Una sonrisa se ve espectacular despues de hacerse un blaqueamiento con los mejores en Bites Creadores de Sonrisas.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile2 from "../../assets/blog4-profile.webp";
import Profile3 from "../../assets/blog5-profile.webp";
import Profile1 from "../../assets/blog6-profile.webp";
const Section2: React.FC = () => {
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
          <h1 className="font-bold text-2xl">(Blanqueamiento dental)</h1>
          <p className="mt-4 text-4xl">
            Descubre cómo obtener una sonrisa deslumbrante con blanqueamiento
            dental. Siéntete seguro de mostrarle a todos esa gran sonrisa
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-xl">Mar. 25, 2024</p>
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
            {URL.pathname ===
            "/blog/Descubre-como-obtener-una-sonrisa-deslumbrante-con-blanqueamiento-dental" ? (
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
          <p className="text-7xl float-left mr-4">E</p>
          <p className="text-xl">
            l blanqueamiento dental es uno de los tratamientos dentales
            estéticos con los resultados más visibles de forma inmediata.
            <br />
            <br />
            <strong className="text-[#E72381]">
              ¿Hay una razón exacta por la que mis dientes estén amarillos o
              manchados?
            </strong>
            <br /> <br />
            No te asustes, existen muchos motivos que incluso no están en
            nuestro control. <br /> <br />
            <strong>Edad: </strong>Es habitual con el paso del tiempo que se
            oscurezcan y tomen un color más amarillento. <br /> <br />
            <strong>Hereditario: </strong>Puede ser que durante la formación del
            diente este haya tenido un tono diferente que con el tiempo procede
            a ser más visible. <br /> <br />
            <strong>Medicamentos: </strong> Algunos compuestos pueden afectar tu
            salud oral, afectar el esmalte o manchar. Es recomendable comentar a
            nuestros dentistas si actualmente te encuentras en algún tratamiento
            médico. <br /> <br />
            <strong>Traumatismos: </strong> Un golpe puede dañar el esmalte, la
            corona o del diente ocasionando que muera o pierda sus cualidades
            estéticas. <br /> <br />
            <strong>Alimentos y bebidas: </strong> El consumo frecuente de café,
            cerveza oscura, chocolate oscuro, té, vino, frutos rojos y alimentos
            procesados con colorantes verdes, rojo y naranja. <br /> <br />
            <strong>Hábitos: </strong> Olvidar cepillarse los dientes, utilizar
            hilo dental. <br /> <br />
            <strong>Fumar: </strong> Son acciones que deterioran la apariencia
            de tus dientes. Dichos los anteriores motivos y la falta de visitas
            para una limpieza dental, son factores acumulables que dan como
            resultado que tus dientes luzcan manchados o amarillos.
            <br /> <br />
          </p>

          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Puedo tener los dientes del tono más blanco en la primera sesión?
          </h1>
          <br />

          <p className="text-xl">
            Es normal buscar cambios drásticos para vernos diferentes, pero es
            esencial conocer los límites de nuestros dientes para poder
            disfrutar más de ellos. <br /> <br />
            Las tonalidades que se pueden cambiar van a depender de tus dientes,
            la composición de la dentina es la que determina el color de los
            dientes. Esta se encuentra por debajo del esmalte que es traslúcido.
            Según el grosor, deja ver más o en menor medida el color de la
            dentina. El color amarillo e intensidad depende del grosor y la
            calidad de la dentina. <br /> <br />
            En Bites nos preocupamos no solo por la estética sino por la
            funcionalidad. En casos cuando se busca una sonrisa con tonalidades
            más claras y brillantes, se lleva a cabo en diferentes sesiones para
            lograr ese resultado sin afectar tu esmalte, ya que procuramos
            proteger tus dientes. <br /> <br />
            para evitar la sensibilidad y molestias. Te recomendaremos las
            tonalidades más adecuadas para ti para que haya resultados
            armoniosos y naturales.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Vuelven a su color anterior?{" "}
          </h1>
          <br />
          <p className="text-xl">
            Es importante seguir nuestras recomendaciones, entre ellas es seguir
            una dieta libre de alimentos y bebidas que no manchen los dientes
            durante las 72 horas posteriores. <br /> <br />
            Para resultados más prolongados, procurar una excelente higiene oral
            a su vez mejorar hábitos de consumo de alimentos y bebidas que los
            pueden manchar. Si tu interés es seguir blanqueando tus dientes para
            lograr un tono en especial, es importantísimo tomar medidas para
            evitar un retroceso en tu tratamiento.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Cuál es la edad adecuada para hacerme un blanqueamiento?{" "}
          </h1>
          <br />
          <p className="text-xl">
            Si tu salud oral es excelente, te queremos invitar a animarte, nunca
            es tarde. <br /> <br />
            Recomendamos una vez pasada la adolescencia. Previo a realizar
            cualquier tratamiento en Bites, siempre verificamos tu salud oral,
            revisamos que los tejidos dentales estén sanos y que tus dientes y
            encías estén en perfectas condiciones. <br /> <br />
            Nuestros dentistas tienen un ojo de artista que les permite tener
            una visión estética de tu sonrisa y la hacen realidad. Queremos que
            te proyectes más seguro, rejuvenecido, que tu salud oral se preserve
            y que disfrutes del proceso adaptado siempre a ti.
          </p>
          <br />
          <h1 className="text-[#E72381] font-bold text-3xl">
            Proceso ambulatorio
          </h1>
          <br />
          <p className="text-xl">
            Sentirte recibido con amor y ternura y despedirte con la misma
            ilusión. <br /> <br />
            Te permite retomar tus actividades una vez acabado el procedimiento,
            es inodoro por lo que no sentirás molestia previa, durante y
            después. Nos aseguramos de que te sientas en un espacio ameno
            visualmente y que te sientas relajado. Cuando sea momento de irte,
            te sientas feliz y satisfecho.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Por qué hacerte un blanqueamiento dental en Bites Creadores de
            Sonrisas?
          </h1>
          <br />
          <p className="text-xl">
            Sonreír o reírse a carcajadas es un gozo de la vida que no queremos
            que te avergüence hacer debido al color de tus dientes. Es momento
            de dejar de taparte la sonrisa con la mano al momento de expresar
            felicidad. <br /> <br />
            Ahora que conoces un poco de este procedimiento, ten seguridad de
            que nuestro equipo de expertos te quiere apoyar a mejorar tu imagen
            y confianza para que puedas sonreír y reír sin límites ni vergüenza.{" "}
            <br /> <br />
            <h1 className="text-[#E72381] text-3xl font-bold">
              Te escuchamos, te sugerimos y te damos los resultados más
              estéticos y funcionales.
            </h1>
            <br /> <br />
            ¿Te interesa agendar?
          </p>
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

export default Section2;
