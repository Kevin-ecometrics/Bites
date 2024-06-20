import React from "react";
import { Servicioshigienistas } from "../../datas/TaskInformation";
import { Serviciosesteticos } from "../../datas/Task2";
import poligono from "../../assets/poligon.svg";
import poligono2 from "../../assets/Polygon 2.svg";
import { useTranslation } from "react-i18next";
const Task: React.FC = () => {
  const task = Servicioshigienistas();
  const task2 = Serviciosesteticos();

  const { t } = useTranslation();
  return (
    <main className="md:w-[90%] mx-auto py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-4">
        <div className="border border-blue-400">
          {" "}
          <div className="bg-[#6BBAE9] h-32 px-16 text-white items-center flex justify-center border border-blue-400">
            <h1 className="text-center font-poorstory text-4xl">
              {t("higienicos")}
            </h1>{" "}
            <img
              src={poligono}
              className="transform translate-y-[85px] absolute"
            />
          </div>
          {task.map((task, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center mt-7 px-4 gap-8 justify-start md:justify-center py-4 pb-4"
            >
              <a href={task.link}>
                <img
                  src={task.image}
                  className="size-32 rounded-full"
                  alt={task.alt}
                  title={task.alt}
                />
              </a>

              <div className="flex flex-col pb-4">
                <a
                  href={task.link}
                  className="text-black hover:text-blue-500 hover:underline font-poorstory text-2xl"
                >
                  {" "}
                  {task.title}
                </a>
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
              {t("esteticos")}
            </h1>{" "}
            <img
              src={poligono2}
              className="transform translate-y-[85px] absolute"
            />
          </div>
          {task2.map((task, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center mt-7 px-4 gap-8 justify-start md:justify-center py-4 pb-4"
            >
              <img
                src={task.image}
                className="size-16 bg-pink-500 rounded-full p-4 "
                alt={task.alt}
                title={task.alt}
              />
              <div className="flex flex-col pb-4">
                <a
                  href={task.link}
                  className="text-black hover:text-pink-500 hover:underline font-poorstory text-2xl"
                >
                  {task.title}
                </a>
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
