import React from "react";
import Parralax from "../../assets/parrallax.webp";
import { Parallax } from "react-parallax";

const Contact: React.FC = () => {
  return (
    <main>
      <Parallax
        bgImage={Parralax}
        className="h-[300px] sm:h-[500px] md:h-[800px]"
        bgImageAlt="Parrallax"
        strength={-380}
      />
    </main>
  );
};

export default Contact;
