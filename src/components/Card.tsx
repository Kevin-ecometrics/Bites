import React from "react";

interface CardProps {
  image: string;
  title: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ image, title, paragraph }) => {
  return (
    <div className="bg-white m-2 p-4 shadow-md flex justify-center items-center flex-col rounded-xl">
      <img
        src={image}
        alt={title}
        className="size-28 bg-pink-500 rounded-full relative"
      />
      <h2 className="text-black text-3xl my-4 text-center font-normal font-poppins">{title}</h2>
      <p className="mt-3 text-neutral-400 my-4 text-center text-xl font-normal font-poppins">
        {paragraph}
      </p>
      <div className="hidden xl:block size-28 bg-[#E72381] to-transparent rounded-full transform translate-y-[72px]" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />
    </div>
  );
};

export default Card;
