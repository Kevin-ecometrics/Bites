import React from "react";

const TerminosPage: React.FC = () => {
  return (
    <div className="mx-auto md:w-[70%] md:py-8 py-4 text-xl md:text-2xl px-8">
      <p className="mb-4">
        La página de
        <strong className="text-pink-600">
          {" "}
          bitescreadoresdesonrisas.com
        </strong>{" "}
        contiene el contacto directo con nuestro personal de atención al
        cliente.
      </p>
      <p className="mb-4">
        Toda reservación realizada en la página es directa a nuestra agenda en
        la recepción.
      </p>
      <p className="mb-4">
        Las citas son confirmadas por teléfono y deberán ser atendidas por el
        cliente en el periodo de 48hrs a 24hrs antes de la cita.
      </p>
      <p className="mb-4">
        Citas no confirmadas podrán ser consideradas como canceladas por el
        cliente.
      </p>
      <p className="mb-4">
        Toda situación que se presente por cambio o devolución deberán ser
        notificado por correo electrónico a{" "}
        <strong className="text-pink-600 break-words ">
          draanyimanchola@bitescreadoresdesonrisas.com
        </strong>{" "}
        enviando descripción del problema o razón de la cancelación.
      </p>
    </div>
  );
};

export default TerminosPage;
