import React from 'react';
import Play from '../assets/icons/Play.svg'; // Asegúrate de reemplazar esto con la ruta correcta a tu imagen Play

interface PlayButtonProps {
  playVideo: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ playVideo }) => (
  <div className="absolute animate-fade-left animate-delay-1000 size-52 bottom-36 right-[700px] bg-pink-600 rounded-full flex items-center justify-center">
    <div className="size-36 bg-gradient-to-l from-pink-600 via-pink-400 to-blue-400  rounded-full flex items-center justify-center">
      <img
        onClick={playVideo}
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        src={Play}
        alt="Play"
      />
    </div>
  </div>
);

export default PlayButton;