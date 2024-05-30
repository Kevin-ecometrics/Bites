import React from "react";

interface CardProps {
  image: string;
  title: string;
  // paragraph: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <main>
      <div className="bg-white m-2 p-4 shadow-md flex justify-center items-center h-96 shadow-pink-300 flex-col rounded-xl relative z-10">
        <img
          src={image}
          alt={title}
          className="size-28 bg-pink-500 rounded-full relative z-10"
        />
        <h2 className="text-black text-3xl my-4 text-center font-normal font-poppins z-10">
          {title}
        </h2>
        <p className="mt-3 text-neutral-400 my-4 text-center text-xl font-normal font-poppins z-10"></p>
      </div>
      <img
        src="/src/assets/elipse.svg"
        className="translate-y-[-70px] hidden md:block lg:translate-x-52 translate-x-20 z-0 absolute"
        alt="poligono"
      />
    </main>
  );
};

export default Card;
