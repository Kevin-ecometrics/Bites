import React, { useState } from 'react';

interface CardServiceProps {
  date: string;
  comments: string;
  image: string;
  hoverComments: string;
}

const CardService: React.FC<CardServiceProps> = ({ date, comments, image, hoverComments }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="py-12">
      <div className="w-80 bg-white border border-gray-200 rounded-xl shadow">
        <img
          className="w-80 h-64 transition duration-300 transform hover:scale-110"
          src={image}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="p-4">
          <span className="font-roboto font-light text-xs text-indigo-600">{date}</span>
          <ul>
            {!isHovered && (
              <li className="text-black text-2xl font-normal font-poorstory">{comments}</li>
            )}
            {isHovered && (
              <li className="text-black text-2xl font-normal font-poorstory">{hoverComments}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardService;