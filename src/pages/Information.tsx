import { useState } from "react";
import info1 from "../assets/Info1.png";
import info2 from "../assets/Info2.png";
import Play from "../assets/icons/Play.svg";
// import video from "../assets/video/video_hero.mp4";
import diente from "../assets/icons/diente.svg";
import diente2 from "../assets/icons/diente2.svg";
import check from "../assets/icons/check.svg";
export const Information = (): JSX.Element => {
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    setPlaying(true);
  };

  const closeModal = () => {
    setPlaying(false);
  };
  return (
    <div className="h-screen">
      <div className="w-[1045px] h-32 bg-blue-400 rounded-xl mx-auto"></div>
      <div className="grid grid-cols-2 w-[1045px] mx-auto">
        <div className="my-12">
          <img
            className="animate-fade-right animate-delay-300"
            src={info1}
            alt=""
          />
          <img
            className="top-[1450px] animate-fade-right animate-delay-500 hidden xl:block left-[200px] absolute"
            src={info2}
            alt=""
          />
          <div className="absolute animate-fade-right animate-delay-1000 size-42  left-[450px] top-[1400px] bg-purple-500 rounded-full flex items-center justify-center">
            <div className="size-36 bg-purple-500  rounded-full flex items-center justify-center">
              <img
                onClick={playVideo}
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src={Play}
                alt={Play}
              />
            </div>
          </div>
          <div className="flex justify-center ml-40 my-8 items-center gap-4">
            <img
              src={diente2}
              className="size-16 px-2 rounded-2xl bg-blue-500"
            />
            <div className="text-white rounded-2xl bg-blue-500 w-32 h-16 p-2 flex text-2xl items-center justify-center">
              xxxxx
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="text-pink-600 text-2xl font-normal font-poppins">
            Lorem ipsum dolor{" "}
          </div>

          <div className="text-black text-4xl font-normal font-poppins">
            Lorem ipsum dolor{" "}
          </div>
          <div className="flex gap-8 my-4">
            <img src={diente} className="size-16 px-2 rounded-2xl" />
            <div className="w-96 h-24 text-black text-2xl font-normal font-poppins">
              Lorem ipsum dolor sit amet consectetur adipiscing elit porta
              vivamus congue
            </div>
          </div>
          <div className="w-96 h-32 text-black text-2xl font-normal font-['Poppins']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          <div className="flex gap-6 mt-10">
            <img src={check} alt="" />
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>
          <div className="flex gap-6">
            <img src={check} alt="" />
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>
          <div className="flex gap-6">
            <img src={check} alt="" />
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>
          <div className="flex gap-6">
            <img src={check} alt="" />
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>
          <div className="flex gap-6">
            <img src={check} alt="" />
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>
          <button className="text-white text-lg py-4 px-12 hover:bg-pink-500 my-8 rounded-xl font-bold font-poppins bg-pink-600">
            MORE
          </button>
        </div>
      </div>
      <div className=" mx-auto py-12 text-8xl font-bold font-poppins flex-col flex justify-center items-center">
        <span className="text-pink-600">x,xxx,xxx</span>
        <span className="text-xl">Lorem ipsum dolor sit amet consectetur.</span>
      </div>
      {playing && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/903365181?h=009fe878dc"
            width="640"
            height="360"

          ></iframe>
        </div>
      )}
    </div>
  );
};
