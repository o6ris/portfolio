"use client";

import BasicButton from "@/core/ui/Button/BasicButton";
import Title from "../Title/Title";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
        <Title />
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
              content="About"
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
    </section>
  );
}
