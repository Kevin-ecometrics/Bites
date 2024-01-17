import React from "react";
import CardService from "../components/CardService";

const Service: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center flex-col mt-8">
        <h1 className="font-normal font-poppins text-base text-pink-600">Lorem ipsum dolor sit amet consectetur</h1>
        <h3 className="text-black text-6xl font-normal font-poorstory">Lorem ipsum dolor sit amet</h3>
        <div className="flex flex-col md:flex-row">
        <CardService comments="Lorem ipsum dolor sit amet, " date="22 Mar, 2020  .  2 comments" image="https://source.unsplash.com/random" />
        <CardService comments="Lorem ipsum dolor sit amet, " date="22 Mar, 2020  .  2 comments" image="https://source.unsplash.com/random" />
        <CardService comments="Lorem ipsum dolor sit amet, " date="22 Mar, 2020  .  2 comments" image="https://source.unsplash.com/random" />
        </div>
      </div>
    </main>
  );
};

export default Service;
