import React from "react";
import Parralax from "../assets/parallax.webp";
import { Parallax } from "react-parallax";

const Contact: React.FC = () => {
  return (
    <main>
      <Parallax
        bgImage={Parralax}
        className="h-[600px] w-screen"
        bgImageAlt=""
        strength={-200}

      />
    </main>
  );
};

export default Contact;
