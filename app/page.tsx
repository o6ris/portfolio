import ChatSection from "@/components/Chat/ChatSection";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col lg:flex-row lg:h-dvh">
        <section className="flex flex-[0.8] items-center justify-center w-full lg:h-full">
          <Hero />
        </section>
        <section className="hidden lg:flex flex-[1.2] flex-col items-center justify-center w-full">
          <ChatSection />
        </section>
      </section>
      <section id="projects" className="flex h-full justify-center pt-10">
        <Projects />
      </section>
      <section id="about-me" className="flex h-full justify-center pt-10">
        <AboutMe />
      </section>
      <section id="about-me" className="flex h-full justify-center pt-10">
        <Contact />
      </section>
    </main>
  );
}
