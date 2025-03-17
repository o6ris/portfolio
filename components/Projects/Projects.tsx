"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import myProjects from "@/modules/clients/utils/myProjects";

function Projects() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 p-2">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
        My projects
      </h2>
      <section className="grid gap-6 md:grid-flow-col md:grid-rows-2 ">
        {myProjects.map((project, i) => {
          return (
            <motion.article
              key={i}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 5 }} // Slow scale-up over 5s
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              onClick={() => router.push(project.internalLink)}
              className="rounded-lg bg-gradiant-primary shadow-purple-3xl p-1 cursor-pointer xl:h-56 xl:w-lg"
            >
              <div className="relative h-full rounded-sm bg-slate-950 xl:p-4 ">
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
                  <p className="text-white text-sm line-clamp-3">
                    {project.summary}
                  </p>
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
    </div>
  );
}

export default Projects;
