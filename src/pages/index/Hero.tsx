import { useState } from "react";
import Mask from "../../assets/Top rated dental treatments in Mexico with great technical detail.png";
import Play from "../../assets/icons/Play.svg";

export const Hero = (): JSX.Element => {
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    setPlaying(true);
  };

  const closeModal = () => {
    setPlaying(false);
  };
  return (
    <main
      className="h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/background.png)",
      }}
    >
      <div className="absolute inset-0 bg-pink-500 opacity-70" />
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block w-screen md:w-[500px] animate-fade-left animate-delay-300 h-screen overflow-hidden absolute right-0">
        <div className="border opacity-50 bg-blue-500 w-screen h-screen absolute bottom-0 left-0 rounded-full" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <img
          className="rounded-full md:animate-fade-left animate-delay-700 sm:right-56 absolute px-2 md:h-[500px] lg:h-[700px]"
          alt="The specialist Anyi Manchola makes high- detail procedures with delicacy and precision to improve   function and beauty of your teeth  "
          title="The specialist Anyi Manchola makes high- detail procedures with delicacy and precision to improve   function and beauty of your teeth  "
          src={Mask}
        />
      </div>
      <div className="absolute animate-fade-left animate-delay-1000 size-52 bottom-28 right-36 md:bottom-36 md:right-[600px] lg:right-[750px] bg-pink-600 rounded-full flex items-center justify-center">
        <div className="size-36 bg-gradient-to-l from-pink-600 via-pink-400 to-blue-400  rounded-full flex items-center justify-center">
          <img
            onClick={playVideo}
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            src={Play}
            alt={Play}
          />
        </div>
      </div>
      {playing && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/948822167?h=b161f955c9"
            width="640"
            height="360"
          ></iframe>
        </div>
      )}
    </main>
  );
};
