import React from "react";
import Parralax from "../../assets/Somos una clinica especializada en diseno de sonrisa.webp";
import { Parallax } from "react-parallax";

const Contact: React.FC = () => {
  return (
    <main>
      <Parallax
        bgImage={Parralax}
        className="h-[500px] w-full bg-cover bg-center"
        bgImageAlt="Somos una clínica especializada en diseño de sonrisa con procedimientos no invasivos con técnicas y equipo de primer nivel en Tijuana "
        strength={-750}
      />
    </main>
  );
};

export default Contact;
