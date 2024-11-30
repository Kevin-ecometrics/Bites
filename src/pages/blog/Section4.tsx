import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imagenA from "../../assets/A dental implant it's a procedure that requires an expert in odontology and aesthetic dentistry.png";
import imagenB from "../../assets/Una sonrisa completa y sana permite que disfrutes del comer y hablar con libertad y comodidad.png";

const Section1: React.FC = () => {
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="px-8">
      <div
        className="grid grid-cols-1 md:grid-cols-3 text-white w-full h-96"
        style={{
          backgroundColor: "#6BBAE9",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="text-start col-span-2 flex justify-end items-start flex-col">
          <h1 className="font-bold text-2xl">(Tendencias)</h1>
          <p className="mt-4 text-4xl">
            Remodela tus encías luce unos dientes más grandes y bellos, te
            presentamos la gingivoplastia.
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-lg">Oct. 24, 2024</p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8">
        <div className="col-span-1">
          <aside className="w-96">
            <hr className="w-full border border-gray-300 mb-4" />
            <h1 className="text-[#5C9BC0] mb-8 font-bold">(Stay Up To Date)</h1>
            <h2>Become A Style Insider</h2>
            <p className="text-lg">
              Join The Zoe Report’s exclusive email list for the latest trends,
              shopping guides, celebrity style, and more.
            </p>
            <form onSubmit={HandleSubmit} className="py-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="border-b border-black w-96 h-12"
              />
              <div className="flex gap-2 py-2">
                <input type="checkbox" name="" id="" />
                <p className="text-lg">The Zoe Report Beauty</p>
              </div>
              <div className="flex gap-2 mb-8">
                <input type="checkbox" name="" id="" />
                <p className="text-lg">Up Next</p>
              </div>
              <button
                type="submit"
                className="border border-black hover:bg-black hover:text-white 
                transition duration-300 ease-in-out
                px-8 py-2"
              >
                Submit
              </button>
              <p className="text-[10px] mt-6">
                By subscribing to this BDG newsletter, you agree to our Terms of
                Service and Privacy Policy
              </p>
            </form>
            <h1 className="text-2xl mb-6">(More Like This)</h1>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <img
                src="https://imgix.bustle.com/uploads/image/2024/11/22/9a1ce370/464139536_1242095683792698_686201517551108879_n.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3119"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">Title</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">Title</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi
                </p>
              </div>
              <img
                src="https://imgix.bustle.com/uploads/image/2024/11/14/2dab5afb/459312207_392932597184609_1904214669238524394_n-1.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5329&fp-y=0.1047"
                alt=""
              />
            </div>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <img
                src="https://imgix.bustle.com/uploads/image/2024/11/19/c8010d91/20241101_samimiro_img_0198.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.4141&fp-y=0.3714"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">Title</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">Title</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi
                </p>
              </div>
              <img
                src="https://imgix.bustle.com/uploads/image/2024/11/12/6be48854/productroundup_template-4001.jpeg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.4571&fp-y=0.4959"
                alt=""
              />
            </div>
          </aside>
        </div>
        <div className="col-span-2 ">
          <p className="text-7xl float-left mr-4 text-[#E72381]">T</p>
          <p className="text-lg">
            e compartimos el cambio increíble y natural de nuestra paciente con
            ayuda de una gingivoplastia combinada con un blanqueamiento dental y
            resinas para corregir detalles mínimos.
            <br />
            <br />
            En este blog queremos que nos acompañes mientras te contamos paso a
            paso como trasformamos la sonrisa de nuestra linda paciente. <br />{" "}
            <br />
            Primero nuestra paciente llego a Bites Creadores de Sonrisas para
            una revisión y valoración agendando de manera fácil y rápido
            directamente desde nuestra{" "}
            <a href="/contacto " className="font-bold hover:underline">
              pagina web.
            </a>{" "}
            <br />
            <br />
            Sus dientes se encontraban en perfecto estado de salud, sin embargo,
            buscaba mejorar sus incisivos superiores, quería darles un aspecto
            más más grande y alineado, pero buscaba una opción que no fuera tan
            invasiva, accesible y sobre todo quería tener resultados muy
            naturales.
            <br /> <br />
            Fue así como decidimos juntas una trasformación sutil con una
            gingivoplastia, aclaramiento dental y resinas para lograr así una
            sonrisa con más presencia. Nos encanta destacar que sus dientes eran
            bastante bellos debido a que tenían un tono uniforme, mantenían su
            alineación, no presentaban ningún problema de maloclusión ni tenían
            caries alguna.
            <br />
            <br />
            Nuestra paciente había decidido con mucho tiempo que nosotras
            fuéramos quienes le hicieran el diseño de sonrisa. Así que una vez
            que nos visitó, rápidamente planeamos los cambios que se le harían y
            que completarían una trasformación para una sonrisa realmente
            espectacular.
            <br /> <br />
          </p>
          <h1 className="text-[#E72381] text-4xl">
            Nos pusimos manos a la obra, en su trasformación de sonrisa,
            encantadas cuando confían en nuestro trabajo para lograr un balance
            perfecto entre funcionalidad y belleza.{" "}
          </h1>
          <br /> <br />
          <p className="text-lg">
            El Primer paso para esta trasformación fue una limpieza dental para
            dejar la zona libre de cualquier acumulación de sarro o bacterias
            entre la encía y dientes. Una vez terminada la limpieza preparamos
            todo para realizar la gingivoplastía.
          </p>
          <br /> <br />
          <h1 className="text-[#E72381] text-4xl">
            Gingivoplastía para un diseño de sonrisa:
          </h1>
          <br />
          <br />
          <p className="text-lg">
            {" "}
            Para la gingivoplastia comenzamos anestesiando la zona de la encía
            con anestesia local, realizamos las mediciones y marcación para
            comenzar a recortar y retirar el contorno de la encía para modelar
            su forma y tamaño para que los incisivos tuvieran mayor proyección.
          </p>{" "}
          <br />
          <br />
          <p className="text-lg">
            Después de realizar la gingivoplastía, compartimos con nuestra
            paciente algunas recomendaciones importantes para su recuperación.
            Le sugerimos cepillar sus dientes con delicadeza, utilizar un
            enjuague bucal sin alcohol y evitar alimentos crujientes, picantes o
            ácidos. En caso de molestias, le indicamos el uso de analgésicos y
            antiinflamatorios. Programamos una cita de revisión 15 días después
            para evaluar su progreso y continuar con el siguiente paso en su
            tratamiento.{" "}
          </p>{" "}
          <br />
          <br />
          <p className="text-lg">
            Queremos puntualizar como expertos en odontología estética, que la
            gingivoplastía es un procedimiento mínimamente invasivo y bastante
            breve con una duración de 30 a 40 minutos y su postoperatorio
            requiere de un poquito más de atención principalmente las primeras
            semanas para asegurar una recuperación completa.{" "}
          </p>{" "}
          <br />
          <br />
          <h1 className="text-[#E72381] text-4xl">
            {" "}
            Blanqueamiento dental para finalizar el diseño de sonrisa{" "}
          </h1>{" "}
          <br />
          <br />
          <p className="text-lg">
            Pasado 4 semanas de la gingivoplastía, continuamos con el siguiente
            paso de la trasformación de sonrisa. Realizamos un blanqueamiento
            dental para iluminar la nueva forma de su sonrisa, en el caso de
            nuestra paciente, no presentaba manchas o coloración bastante
            marcada, lo que nos permitió hacer un blanqueamiento más breve,
            obteniendo un tono más claro y brillante resaltando una armonía muy
            natural.{" "}
          </p>{" "}
          <br />
          <br />
          <p className="text-lg"> Resinas estéticas</p> <br />
          <br />
          <p className="text-lg">
            Comenzamos agregando poco a poco la resina para darle forma y tamaño
            deseado. Utilizamos luz ultravioleta para endurecer y asegurar que
            se adhiera a los dientes perfectamente.
          </p>{" "}
          <br />
          <br />
          <p className="text-lg">
            {" "}
            Una vez listas, mostramos la forma a nuestra paciente para que
            pudiera ver su nueva sonrisa y nos diera su aprobación. El último
            paso una vez la paciente está satisfecha con sus dientes consiste en
            detallar y pulir cada diente para lograr un acabado uniforme y
            reluciente.
          </p>{" "}
          <br />
          <br />
          <h1 className="text-[#E72381] text-4xl">
            En Bites Creadores de Sonrisas trasformamos de forma sutil y
            elegante una sonrisa, en este blog pudimos ver como le dimos
            mantenimiento, restructuramos su forma, le facilitamos más luz con
            un blanqueamiento y finalmente elongamos los dientes para que
            tuvieran mayor presencia al hablar y sonreír.
          </h1>{" "}
          <br />
          <br />
          <p className="text-lg">
            Estos cambios se hicieron de manera que respetamos la forma natural
            de sus dientes, que era el principal deseo de nuestra paciente
            linda, que quedo maravillada al ver los resultados tan sutiles pero
            impresionantes.{" "}
          </p>{" "}
          <br />
          <br />
          <p className="text-lg">¿Qué te pareció esta trasformación?</p> <br />
          <br />
          <p className="text-lg">
            Para nosotros fue algo muy lindo, discreto y muy elegante. Nos
            encantó trasformar esta sonrisa y ver nuestra paciente disfrutarla y
            sonreír ampliamente. Si buscas resultados sutiles definitivamente te
            recomendamos resinas estéticas y si lo que buscas es agrandar su
            sonrisa una gingivoplastia es la solución más eficaz.{" "}
          </p>{" "}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Section1;
