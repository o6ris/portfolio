"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myProjects from "@/modules/clients/utils/myProjects";

function Projects() {
  return (
    <section className="grid grid-flow-col grid-rows-2 gap-6">
      {myProjects.map((project, i) => {
        return (
          <motion.article
            key={i}
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
            className="bg-red-800 h-56 p-2 w-lg rounded-lg shadow-lg bg-gradiant-primary shadow-purple-3xl"
          >
            <div className="relative p-4 h-full rounded-sm overflow-hidden bg-slate-950">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 blur-xs opacity-50"
              />
              <div className="flex flex-col gap-2 relative z-10 p-4">
                <h2 className="text-xl font-semibold text-white ">
                  {project.name}{" "}
                  <span className="text-base font-regular text-slate-700 drop-shadow-md">
                  | {project.position}
                  </span>
                </h2>
                <p className="text-white text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((el, j) => {
                    return (
                      <div
                        key={j}
                        className={
                          "bg-slate-800 p-2 h-fittext-slate-300 text-xs text-slate-500 rounded-full"
                        }
                      >
                        {el}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}

export default Projects;
