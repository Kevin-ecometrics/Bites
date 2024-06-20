import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Avatar from "../../assets/icons/avatar.png";
import Hero from "../../assets/Somos Bites CreadoRes de Sonrisa los numero uno en veneers en Tijuana.webp";
const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "The best dental care I have ever experienced! Professional, courteous, and super friendly made me feel like family… would highly recommend to anyone!!! Such a pleasant time here. ",
      rating: 5,
      name: "Edgar Enrique Lopez",
      avatar: Avatar,
    },
    {
      text: "Gracias a bites por hacer mi visita de dentista la mejor, las recomiendo mil veces por su excelente trabajo y profesionalismo.",
      rating: 5,
      name: "Vivienne Miranda",
      avatar: Avatar,
    },
    {
      text: "They were so gentle, and the office is beautiful. More like a spa then a dentista. They even put an eye mask on me while they worked",
      rating: 5,
      name: "Clara Banda",
      avatar: Avatar,
    },
    {
      text: "I could not be happier with my new smile!! These ladies are so kind, gentle and go above and beyond. Wonderful experience and so happy!",
      rating: 5,
      name: "Jennifer Foerster ",
      avatar: Avatar,
    },
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
        src={Hero}
        className="w-screen h-[650px] md:h-[550px]"
        alt="En Bites creamos sonrisas espectaculares y saludables"
        title="En Bites creamos sonrisas espectaculares y saludables"
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
          <motion.h1 className="text-white text-xl md:text-4xl font-poppins font-light mb-8 text-center">
            {reviews[current].text}
          </motion.h1>
          <div className="flex">
            {[...Array(reviews[current].rating)].map((i) => (
              <FaStar key={i} className="text-white mb-4 size-10" />
            ))}
          </div>
          <p className="text-white mb-8 text-2xl">{reviews[current].name}</p>
        </motion.div>
        <button onClick={handleNext}>
          <FaArrowRight className="text-white text-4xl" />
        </button>
      </div>
    </main>
  );
};

export default Reviews;
