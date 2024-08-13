"use client";

import { motion } from "framer-motion";

const letters = ["T", "o", "d", "o"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of each letter
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Title() {
  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-[30px] font-bold uppercase tracking-[15px] lg:text-[40px]"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default Title;
