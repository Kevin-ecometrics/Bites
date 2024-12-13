import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imagenA from "../../assets/A dental implant it's a procedure that requires an expert in odontology and aesthetic dentistry.png";
import imagenB from "../../assets/Una sonrisa completa y sana permite que disfrutes del comer y hablar con libertad y comodidad.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile2 from "../../assets/blog4-profile.webp";
import Profile3 from "../../assets/blog5-profile.webp";
import Profile1 from "../../assets/blog6-profile.webp";
const Section3: React.FC = () => {
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
          <h1 className="font-bold text-2xl">(Implante dental)</h1>
          <p className="mt-4 text-4xl">
            No solo recuperes tu sonrisa; con el implante dental, elévala al
            siguiente nivel.
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-lg">Abr. 15, 2024</p>
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
            "/blog/Con-el-implante-dental-elevala-al-siguiente-nivel" ? (
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
                      sonrisa sofisticada
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
          <p className="text-7xl float-left mr-4 text-[#E72381]">U</p>
          <p className="text-xl">
            na sonrisa completa refleja nuestra salud. No solo es importante
            sentirnos bien, sino que funcione a la perfección.
            <br />
            <br />
            Si tienes uno o más dientes faltantes y te apena sonreír, y piensas:
            “Bueno, solo es estético, no los necesito, en este momento no he
            sentido molestias”. <br /> <br />
            Espera, puede que estés poniendo en peligro toda tu salud oral.
            <br />
            <br />
            A continuación, te decimos por qué es importante atender lo antes
            posible este asunto.
            <br /> <br />
            Has llegado al lugar indicado, te apoyamos a resolver las dudas más
            comunes. Nuestros expertos te brindarán la solución para recuperar
            tu salud y para que recuperes esa seguridad y te sientas empoderado.
            <br />
            <br />
          </p>

          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Cómo afecta la falta de dientes en nuestra vida?
          </h1>
          <br />

          <p className="text-xl">
            La falta de dientes no solo afecta de forma estética, sino que
            también de forma emocional y física, ya que puede afectar nuestra
            habla, puede acelerar el desgaste de los dientes sanos, ya que se
            sobrecargan debido a la ausencia de los otros dientes, la falta de
            dientes hace que el proceso de masticar no se lleve a cabo de forma
            correcta, por tanto, puede generar problemas digestivos porque los
            alimentos no son triturados y absorbidos correctamente. <br />{" "}
            <br />
            Se debilita el hueso, es decir, pierde densidad en la zona, o bien
            empiezan a surgir irregularidades en el hueso mandibular. Esto puede
            ocasionar hundimiento de los labios, envejecimiento facial
            prematuro, no solo afectando la estética sino la salud misma.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Hay diversos motivos por los cuales es posible perder dientes, y
            todos tienen solución.
          </h1>
          <br />
          <ul className="list-decimal text-lg">
            <li>
              Una de las causas es por caries, ya que la placa bacteriana se
              acumuló en nuestros dientes, debilitándolos, causando una
              infección del tejido, haciendo que se debilite o tenga que
              extraer.
            </li>
            <li>
              Periodontitis, es una patología de las encías, puede ser causada
              de forma hereditaria o por pocos cuidados orales. Esta enfermedad
              bacteriana inflama y debilita los tejidos y estructura, causando
              que los dientes se caigan.
            </li>
            <li>Endodoncias mal ejecutadas.</li>
            <li>
              Bruxismo que es el apretar los dientes provocando un severo
              desgaste.
            </li>
            <li>
              Accidente o golpe, que provoca alguna fractura debido al impacto,
              provocando desprendimiento.
            </li>
          </ul>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            El implante dental es una decisión final, resistente y estética.
          </h1>
          <br />
          <p className="text-xl">
            Es un proceso que es bajo anestesia local, no existe sensación
            extraña ni ajena una vez que el procedimiento está 100% terminado.{" "}
            <br /> <br />
            Los implantes dentales son estructuras metálicas, generalmente de
            titanio, que se introducen en los huesos maxilares. Dependiendo del
            área o áreas en las que lo requieras, el implante se encontrará en
            tu encía, ya sea superior o inferior. <br /> <br />
            El implante es un tornillo que se inserta, simulando la raíz de un
            diente. El pilar es la pieza que conecta el implante con la corona.{" "}
            <br /> <br />
            La corona es la prótesis cerámica que simula a la perfección tu
            diente, se ve estética y funciona excelente. <br />
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Lo que pasa durante un implante.
          </h1>
          <br />
          <p className="text-xl">
            El implante dental es una cirugía ambulatoria, realizada en etapas,
            para asegurar la curación entre cada procedimiento, el lapso entre
            cada sesión permite que la curación no se interrumpa, haya un
            crecimiento de hueso o tejido y se pueda trabajar sobre este en la
            siguiente sesión con el fin de garantizar el resultado final más
            óptimo.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Este procedimiento se lleva a cabo de la siguiente manera:
          </h1>
          <br />
          <p className="text-xl">
            Se hace mediante una incisión en la encía, hasta llegar al hueso
            para insertar el pilar del implante. Gracias a los materiales con
            los cuales está elaborado, permite que los tejidos se adapten.{" "}
            <br /> <br />
            Pasando el tiempo recomendado por nuestros especialistas para que
            sane completamente, el siguiente paso es colocar la corona, que es
            la prótesis visible. <br /> <br />
            Una vez terminado el proceso, es importantísimo acudir a tus citas
            para revisión. <br /> <br />
            Mantener una correcta higiene es primordial. Los implantes son
            permanentes y tienen una longevidad de más de 10 años, por lo que es
            un procedimiento de larga duración. Claro, el factor que permite que
            dure, es mantener una higiene excelente.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Los implantes pueden parecer intimidantes cuando los mencionan.
          </h1>
          <br />
          <p className="text-xl">
            Creemos que son más intimidantes las consecuencias de no atender tu
            salud oral, ya que puede afectar significativamente tu salud y
            calidad de vida. <br /> <br />
            No hay nada que temer, son procedimientos muy comunes. Nuestros
            dentistas cuentan con todas las herramientas y preparación para
            mejorar de forma increíble tu aspecto y autoestima, además de evitar
            cualquier posible afección a tu salud.
          </p>
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            ¿Te interesa una valoración?
          </h1>
          <br />
          <p>
            Marca al 663 324 9611. <br /> <br /> O bien realiza una cita a
            través de este medio, selecciona el día y hora para empezar tu
            transformación dental.
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

export default Section3;
