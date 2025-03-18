"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hobbies from "../Hobbies/Hobbies";
import TasksList from "./TasksList";

function AboutMe() {
  // TODO: Fix this one day
  // const [scrollY, setScrollY] = useState(0);
  // const [documentHeight, setDocumentHeight] = useState(0);

  // // Update scrollY on scroll
  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   setDocumentHeight(
  //     document.documentElement.scrollHeight - window.innerHeight
  //   );
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const height = Math.min((scrollY / documentHeight) * 100, 100);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col gap-6 p-2 md:p-10 lg:p-20">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
        About me
      </h2>
      {/* ORIGINS */}
      <section className="grid items-center relative gap-4 md:gap-12 md:grid-cols-2 ">
        <div
          className="absolute h-full top-0 bg-gradient-to-b from-purple-800 to-purple-500 rounded-full shadow-purple-3xl md:w-4 md:left-1/2 md:transform md:-translate-x-1/2"
          // animate={{ height: `${height}%` }}
          // initial={{ height: 0 }}
          // transition={{ duration: 0.5 }}
        ></div>
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: isDesktop ? 0.8 : 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: isDesktop ? 0.5 : 0.3,
                delay: isDesktop ? 0.2 : 0,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-slate-400">
            Origins: From Madagascar to France{" "}
            <span className="text-sm text-slate-400!">
              {!isDesktop && "(1991 - 2009)"}
            </span>
          </h3>
          <p>
            I was born in <strong>Madagascar</strong>, where I spent my
            childhood before moving to <strong>France</strong> at 17 to pursue
            my studies. Growing up with both <strong>Malagasy</strong> and{" "}
            <strong>French</strong> cultures shaped my perspective and{" "}
            <strong>opened my mind</strong>, making me more{" "}
            <strong>respectful</strong> of the world and different{" "}
            <strong>human thoughts</strong>.
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
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {isDesktop && (
            <div>
              <p className="text-5xl font-black">1991 - 2009</p>
            </div>
          )}
        </motion.article>

        {/* 1rst CARRERE */}
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {isDesktop && (
            <div className="flex justify-end">
              <p className="text-5xl font-black">2010 - 2022</p>
            </div>
          )}
        </motion.article>
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: isDesktop ? 0.8 : 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: isDesktop ? 0.5 : 0.3,
                delay: isDesktop ? 0.2 : 0,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            The Creative Journey: From Cameras to Content{" "}
            <span className="text-sm text-slate-400!">
              {!isDesktop && "(2010-2022)"}
            </span>
          </h3>
          <p>
            My career began in <strong>audiovisual production</strong>, where I
            studied <strong>cinematography</strong> at{" "}
            <strong>3IS (France)</strong> and obtained a{" "}
            <strong>bachelor&apos;s degree</strong> as a{" "}
            <strong>camera operator</strong>. In <strong>2014</strong>, I joined{" "}
            <strong>SOSAV</strong>, a company specializing in{" "}
            <strong>tech repair guides</strong>, as a{" "}
            <strong>Graphic & Video Content Creator</strong>.
          </p>
          <p>
            Over the years, I took on more responsibilities and eventually
            became <strong>Content Manager</strong>, leading a team of{" "}
            <strong>3</strong> where I:
          </p>

          <section className="flex flex-col gap-4">
            <TasksList
              text={
                <>
                  Produced <strong>high-quality photo & video tutorials</strong>{" "}
                  to make <strong>tech repairs</strong> more accessible.
                </>
              }
              iconName="Camera"
            />
            <TasksList
              text={
                <>
                  Optimized <strong>content strategy</strong>, growing{" "}
                  <strong>SOSAV&&apos;s YouTube channel</strong>
                  from a few thousand to <strong>over 50K subscribers</strong>.
                </>
              }
              iconName="ChevronsUp"
            />
            <TasksList
              text={
                <>
                  Managed <strong>team workflows</strong>,{" "}
                  <strong>content planning</strong>, and{" "}
                  <strong>budgeting</strong>.
                </>
              }
              iconName="Workflow"
            />
            <TasksList
              text={
                <>
                  Worked extensively with <strong>Photoshop</strong>,{" "}
                  <strong>Premiere</strong>, <strong>After Effects</strong>,{" "}
                  <strong>Illustrator</strong>, and <strong>Prestashop</strong>.
                </>
              }
              iconName="BookImage"
            />
          </section>
        </motion.article>

        {/* 2nd CARRERE */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: isDesktop ? 0.8 : 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: isDesktop ? 0.5 : 0.3,
                delay: isDesktop ? 0.2 : 0,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            Transition to Web Development: A New Challenge{" "}
            <span className="text-sm text-slate-400!">
              {!isDesktop && "(2022-2024)"}
            </span>
          </h3>
          <p>
            Over time, I became fascinated by <strong>technology</strong>. So I
            started learning <strong>web development</strong>, experimenting
            with <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
            <strong>JavaScript</strong>, and soon realized I wanted to take it
            further.
          </p>
          <p>
            In <strong>2022</strong>, I made the decision to fully transition
            into <strong>web development</strong> and completed an intensive{" "}
            <strong>5-month full-stack bootcamp</strong> at{" "}
            <strong>Wild Code School (France)</strong>, focusing on{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and{" "}
            <strong>SQL databases</strong>.
          </p>
          <p>
            In <strong>2023</strong>, I worked for{" "}
            <strong>Point Vermeille (France)</strong> for over a year as a{" "}
            <strong>Web Developer</strong>, where I:
          </p>
          <section className="flex flex-col gap-4">
            <TasksList
              text={
                <>
                  Helped <strong>rebuild</strong> an existing web app using{" "}
                  <strong>Next.js</strong> to improve performance and backend
                  logic.
                </>
              }
              iconName="LayoutTemplate"
            />
            <TasksList
              text={
                <>
                  Integrated <strong>notifications</strong>,{" "}
                  <strong>calendar features</strong> (
                  <strong>FullCalendar</strong>), and{" "}
                  <strong>data visualization tools</strong> (
                  <strong>Chart.js</strong>)
                </>
              }
              iconName="Calendar"
            />
            <TasksList
              text={
                <>
                  Optimized <strong>complex data searching</strong> using{" "}
                  <strong>debounce</strong> to enhance user experience.
                </>
              }
              iconName="TextSearch"
            />
            <TasksList
              text={
                <>
                  Implemented <strong>Google Drive API</strong> for{" "}
                  <strong>PDF generation</strong> and improved{" "}
                  <strong>state management</strong> with{" "}
                  <strong>React Context API</strong>.
                </>
              }
              iconName="DatabaseZap"
            />
          </section>
          <p>
            More details about my time in <strong>Point Vermeille</strong> are
            available in the <strong>Projects section</strong>!
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
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {isDesktop && <p className="text-5xl font-black">2022 - 2024</p>}
        </motion.article>

        {/* OWN PROJECTS */}

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
          viewport={{ once: true, amount: 0.2 }}
        >
          {isDesktop && (
            <div className="flex justify-end">
              <p className="text-5xl font-black">2024 - 2025</p>
            </div>
          )}
        </motion.article>
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: isDesktop ? 0.8 : 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: isDesktop ? 0.5 : 0.3,
                delay: isDesktop ? 0.2 : 0,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            Building My Own Projects{" "}
            <span className="text-sm text-slate-400!">
              {!isDesktop && "(2024-2025)"}
            </span>
          </h3>
          <p>
            At the end of <strong>2024</strong>, I started developing{" "}
            <strong>GrindPAL</strong>, a <strong>gym workout tracking</strong>{" "}
            web app.
          </p>
          <p>
            This project is more than just a{" "}
            <strong>technical challenge</strong>, it&apos;s a{" "}
            <strong>personal goal</strong>. As someone passionate about{" "}
            <strong>fitness</strong>, I wanted a tool that I would actually use,
            while also pushing my skills in{" "}
            <strong>full-stack development</strong>,{" "}
            <strong>UI/UX design</strong>, and{" "}
            <strong>performance optimization</strong>.
          </p>
          <p>
            More details about <strong>GrindPal</strong> are available in the{" "}
            <strong>Projects section</strong>!
          </p>
        </motion.article>
        {/* </section> */}

        {/* NEW LIFE */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: isDesktop ? 0.8 : 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: isDesktop ? 0.5 : 0.3,
                delay: isDesktop ? 0.2 : 0,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            New life{" "}
            <span className="text-sm text-slate-400!">
              {!isDesktop && "(2025-????)"}
            </span>
          </h3>
          <p>
            Now based in <strong>Calgary, Canada</strong> for at least{" "}
            <strong>2 years</strong> on a{" "}
            <strong>working holiday program</strong>, I&apos;m excited to keep
            learning, building, and bringing <strong>ideas to life</strong>. 🚀
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
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {isDesktop && <p className="text-5xl font-black">2025 - ????</p>}
        </motion.article>
      </section>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text mt-10">
        Hobbies
      </h2>
      <Hobbies />
    </section>
  );
}

export default AboutMe;
