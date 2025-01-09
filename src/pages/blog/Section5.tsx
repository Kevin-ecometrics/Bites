import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../../assets/blog5-profile.webp";
import BlogA from "../../assets/blog5-1.webp";
import BlogB from "../../assets/blog5-2.webp";
import BlogC from "../../assets/blog5-3.webp";
import BlogD from "../../assets/blog5-4.webp";
import BlogE from "../../assets/blog5-5.webp";
import Profile2 from "../../assets/blog4-profile.webp";
import Profile1 from "../../assets/blog6-profile.webp";
const Section5: React.FC = () => {
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
          <h1 className="font-bold text-2xl">(Carillas de Porcelana)</h1>
          <p className="mt-4 text-4xl">
            Renueva tu sonrisa sin cirugía con carillas de porcelana en Bites
            Creadores de Sonrisas tu trasformación es radiantemente natural.
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-lg">Dic. 03, 2024</p>
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
          <aside className="w-full relative">
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
            "/blog/Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural" ? (
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
            {URL.pathname ===
            "/blog/Renueva-tu-sonrisa-sin-cirugia-con-carillas-de-porcelana-en-Bites-Creadores-de-Sonrisas-tu-trasformacion-es-radiantemente-natural" ? null : (
              <div className="mt-8 md:absolute md:top-[2000px]">
                <img src="/bites-blog-banner.webp" alt="" />
              </div>
            )}
          </aside>
        </div>
        <div className="col-span-2 ">
          <p className="text-7xl float-left mr-4 text-[#E72381]">E</p>
          <p className="text-xl">
            n Este blog te presentamos el “behind the scenes” de una paciente
            cuya personalidad deseaba que se manifestara en una sonrisa
            resplandeciente llena de seguridad y felicidad.
            <br />
            <br />
            Llegó una paciente a nuestra clínica de alta estética buscando
            fortalecer su autoestima aún más con una sonrisa que emparejará su
            energía y felicidad.
            <br /> <br />
            <div className="flex justify-center items-center">
              <img src={BlogA} alt="" />
            </div>
            <br />
            El primer día fue muy fácil pues la paciente que nos había conocido
            por{" "}
            <a
              href="https://Instagram.com/bitescreadoresdesonrisas"
              className="font-bold hover:underline"
            >
              Bitescreadoresdesonrisas
            </a>
            , había hecho una cita con nosotros por internet, comenzamos a la
            hora que ella agendó, nosotras estábamos listas para recibirla.
            <br />
            <br />
            <div className="flex justify-center items-center">
              <img src={BlogB} alt="" />
            </div>
            <br />
            Comenzamos con una evaluación profunda en consultorio, seguido de un
            modelo de estudio, fotografías y radiografías para conocer el estado
            de salud bucal generaly una vez completado le recomendamos
            transformar su sonrisa con carillas de porcelana, la paciente
            buscaba una opción que le brindara alta durabilidad y una apariencia
            natural a su sonrisa.
            <br /> <br />
            Las carillas de porcelana son recomendadas en pacientes que tienen
            bordes irregulares en sus dientes, algún diente más corto respecto a
            los demás, fisuras ligeras, ligeros espacios interdentales que
            buscan cambiar la apariencia y tono de su sonrisa con aspecto muy
            natural.
            <br />
            <br />
            <div className="flex justify-center items-center">
              <img src={BlogC} alt="" />
            </div>
            <br />
            En su primera elaboramos diferentes procedimientos higienistas
            mínimos a fin de que quedara limpia y sana para sus nuevas carillas
            <br /> <br />
            La segunda visita fue poner manos a la obra donde, tras el modelo de
            estudio, se hace un encerado diagnóstico; con ello podremos hacer el
            tallado de las carillas también llamadas veneres en inglés.
            <br />
            <br />
            Durante esta consulta nuestra paciente eligió las características
            deseadas para sus carillas por ejemplo el tono, forma y tamaño, en
            este caso ella buscaba unos incisivos más grandes y ligeramente más
            redondeados para para darse una apariencia más juvenil. En cuanto al
            tono, recomendamos uno que combinara con su tono de labios y piel
            para que resaltara sus rasgos faciales, logrando proyectar armonía y
            naturalidad.
            <br /> <br />
            <div className="flex justify-center items-center">
              <img src={BlogD} alt="" />
            </div>
            <br />
            El siguiente paso fue crear impresiones de silicona que permitirán
            proponer unas carillas provisionales que probamos en nuestra
            paciente para que pueda observar cómo quedará su sonrisa y si es
            necesario corregir algún detalle. Esto se hace previo a realizar las
            carillas de porcelana finales en el laboratorio bajo la supervisión
            experta de un técnico especialista en materiales dentales como la
            porcelana.
            <br />
            <br />
            Un par de días después quedan listas las carillas de porcelana y
            comienza el proceso de trasformación con una limpieza profunda y
            preparáramos la superficie de sus dientes donde removemos un poquito
            del esmalte de la superficie frontal para que las carillas queden a
            la perfección para luego aplicar el adhesivo especial sobre cada
            diente y fijarlos. Finalizamos esta trasformación con un detallado y
            pulido para que la paciente no sienta la diferencia en apariencia y
            sensación de sus carillas.
            <br />
            <br />
            <div className="flex justify-center items-center">
              <img src={BlogE} alt="" />
            </div>
            <br />
            Todo el proceso de las carillas toma un par de horas y es un momento
            muy especial al revelar la sonrisa finalmente terminada, donde
            nuestra paciente se sintió muy feliz con los resultados amando cada
            detalle de su ahora nueva sonrisa.
            <br />
            <br />
            Posterior a esta trasformación de sonrisa le recomendamos a nuestra
            paciente acudir puntualmente a sus citas de mantenimiento para que
            su sonrisa siempre se mantenga radiante como ella.
          </p>
          <br />
          <br />
          <h1 className="text-[#E72381] font-bold text-3xl">
            Las carillas de porcelana tienen una duración de 10 a 15 años, para
            ello será indispensable cuidarlas con visitas de mantenimiento
          </h1>
          <br />
          <br />
          <p className="text-xl">
            Es difícil que las carillas de porcelana se manchen sin embargo es
            importantísimo recordar que debajo de toda carilla hay un diente que
            requiere los mismo cuidados de siempre por ello es recomendable,
            tener una buena técnica de cepillado uso de enjuague e hilo dental,
            para mantenerlos sanos.
            <br />
            <br />{" "}
            <div className="w-full flex justify-center items-center">
              <iframe
                src="https://www.instagram.com/reel/C-lrbK8SyCx/embed"
                title="Instagram video"
                className="md:w-[800px] md:h-[1300px] w-full h-[650px]"
                scrolling="No"
              ></iframe>
            </div>
            <br />
            ¿Qué opinas de estos resultados? Nos llenó de satisfacción ver la
            felicidad de nuestra paciente con su nueva sonrisa.
            <br /> <br />
            <h1 className="text-[#E72381] font-bold text-3xl">
              nuestra misión en Bites Creadores de Sonrisas es escuchar
              atentamente a nuestros pacientes y brindarles belleza y
              funcionalidad en su sonrisa
            </h1>
            <br />
            Si estas interesado en trasformar tu sonrisa de forma no invasiva y
            natural, te recomendamos ampliamente acudir a tu consulta de
            valoración para conocer tu caso y poder acompañarte en el proceso
            para tener una sonrisa linda, radiante que refleje tu personalidad
            con carillas de porcelana.
          </p>
          <div className="flex justify-center items-center">
            <button
              className="bg-[#E72381] text-white px-4 py-2 rounded mt-4 hover:opacity-80"
              onClick={handleScrollToBooking}
            >
              <strong>Agendar cita</strong>
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Section5;
