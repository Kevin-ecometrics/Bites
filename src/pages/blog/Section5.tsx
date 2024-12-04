import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imagenA from "../../assets/A dental implant it's a procedure that requires an expert in odontology and aesthetic dentistry.png";
import imagenB from "../../assets/Una sonrisa completa y sana permite que disfrutes del comer y hablar con libertad y comodidad.png";

const Section5: React.FC = () => {
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
            Renueva tu sonrisa sin cirugía con carillas de porcelana en Bites
            Creadores de Sonrisas tu trasformación es radiantemente natural.
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
            <br />
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
            <br />
            ¿Qué opinas de estos resultados? Nos llenó de satisfacción ver la
            felicidad de nuestra paciente con su nueva sonrisa, nuestra misión
            en Bites Creadores de Sonrisas es escuchar atentamente a nuestros
            pacientes y brindarles belleza y funcionalidad en su sonrisa.
            <br />
            <br />
            Si estas interesado en trasformar tu sonrisa de forma no invasiva y
            natural, te recomendamos ampliamente acudir a tu consulta de
            valoración para conocer tu caso y poder acompañarte en el proceso
            para tener una sonrisa linda, radiante que refleje tu personalidad
            con carillas de porcelana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
