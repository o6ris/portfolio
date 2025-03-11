"use client";

import { motion } from "framer-motion";

function Title() {
  const title = "Where Ideas Come to Life";
  const lines = title.split(" ");
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-bold text-center"
    >
      {lines.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mx-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{
            y: -5,
            scale: 1.05,
            backgroundImage: "linear-gradient(to right, #701a75, #9333ea)", // Matches Tailwind's fuchsia-900 to purple-600
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
