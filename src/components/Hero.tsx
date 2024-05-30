import React from "react";
import fondo from "../assets/Somos Bites CreadoRes de Sonrisa los numero uno en veneers en Tijuana.png";
type HeroAboutProps = {
  title?: string;
};

const HeroAbout: React.FC<HeroAboutProps> = ({ title }) => {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <img
        src={fondo}
        className="w-screen h-[550px]"
        alt="En Bites creamos sonrisas espectaculares y saludables "
        title="En Bites creamos sonrisas espectaculares y saludables "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-poppins font-bold uppercase">
          {title}
        </h1>
      </div>
    </main>
  );
};
export default HeroAbout;
