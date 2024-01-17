import React from "react";
import task from "../datas/TaskInformation";

const Task: React.FC = () => {
  return (
    <main className="flex items-center justify-center gap-8 pb-8">
      <div className="h-auto w-[500px] text-white items-center relative border rounded-b-3xl border-blue-400">
        <div className="grid grid-cols-1 md:grid-cols-1 mt-12">
          {task.map((task, index) => (
            <div key={index} className="flex items-center mt-4 px-4 gap-8 justify-center  pb-4">
              <img
                src={task.image}
                className="h-16 w-28 rounded-full"
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
      <div className="h-auto w-[500px] text-white items-center relative border rounded-b-3xl border-pink-600">
        <div className="grid grid-cols-1 md:grid-cols-1 mt-12">
          {task.map((task, index) => (
            <div key={index} className="flex items-center mt-4 px-4 gap-8 justify-center  pb-4">
            <img
                src={task.image}
                className="h-16 w-28 rounded-full"
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
