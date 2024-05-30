import React from "react";
import Parralax from "../../assets/Somos una clinica especializada en diseno de sonrisa.webp";
import { Parallax } from "react-parallax";

const Contact: React.FC = () => {
  return (
    <main>
      <Parallax
        bgImage={Parralax}
        className="h-[300px] sm:h-[500px] md:h-[800px]"
        bgImageAlt="Somos una clínica especializada en diseño de sonrisa con procedimientos no invasivos con técnicas y equipo de primer nivel en Tijuana "
        strength={-380}
      />
    </main>
  );
};

export default Contact;
