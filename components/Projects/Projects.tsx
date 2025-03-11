"use client";

import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="grid grid-flow-col grid-rows-2 gap-6">
      <motion.article
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.2 },
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-red-800 h-56 p-6 w-lg rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-white">GrindPal</h2>
        <p className="text-white text-sm">
          A workout tracker built for efficiency, replacing spreadsheets with a
          sleek, visual interface. Track progress, log workouts, and analyze
          performance with interactive charts.
        </p>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-red-800 h-56 p-6 w-lg rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-white">My Portfolio</h2>
        <p className="text-white text-sm">
          An interactive showcase of my work, featuring a chatbot version of me
          that streams real-time responses and and call booking. Includes smooth
          animations, projects showcase and more.
        </p>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.6 },
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-red-800 h-56 p-6 w-lg rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-white">Luo</h2>
        <p className="text-white text-sm">
          A workout tracker built for efficiency, replacing spreadsheets with a
          sleek, visual interface. Track progress, log workouts, and analyze
          performance with interactive charts.
        </p>
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.8 },
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-red-800 h-56 p-6 w-lg rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold text-white">LSA</h2>
        <p className="text-white text-sm">
          An interactive showcase of my work, featuring a chatbot version of me
          that streams real-time responses and and call booking. Includes smooth
          animations, projects showcase and more.
        </p>
      </motion.article>
    </section>
  );
}

export default Projects;
