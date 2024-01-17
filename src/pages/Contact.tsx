import React from "react";
import Parralax from "../assets/parallax.webp";

const Contact: React.FC = () => {
  return (
    <main>
      <div
        className="h-[500px] w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Parralax})`,
        }}
      >
        <div className="flex justify-center items-center flex-col gap-8">
          {" "}
          <h1 className="text-white text-6xl font-normal font-poorstory">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <button className="w-64 h-16 hover:bg-pink-700 bg-pink-600 rounded-xl text-white">Contact Whith Us</button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
