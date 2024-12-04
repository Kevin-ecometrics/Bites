import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imagenA from "../../assets/Un diseno de sonrisa es perfecto para sonrisas que buscan resultar.png";
import imagenB from "../../assets/La doctora Anyi experta en estetica dental crea sonrisas que realzan tus facciones para que luzcan en armonia con tu belleza.png";
const Section1: React.FC = () => {
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="px-8 font-poppins">
      <div
        className="grid grid-cols-1 md:grid-cols-3 text-white w-full md:h-96"
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
            Las carillas dentales de composite: La solución para una sonrisa
            ideal{" "}
          </p>
          <p className="mt-4 text-2xl">
            Por{" "}
            <strong>
              <a href="/">Bites creadores de sonrisas</a>
            </strong>
          </p>
          <p className="mt-4 text-xl">Oct. 24, 2024</p>
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
          <aside className="w-full">
            <hr className="w-full border border-gray-300 mb-4" />
            <h1 className="text-[#5C9BC0] mb-8 font-bold">
              (Mantente Actualizado)
            </h1>
            <p className="text-xl">
              Suscribete a{" "}
              <strong className="text-[#E72381]">
                Bitescreadores de sonrisas
              </strong>{" "}
              y recibe las últimas noticias y ofertas que tenemos para ti.
            </p>
            <form onSubmit={HandleSubmit} className="py-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu correo"
                className="border-b border-black w-full h-12"
              />
              <div className="flex gap-2 py-2">
                <input type="checkbox" name="" id="" />
                <p className="text-lg">
                  Acepto los términos y condiciones de uso
                </p>
              </div>
              <div className="flex gap-2 mb-8">
                <input type="checkbox" name="" id="" />
                <p className="text-lg">
                  Acepto la política de privacidad y tratamiento de datos
                </p>
              </div>
              <button
                type="submit"
                className="border border-black hover:bg-black hover:text-white 
                transition duration-300 ease-in-out
                px-8 py-2"
              >
                Enviar
              </button>
              <p className="text-[10px] mt-6">
                Al hacer clic en el botón de enviar, aceptas recibir correos de
                Bites creadores de sonrisas y confirmas que has leído y aceptado
                nuestra Política de Privacidad y Términos de Uso.
              </p>
            </form>
            <strong className="text-2xl mb-6">Nuestros blogs </strong>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <img
                src="https://imgix.bustle.com/uploads/image/2024/11/22/9a1ce370/464139536_1242095683792698_686201517551108879_n.jpg?w=110&h=110&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3119"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">
                  Carillas de Porcelana
                </h1>
                <p className="text-sm">
                  Las carillas de porcelana son una excelente opción para
                  mejorar la estética dental, ofreciendo una apariencia natural
                  y duradera.
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">
                  Carillas de Composite
                </h1>
                <p className="text-sm">
                  Las carillas de composite son una alternativa económica y
                  efectiva para corregir imperfecciones dentales y lograr una
                  sonrisa perfecta.
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
                <h1 className="text-xl mb-4 font-semibold">Implante dental</h1>
                <p className="text-sm">
                  Los implantes dentales son la solución ideal para reemplazar
                  dientes perdidos, proporcionando una base sólida y estética
                  para coronas dentales.
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-gray-300 py-8">
              <div className="flex flex-col">
                <h1 className="text-xl mb-4 font-semibold">Gingivoplastia</h1>
                <p className="text-sm">
                  La gingivoplastia es un procedimiento quirúrgico que mejora la
                  apariencia de las encías, creando una sonrisa más armoniosa y
                  saludable.
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
        </div>
      </div>
    </div>
  );
};

export default Section1;
