import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
// import imagenA from "../../assets/A dental implant it's a procedure that requires an expert in odontology and aesthetic dentistry.png";
// import imagenB from "../../assets/Una sonrisa completa y sana permite que disfrutes del comer y hablar con libertad y comodidad.png";

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
            <h1 className="text-[#5C9BC0] mb-8 font-bold">(Stay Up To Date)</h1>
            <h2>Become A Style Insider</h2>
            <p className="text-xl">
              Join The Zoe Report’s exclusive email list for the latest trends,
              shopping guides, celebrity style, and more.
            </p>
            <form onSubmit={HandleSubmit} className="py-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="border-b border-black w-full h-12"
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
          <p className="text-7xl float-left mr-4 text-[#E72381]">H</p>
          <p className="text-xl">
            oy nos gustaría que nos acompañaras a conocer como en nuestra
            clínica estética trasformamos la sonrisa de nuestra paciente con una
            sonrisa bella con un aspecto más juvenil, que buscaba tener una
            sonrisa con más proyección, elegante y sofisticada que reflejara tu
            seguridad y madurez.
          </p>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Antes de Bites CDS
          </h1>
          <br />
          <br />
          <p className="text-xl">
            A través de nuestro diseño de carillas de porcelana creamos para
            nuestra paciente una sonrisa pensada en su gusto y personalidad, que
            fuera deslumbrante y que armonizara perfectamente con sus belleza
            faciales.
          </p>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            A través de nuestro diseño de carillas de porcelana creamos para
            nuestra paciente una sonrisa pensada en su gusto y personalidad, que
            fuera deslumbrante y que armonizara perfectamente con sus belleza
            faciales.
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
            carillas de porcelana ya que deseaba un aspecto natural, duradero y
            sofisticado y nuestras carillas de porcelana al ser elaboradas en
            laboratorio garantizan una alta estética y durabilidad.
          </p>
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
            <br />
            <br />
            El siguiente paso fue enviar al laboratorio para crear las carillas
            de porcelana con todas las especificaciones acordadas en la cita.
          </p>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            El siguiente paso fue enviar al laboratorio para crear las carillas
            de porcelana con todas las especificaciones acordadas en la cita.
          </h1>
          <br />
          <br />
          <p className="text-xl">
            El siguiente paso fue enviar al laboratorio para crear las carillas
            de porcelana con todas las especificaciones acordadas en la cita.
            <br />
            <br />
            Comenzamos primero con una limpieza profunda y preparáramos la
            superficie de sus dientes donde removimos un poco el esmalte frontal
            de los dientes para ahí mismo poder aplicar el pegamento dental y
            colocar las carillas de porcelana sobre el diente. Finalizamos esta
            trasformación con un detallado y pulido para que queden
            perfectamente estéticas.
            <br />
            <br />
            Nuestra paciente quedo muy emocionada por su nueva sonrisa, y
            nosotros más que contentos de poder hacer posible una sonrisa soñada
            en nuestra clínica estética.
          </p>
          <br />
          <br />
          <h1 className="text-[#E72381] text-3xl font-bold">
            Si te gusto esta trasformación de sonrisa con carillas de porcelana
            te invitamos a agendar tu cita de valoración para trabajar juntos en
            crear tu sonrisa soñada.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section5;
