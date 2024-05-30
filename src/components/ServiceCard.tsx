import React from "react";
import CardService from "./CardService";
import ImageService1 from "../assets/Composite veneers enhance your smile without shaving teeth.png";
import ImageService2 from "../assets/Dental implants the ambulatory procedure that guarantees a good-looking and healthy smile.png";
import ImageService3 from "../assets/Improve your self-confidence enjoy your smile with the top-rated dentist in Tijuana Bites Creadores de Sonrisas.png";

const Service: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center flex-col mt-8">
        <h1 className="font-normal font-poppins text-center text-3xl mb-4 text-pink-600">
          Obten una sonrisa bella y saludable
        </h1>
        <h3 className="text-black text-2xl text-center md:text-6xl px-2 font-normal font-pompiere">
          En Bites podrás encontrar con todos los servicios dentales generales
        </h3>
        <div className="flex flex-col gap-0 md:gap-4 md:flex-row">
          <CardService
            comments="Las carillas dentales de composite: La solución para una sonrisa ideal. "
            hoverComments="Odontología Estética Personalizada: Desde facetas de porcelana hasta restauración oral completa..."
            date="22 Mar, 2020  .  2 comments"
            image={ImageService1}
            alt="Composite veneers combine functionality and aesthetic  "
            url="/blog/tema1"
          />
          <CardService
            comments="No solo recuperes tu sonrisa; con el implante dental, elévala al siguiente nivel.  "
            hoverComments="Cirugía y Periodoncia: Ejecutamos intervenciones especializadas..."
            date="22 Mar, 2020  .  2 comments"
            image={ImageService2}
            alt="With Bites dental implants aren't intimidating anymore "
            url="/blog/tema2"
          />
          <CardService
            comments="Descubre como obtener una sonrisa deslumbrante con blanqueamiento dental Siéntete seguro de mostrarle a todos esa gran sonrisa.  "
            hoverComments="Endodoncia y Ortodoncia: Centrándonos en procedimientos avanzados de tratamiento de conductos..."
            date="22 Mar, 2020  .  2 comments"
            image={ImageService3}
            alt="Top rated dentist in Tijuana Bites heps you  to achieve your dream smile "
            url="/blog/tema3"
          />
        </div>
      </div>
    </main>
  );
};

export default Service;
