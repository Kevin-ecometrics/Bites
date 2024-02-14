import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Avatar from "../../assets/icons/avatar.png"
const Reviews: React.FC = () => {
    const reviews = [
        { text: "Review 1: This is a longer review text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 5, name: "John Doe", avatar: Avatar },
        { text: "Review 2: This is another longer review text. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4, name: "Jane Doe", avatar: Avatar },
        { text: "Review 3: Here's some more lengthy review text. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", rating: 3, name: "Jim Doe", avatar: Avatar},
        { text: "Review 4: And finally, this is the last long review text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", rating: 2, name: "Jill Doe", avatar: Avatar },
    ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  };

  return (
    <main className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <img
        src="/src/assets/hero_about.png"
        className="w-screen h-[650px] md:h-[550px]"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-between px-12">
        <button onClick={handlePrev}>
          <FaArrowLeft className="text-white text-4xl" />
        </button>
        <motion.div
          key={current}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 className="text-white text-4xl font-poppins font-light mb-8 text-center">
            {reviews[current].text}
          </motion.h1>
          <div className="flex">
            {[...Array(reviews[current].rating)].map((i) => (
              <FaStar key={i} className="text-white mb-4 size-10" />
            ))}
          </div>
          <p className="text-white mb-8 text-2xl">{reviews[current].name}</p>
            <img src={reviews[current].avatar} alt="" className="w-20 h-20 rounded-full" />
        </motion.div>
        <button onClick={handleNext}>
          <FaArrowRight className="text-white text-4xl" />
        </button>
      </div>
    </main>
  );
};

export default Reviews;
