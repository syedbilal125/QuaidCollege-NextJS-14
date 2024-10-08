import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const Fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className=" py-2 flex items-center justify-center  overflow-hidden">
      <motion.h1
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className={``}
      >
        {text.split(" ").map((letter, index) => (
          <motion.span
            variants={singleWord}
            key={index + letter}
            className="inline-block"
          >
            {letter}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
