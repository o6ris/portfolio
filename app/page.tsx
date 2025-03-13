import Chat from "@/components/Chat/Chat";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial from-slate-800 from-20% to-slate-950">
      <section className="flex h-dvh">
        <section className="flex items-center justify-center w-full h-full">
          <Hero />
        </section>
        <section className="flex flex-col items-center justify-center w-full">
          <Chat />
        </section>
      </section>
      <section id="projects" className="flex h-full justify-center pt-10">
        <Projects />
      </section>
      <section id="about-me" className="flex h-full justify-center pt-10">
        <AboutMe />
      </section>
    </main>
  );
}
