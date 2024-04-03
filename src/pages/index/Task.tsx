import React from "react";
import task from "../../datas/TaskInformation";
import task2 from "../../datas/Task2";
import poligono from "../../assets/poligon.svg";
import poligono2 from "../../assets/Polygon 2.svg";
const Task: React.FC = () => {
  return (
    <main className="w-[90%] mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-4">
        <div className="border border-blue-400">
          {" "}
          <div className="bg-[#6BBAE9] h-32 px-16 text-white items-center flex justify-center border border-blue-400">
            <h1 className="text-center font-poorstory text-4xl">
              Servicios higienistas
            </h1>{" "}
            <img
              src={poligono}
              className="transform translate-y-[85px] absolute"
            />
          </div>
          {task.map((task, index) => (
            <div
              key={index}
              className="flex items-center mt-7 px-4 gap-8 justify-center py-4 pb-4"
            >
              <img
                src={task.image}
                className="size-16 rounded-full"
                alt="avatar"
              />

              <div className="flex flex-col pb-4">
                <span className="text-black font-poorstory text-2xl">
                  {task.title}
                </span>
                <span className="text-gray-500 font-poppins text-base">
                  {task.paragraph}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-[#FE81BD]">
          {" "}
          <div className="bg-[#FE81BD] h-32 px-16 text-white items-center flex justify-center">
            <h1 className="text-center font-poorstory text-4xl">
              Servicios estéticos{" "}
            </h1>{" "}
            <img
              src={poligono2}
              className="transform translate-y-[85px] absolute"
            />
          </div>
          {task2.map((task, index) => (
            <div
              key={index}
              className="flex items-center mt-4 px-4 gap-8 justify-center py-4 pb-4"
            >
              <img
                src={task.image}
                className="size-16 rounded-full bg-pink-500 p-2"
                alt="avatar"
              />
              <div className="flex flex-col pb-4">
                <span className="text-black font-poorstory text-2xl">
                  {task.title}
                </span>
                <span className="text-gray-500 font-poppins text-base">
                  {task.paragraph}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Task;
