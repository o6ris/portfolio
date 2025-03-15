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
          I&apos;ve always been fascinated by how different movements impact the
          body. Over the years, I&apos;ve dived deep into training
          principles, movement efficiency, and injury prevention, always
          striving to train smarter, not just harder.
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
          Exploring new cultures, trying new foods, and broadening my
          perspective
        </p>
        <p>
          In 2022, my wife and I traveled to Malaysia, a modern, clean, and
          diverse country. Seeing people from different backgrounds coexist in
          harmony deeply moved us, revealing the beauty of humanity.
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
          When I&apos;m out hiking, it&apos;s the only time I feel truly present
          in the moment. The rhythmic movement, fresh air, and vast landscapes
          calm my thoughts like nothing else, helping me reconnect with myself
          and find clarity in life.
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
          Curious about emerging technologies, I own an Ethereum wallet, which
          has allowed me to explore decentralized apps (dApps), smart contracts,
          and blockchain mechanics firsthand.
        </p>
        <p>
          More recently, I&apos;ve decided to dive into AI and learn how to
          build AI agents. The potential of AI fascinates me, and I&apos;m
          excited to see how it will shape our future.
        </p>
      </motion.article>
    </section>
  );
}

export default Hobbies;
