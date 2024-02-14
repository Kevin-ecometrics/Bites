import React from "react";
import task from "../datas/TaskInformation";
import poligono from "../assets/poligon.svg";
import poligono2 from "../assets/Polygon 2.svg";
const Task: React.FC = () => {
  return (
    <main className="flex flex-col gap-8 md:flex-row items-center justify-center  pb-8">
      <div className="h-auto w-[360px] md:w-[500px] text-white items-center relative border rounded-b-3xl border-blue-400">
      <div className="bg-blue-400 block sm:hidden h-32 w-full md:w-[500px] text-white items-center flex justify-center relative">
          <h1 className="w-96 text-center font-poorstory text-4xl">
            Lorem ipsum dolor sit amet
          </h1>
          <img
            src={poligono}
            className="transform translate-y-[85px] absolute"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 px-12 md:px-0 mt-12">
          {task.map((task, index) => (
            <div key={index} className="flex items-center mt-4 px-4 gap-8 justify-center  pb-4">
              <img
                src={task.image}
                className="size-16 rounded-full"
                alt="avatar"
              />
              
              <div className="flex flex-col pb-4">
                <span className="text-black font-poorstory text-2xl">{task.title}</span>
                <span className="text-gray-500 font-poppins text-base">{task.paragraph}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-auto w-[360px] md:w-[500px] text-white items-center relative border rounded-b-3xl border-pink-600">
      <div className="bg-pink-600 block sm:hidden h-32 w-full md:w-[500px] text-white items-center flex justify-center relative">
          <h1 className="w-96 text-center font-poorstory text-4xl">
            Lorem ipsum dolor sit amet
          </h1>
          <img
            src={poligono2}
            className="transform translate-y-[85px] absolute"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 mt-12">
          {task.map((task, index) => (
            <div key={index} className="flex items-center mt-4 px-4 gap-8 justify-center  pb-4">
            <img
                src={task.image}
                className="size-16 rounded-full"
                alt="avatar"
              />
              <div className="flex flex-col pb-4">
                <span className="text-black font-poorstory text-2xl">{task.title}</span>
                <span className="text-gray-500 font-poppins text-base">{task.paragraph}</span>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </main>
  );
};

export default Task;
