// import { useState } from "react";
// import info1 from "../../assets/Info1.png";
// import info2 from "../../assets/Info2.png";
// import Play from "../../assets/icons/Play.svg";
// import diente from "../../assets/icons/diente.svg";
// // import diente2 from "../../assets/icons/diente2.svg";
// import check from "../../assets/icons/check.svg";
// export const Information = (): JSX.Element => {
//   const [playing, setPlaying] = useState(false);

//   const playVideo = () => {
//     setPlaying(true);
//   };

//   const closeModal = () => {
//     setPlaying(false);
//   };
//   return (
//     <div className="h-auto md:h-screen px-2 mb-32">
//       <div className="w-auto sm:w-[1045px] h-32 bg-[#6BBAE9] rounded-xl mx-auto">
//         <h1 className="text-white flex justify-center items-center text-6xl py-8 font-pompiere ">
//           Nuestro trabajo
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 w-auto sm:w-[1045px] mx-auto">
//         <div className="my-12">
//           <img
//             className="animate-fade-right animate-delay-300"
//             src={info1}
//             alt={info1}
//           />
//           <img
//             className="top-[1450px] animate-fade-right animate-delay-500 hidden xl:block left-[200px] absolute"
//             src={info2}
//             alt={info2}
//           />
//           <div className="absolute animate-fade-right animate-delay-1000 size-42 -bottom-[550px] left-[100px] sm:left-[450px] sm:top-[1400px] md:left-36 lg:left-[220px] xl:left-[420px] bg-purple-500 rounded-full flex items-center justify-center">
//             <div className="size-36 bg-gradient-to-l from-pink-600 via-pink-400 to-blue-400  rounded-full flex items-center justify-center">
//               <img
//                 onClick={playVideo}
//                 className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//                 src={Play}
//                 alt={Play}
//               />
//             </div>
//           </div>
//           {/* <div className="flex justify-center sm:justify-end my-8 items-center px-20 gap-4">
//             <img
//               src={diente2}
//               className="size-16 px-4 rounded-2xl bg-blue-500"
//             />
//             <div className="text-white rounded-2xl bg-blue-500 w-32 h-16 p-3 text-center text-2xl">
//               xxxxx
//             </div>
//           </div> */}
//         </div>
//         <div className="my-12 px-12 text-justify">
//           <div className="text-pink-600 text-2xl font-normal font-poppins">
//             Acerca de nuestra labor
//           </div>

//           <div className="text-black text-4xl font-normal font-poppins">
//             <h1 className="font-pompiere text-5xl">
//               Bites Creadores de Sonrisas{" "}
//             </h1>
//           </div>
//           <div className="flex gap-8 my-4">
//             <img src={diente} className="size-16 px-2 rounded-2xl" />
//             <div className=" text-black text-2xl font-normal font-poppins">
//               Bienvenido a Bites Creadores de Sonrisas, tu destino confiable
//               para transformar y cuidar tu salud dental.
//             </div>
//           </div>
//           <div className="text-black text-2xl font-normal font-['Poppins']">
//             Ofrecemos tratamientos dentales excepcionales, y una experiencia
//             única. Nuestra clínica se ha convertido en un destino popular para
//             el turismo dental, atrayendo pacientes de todo el mundo.
//           </div>
//           <div className="flex gap-6 mt-10">
//             <img src={check} alt="" />
//             <span>Obten una sonrisa bella y saludable</span>
//           </div>
//           <div className="flex gap-6">
//             <img src={check} alt="" />
//             <span>Equipo dental profesional y de calidad</span>
//           </div>
//           <div className="flex gap-6">
//             <img src={check} alt="" />
//             <span>Servicio exclusivo para una experiencia cómoda.</span>
//           </div>
//           <div className="flex gap-6">
//             <img src={check} alt="" />
//             <span>Desde carillas hasta rehabilitación oral</span>
//           </div>
//           <div className="flex gap-6">
//             <img src={check} alt="" />
//             <span>Tratamientos avanzados y ortodoncia personalizada</span>
//           </div>
//           <div className="flex justify-center items-center md:justify-start">
//             <a
//               href="/servicios"
//               className="text-white text-lg py-4 px-12 hover:bg-pink-500 my-8 rounded-xl font-bold font-poppins bg-[#FF77B8]"
//             >
//               Ver más
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="px-4 mx-auto text-5xl font-bold font-poppins flex-col flex justify-center items-center">
//         {/* <span className="text-pink-600">x,xxx,xxx</span> */}
//         {/* <span className="text-xl">Lorem ipsum dolor sit amet consectetur.</span> */}
//       </div>
//       {playing && (
//         <div
//           className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
//           onClick={closeModal}
//         >
//           <iframe
//             title="vimeo-player"
//             src="https://player.vimeo.com/video/930045677?h=05b342d3b0"
//             width="640"
//             height="860"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

