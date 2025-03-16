"use client";

import { motion } from "framer-motion";
import Icon from "@/core/ui/Icons/Icon";

function Hobbies() {
  return (
    <section className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
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
        className="flex flex-col gap-4 p-4 shadow-purple-3xl rounded-lg"
      >
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-gradiant-primary">
            <Icon name="Dumbbell" strokeWidth={2} size={26} color="white" />
          </div>
        </div>
        <h3 className="text-slate-400">
          Fitness & Biomechanics: Training Smarter, Not Just Harder
        </h3>
        <p>
          I&apos;ve always been fascinated by how different{" "}
          <strong>movements</strong> impact the <strong>body</strong>. Over the
          years, I&apos;ve dived deep into <strong>training principles</strong>,{" "}
          <strong>movement efficiency</strong>, and{" "}
          <strong>injury prevention</strong>, always striving to train{" "}
          <strong>smarter</strong>, not just harder.
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
        className="flex flex-col gap-2 p-4 shadow-purple-3xl rounded-lg"
      >
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-gradiant-primary">
            <Icon name="Plane" strokeWidth={2} size={26} color="white" />
          </div>
        </div>
        <h3 className="text-slate-400">
          Traveling: Seeing the Beauty of Humanity
        </h3>
        <p>
          Exploring new <strong>cultures</strong>, trying new{" "}
          <strong>foods</strong>, and broadening my <strong>perspective</strong>
        </p>
        <p>
          In 2022, my wife and I traveled to <strong>Malaysia</strong>, a
          modern, clean, and diverse country. Seeing people from different
          backgrounds coexist in harmony deeply moved us, revealing the beauty
          of <strong>humanity</strong>.
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
        className="flex flex-col gap-2 p-4 shadow-purple-3xl rounded-lg"
      >
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-gradiant-primary">
            <Icon name="Mountain" strokeWidth={2} size={26} color="white" />
          </div>
        </div>
        <h3 className="text-slate-400">
          Hiking: Reconnecting with Nature and Myself
        </h3>
        <p>
          When I&apos;m out <strong>hiking</strong>, it&apos;s the only time I
          feel truly <strong>present</strong> in the moment. The rhythmic{" "}
          <strong>movement</strong>, fresh air, and vast{" "}
          <strong>landscapes</strong> calm my thoughts like nothing else,
          helping me reconnect with myself and find <strong>clarity</strong> in
          life.
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
        className="flex flex-col gap-2 p-4 shadow-purple-3xl rounded-lg"
      >
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-gradiant-primary">
            <Icon name="Bot" strokeWidth={2} size={26} color="white" />
          </div>
        </div>
        <h3 className="text-slate-400">
          AI & Web3: Experimenting with the Future
        </h3>
        <p>
          Curious about emerging <strong>technologies</strong>, I own an{" "}
          <strong>Ethereum wallet</strong>, which has allowed me to explore{" "}
          <strong>decentralized apps (dApps)</strong>,{" "}
          <strong>smart contracts</strong>, and{" "}
          <strong>blockchain mechanics</strong> firsthand.
        </p>
        <p>
          More recently, I&apos;ve decided to dive into <strong>AI</strong> and
          learn how to build <strong>AI agents</strong>. The potential of{" "}
          <strong>AI</strong> fascinates me, and I&apos;m excited to see how it
          will shape our <strong>future</strong>.
        </p>
      </motion.article>
    </section>
  );
}

export default Hobbies;
