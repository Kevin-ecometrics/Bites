import React, { useState } from "react";

interface CardServiceProps {
  date: string;
  comments: string;
  image: string;
  hoverComments: string;
  alt: string;
  url: string;
}

const CardService: React.FC<CardServiceProps> = ({
  date,
  comments,
  image,
  hoverComments,
  alt,
  url,
}) => {
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
        <a href={url}>
          <img
            className="w-80 h-64 transition duration-300 transform hover:scale-110"
            src={image}
            alt={alt}
            title={alt}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </a>

        <div className="p-4">
          <span className="font-roboto font-light text-xs text-indigo-600">
            {date}
          </span>
          <ul>
            {!isHovered && (
              <h2 className="text-black text-2xl font-normal font-poorstory">
                {comments}
              </h2>
            )}
            {isHovered && (
              <h2 className="text-black text-2xl font-normal font-poorstory">
                {hoverComments}
              </h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardService;
