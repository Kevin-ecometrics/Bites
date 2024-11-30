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
            No solo recuperes tu sonrisa; con el implante dental, elévala al
            siguiente nivel.
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
            <p>
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
                <p>The Zoe Report Beauty</p>
              </div>
              <div className="flex gap-2 mb-8">
                <input type="checkbox" name="" id="" />
                <p>Up Next</p>
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
          <p className="text-7xl float-left mr-4 text-[#E72381]">U</p>
          <p className="text-lg">
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

          <h1 className="text-[#E72381] text-4xl">
            ¿Cómo afecta la falta de dientes en nuestra vida?
          </h1>
          <br />

          <p className="text-lg">
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
          <h1 className="text-[#E72381] text-4xl">
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
          <h1 className="text-[#E72381] text-4xl">
            El implante dental es una decisión final, resistente y estética.
          </h1>
          <br />
          <p className="text-lg">
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
          <h1 className="text-[#E72381] text-4xl">
            Lo que pasa durante un implante.
          </h1>
          <br />
          <p className="text-lg">
            El implante dental es una cirugía ambulatoria, realizada en etapas,
            para asegurar la curación entre cada procedimiento, el lapso entre
            cada sesión permite que la curación no se interrumpa, haya un
            crecimiento de hueso o tejido y se pueda trabajar sobre este en la
            siguiente sesión con el fin de garantizar el resultado final más
            óptimo.
          </p>
          <br />
          <h1 className="text-[#E72381] text-4xl">
            Este procedimiento se lleva a cabo de la siguiente manera:
          </h1>
          <br />
          <p className="text-lg">
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
          <h1 className="text-[#E72381] text-4xl">
            Los implantes pueden parecer intimidantes cuando los mencionan.
          </h1>
          <br />
          <p className="text-lg">
            Creemos que son más intimidantes las consecuencias de no atender tu
            salud oral, ya que puede afectar significativamente tu salud y
            calidad de vida. <br /> <br />
            No hay nada que temer, son procedimientos muy comunes. Nuestros
            dentistas cuentan con todas las herramientas y preparación para
            mejorar de forma increíble tu aspecto y autoestima, además de evitar
            cualquier posible afección a tu salud.
          </p>
          <br />
          <h1 className="text-[#E72381] text-4xl">
            ¿Te interesa una valoración?
          </h1>
          <br />
          <p>
            Marca al 663 324 9611. <br /> <br /> O bien realiza una cita a
            través de este medio, selecciona el día y hora para empezar tu
            transformación dental.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Section1;