import { useState } from "react";
import info1 from "../../assets/Info1.png";
import info2 from "../../assets/Info2.png";
import Play from "../../assets/icons/Play.svg";
import diente from "../../assets/icons/diente.svg";
import diente2 from "../../assets/icons/diente2.svg";
import check from "../../assets/icons/check.svg";
export const Information = (): JSX.Element => {
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    setPlaying(true);
  };

  const closeModal = () => {
    setPlaying(false);
  };
  return (
    <main className="w-[80%] mx-auto lg:h-[850px]">
      <div className="bg-[#6BBAE9] rounded-b-[30px]">
        <h1 className="text-white flex justify-center items-center text-6xl py-4 font-pompiere ">
          Nuestro trabajo
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-4 ">
        <div className="">
          <img
            src={info1}
            className="translate-x-0 md:translate-x-36 w-96"
            alt=""
          />
          <img
            src={info2}
            className="h-[340px] hidden lg:block translate-x-[-60px] translate-y-[-170px]"
            alt=""
          />
          <div className="size-32 absolute bg-gradient-to-l from-pink-600 via-pink-400 to-blue-400 translate-x-16 translate-y-[-180px] md:translate-x-[260px] md:translate-y-[-280px] lg:translate-x-40 lg:translate-y-[-580px]  rounded-full flex items-center justify-center">
            <img
              onClick={playVideo}
              className="size-16 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src={Play}
              alt={Play}
            />
          </div>
          <div className="flex gap-4 lg:justify-start justify-center items-center py-4 lg:py-0 lg:translate-x-72 lg:translate-y-[-240px]">
            <a href="/galeria">
              <img
                src={diente2}
                className="size-16 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500"
              />
            </a>
            <a
              className="bg-blue-400 hover:bg-blue-500 rounded-xl text-white font-poppins font-light p-4"
              href="https://wa.me/+526633249611/?text=Quiero obtener mas información sobre sus servicios."
            >
              contáctanos ya
            </a>
          </div>
          {playing && (
            <div
              className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
              onClick={closeModal}
            >
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/930045677?h=05b342d3b0"
                width="640"
                height="560"
              ></iframe>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <div className="md:px-12 text-justify">
            <div className="text-pink-600 text-center lg:text-start text-lg md:text-2xl font-normal font-poppins">
              Acerca de nuestra labor
            </div>

            <div className="text-black text-4xl font-normal font-poppins">
              <h1 className="font-pompiere text-3xl md:text-5xl text-center lg:text-start">
                Bites Creadores de Sonrisas{" "}
              </h1>
            </div>
            <div className="flex gap-8 my-4 ">
              <img
                src={diente}
                className="size-16 px-2 rounded-2xl hidden md:block"
              />
              <div className=" text-black md:text-2xl font-normal font-poppins">
                Bienvenido a Bites Creadores de Sonrisas, tu destino confiable
                para transformar y cuidar tu salud dental.
              </div>
            </div>
            <div className="text-black md:text-2xl text-center lg:text-start font-normal font-poppins">
              Ofrecemos tratamientos dentales excepcionales, y una experiencia
              única. Nuestra clínica se ha convertido en un destino popular para
              el turismo dental, atrayendo pacientes de todo el mundo.
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mt-2 mb-2">
              <img src={check} alt="" />
              <span>Obten una sonrisa bella y saludable</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-2">
              <img src={check} alt="" />
              <span>Equipo dental profesional y de calidad</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-2">
              <img src={check} alt="" />
              <span>Servicio exclusivo para una experiencia cómoda.</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-2">
              <img src={check} alt="" />
              <span>Desde carillas hasta rehabilitación oral</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mb-2">
              <img src={check} alt="" />
              <span>Tratamientos avanzados y ortodoncia personalizada</span>
            </div>
            <div className="flex justify-center items-center lg:justify-start">
              <a
                href="/servicios"
                className="text-white text-lg py-4 px-12 hover:bg-pink-500 my-8 rounded-xl font-bold font-poppins bg-[#FF77B8]"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Information;
