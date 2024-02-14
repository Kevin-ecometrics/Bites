import React from "react";
import Parralax from "../../assets/parallax.webp";
import { Parallax } from "react-parallax";

const Contact: React.FC = () => {
  return (
    <main>
      <Parallax
        bgImage={Parralax}
        className="h-[550px]"
        bgImageAlt=""
        strength={-380}

      />
    </main>
  );
};

export default Contact;
