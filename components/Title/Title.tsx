"use client";

import { motion } from "framer-motion";

function Title() {
  const title = "I Love turning Ideas to life";
  const lines = title.split(" ");
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-bold text-center flex flex-wrap items-center justify-center font-[family-name:var(--font-lexend)]"
    >
      {lines.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mx-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-100 text-center cursor-default"
          initial={{ opacity: 0, y: 20, backgroundImage: "linear-gradient(to right, #701a75, #9333ea)" }}
          animate={{ opacity: 1, y: 0, backgroundImage: "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))" }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{
            y: -5,
            scale: 1.05,
            backgroundImage: "linear-gradient(to right, #701a75, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default Title;
