"use client";

import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section className="flex flex-col gap-6 p-20">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
        About me
      </h2>
      {/* ORIGINS */}
      <section className="grid grid-cols-2 items-center gap-12 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full bg-gradient-to-b from-purple-800 to-purple-500 w-4 rounded-full shadow-purple-3xl"></div>
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
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            Origins: From Madagascar to France
          </h3>
          <p>
            I was born in Madagascar, where I spent my childhood before moving
            to France at 17 to pursue my studies. Growing up with both Malagasy
            and French cultures shaped my perspective and opened my mind, making
            me more respectful of the world and different human thoughts.
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
          viewport={{ once: true, amount: 0.8 }}
        >
          <div>
            <p className="text-5xl font-black">1991 - 2009</p>
          </div>
        </motion.article>
        {/* </section> */}

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
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="flex justify-end">
            <p className="text-5xl font-black">2010 - 2022</p>
          </div>
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
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            The Creative Journey: From Cameras to Content
          </h3>
          <p>
            My career began in audiovisual production, where I studied
            cinematography at 3IS (France) and obtain a bachelor degree as a
            camera operator. In 2014, I joined SOSAV, a company specializing in
            tech repair guides, as a Graphic & Video Content Creator.
          </p>
          <p>
            Over the years, I took on more responsibilities and eventually
            became Content Manager, leading a team of 3. I was also in charge of
            the YouTube channel, where I:
          </p>
          <ul>
            <li>
              Produced high-quality photo & video tutorials to make tech repairs
              more accessible.
            </li>
            <li>
              Optimized content strategy, growing SOSAV&apos;s YouTube channel
              from a few thousand to over 50K subscribers.
            </li>
            <li>Managed team workflows, content planning, and budgeting.</li>
            <li>
              Worked extensively with Photoshop, Premiere, After Effects,
              Illustrator, and Prestashop.
            </li>
          </ul>
        </motion.article>

        {/* 2nd CARRERE */}
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
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            Transition to Web Development: A New Challenge
          </h3>
          <p>
            I didn&apos;t always love technology and problem-solving, but over
            time, while working at SOSAV, I became fascinated by it. I started
            learning web development, experimenting with HTML, CSS, and
            JavaScript, and soon realized I wanted to take it further.
          </p>
          <p>
            In 2022, I made the decision to fully transition into web
            development and completed an intensive 5-month full-stack bootcamp
            at Wild Code School (France), focusing on React, Node.js, and SQL
            databases. Later, I expanded my knowledge with Next.js.
          </p>
          <p>
            In 2023, I worked for Point Vermeille (France) for over a year as a
            Web Developer, where I:
          </p>
          <ul>
            <li>
              Helped rebuilt an existing web app using Next.js to improve
              performance and backend logic.
            </li>
            <li>
              Integrated notifications, calendar features (FullCalendar), and
              data visualization tools (Chart.js)
            </li>
            <li>
              Optimized complex data searching using debounce to enhance user
              experience
            </li>
            <li>
              Implemented Google Drive API for PDF generation and improved state
              management with React Context API.
            </li>
            <li>
              More details about time in point Vermeille are available in the
              Projects section, or feel free to book a call with me through the
              chat if you&apos;re curious!
            </li>
          </ul>
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
          viewport={{ once: true, amount: 0.8 }}
        >
          <p className="text-5xl font-black">2022 - 2024</p>
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
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="flex justify-end">
            <p className="text-5xl font-black">2024 - 2025</p>
          </div>
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
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">
            Building My Own Projects
          </h3>
          <p>
            At the end of 2024, I started developing GrindPAL, a gym workout
            tracking web app, to replace traditional spreadsheets with a more
            intuitive and visual solution.
          </p>
          <p>
            This project is more than just a technical challenge, it&apos;s a
            personal goal. As someone passionate about fitness, I wanted a tool
            that I would actually use, while also pushing my skills in
            full-stack development, UI/UX design, and performance optimization.
          </p>
          <p>
            In 2023, I worked for Point Vermeille (France) for over a year as a
            Web Developer, where I:
          </p>
          <p>
            More details about GrindPal are available in the Projects section,
            or feel free to book a call with me through the chat if you&apos;re
            curious!
          </p>
        </motion.article>
        {/* </section> */}

        {/* NEW LIFE */}
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
          className="flex flex-col gap-2"
        >
          <h3 className="text-xl font-bold text-slate-400">New life</h3>
          <p>
            Now based in Calgary, Canada for at least 2 years on a working
            holiday program, I&apos;m excited to keep learning, building, and
            bringing ideas to life. 🚀
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
          viewport={{ once: true, amount: 0.8 }}
        >
          <p className="text-5xl font-black">2025 - ????</p>
        </motion.article>
      </section>
    </section>
  );
}

export default AboutMe;
