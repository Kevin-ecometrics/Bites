import React from "react";
interface CardServiceProps {
    date: string;
    comments: string;
    image: string;
}
const CardService: React.FC<CardServiceProps> = ({date, comments, image}) => {
  return (
    <div className="p-12">
      <div className="w-80 bg-white border border-gray-200 rounded-xl shadow">
        <a href="#">
          <img className="w-80 h-64" src={image} />
        </a>
        <div className="p-4">
          <span className="font-roboto font-light text-xs text-indigo-600">
            {date}
          </span>
          <ul>
            <li className="text-black text-2xl font-normal font-poorstory">
             {comments}{" "}
            </li>
            <li className="text-black text-2xl font-normal font-poorstory">
            {comments}{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardService;
