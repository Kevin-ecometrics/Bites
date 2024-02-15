import React from "react";
import CardService from "./CardService";

const Service: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center flex-col mt-8">
        <h1 className="font-normal font-poppins text-3xl mb-4 text-pink-600">
          Obten una sonrisa bella y saludable
        </h1>
        <h3 className="text-black text-6xl px-2 font-normal font-pompiere">
          En Bites podrás encontrar con todos los servicios dentales generales
        </h3>
        <div className="flex flex-col gap-0 md:gap-4 md:flex-row">
          <CardService
            comments="Estética Dental Personalizada Desde carillas de porcelana hasta rehabilitación oral..., "
            hoverComments="Odontología Estética Personalizada: Desde facetas de porcelana hasta restauración oral completa..."  
            date="22 Mar, 2020  .  2 comments"
            image="/src/assets/image_card.png"
          />
          <CardService
            comments="Cirugía y Periodoncia Realizamos procedimientos especializados... "
            hoverComments="Cirugía y Periodoncia: Ejecutamos intervenciones especializadas..."
            date="22 Mar, 2020  .  2 comments"
            image="/src/assets/image_card.png"
          />
          <CardService
            comments="Endodoncia y Ortodoncia Con enfoque en tratamientos de conducto avanzados... "
            hoverComments="Endodoncia y Ortodoncia: Centrándonos en procedimientos avanzados de tratamiento de conductos..."
            date="22 Mar, 2020  .  2 comments"
            image="/src/assets/image_card.png"
          />
        </div>
      </div>
    </main>
  );
};

export default Service;
