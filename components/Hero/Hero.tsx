"use client";

import BasicButton from "@/core/ui/Button/BasicButton";
import Title from "../Title/Title";
import { motion } from "framer-motion";

export default function Hero() {
  const title = "Hi I'm Tsiry!";
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="flex items-center justify-center w-full h-screen"
      style={{
        backgroundImage: "url('/tsiry-profile.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-45%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
              backgroundImage: "linear-gradient(to right, #701a75, #9333ea)",
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{
              backgroundImage:
                "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="ml-2 text-2xl font-bold flex justify-start font-[family-name:var(--font-lexend)] bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-100 text-center cursor-default"
          >
            {title}
          </motion.h2>
          <Title />
        </div>
        <div className="flex gap-6 items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.5,
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <BasicButton
              className="border border-2 border-fuchsia-900 rounded-2xl shadow-lg shadow-fuchsia-900/50 text-fuchsia-900"
              variant="bordered"
              content="About me"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.5,
              delay: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <BasicButton
              className="bg-gradiant-primary rounded-2xl shadow-lg shadow-fuchsia-900/50 text-white"
              variant="bordered"
              content="Projects"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
