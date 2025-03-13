import Chat from "@/components/Chat/Chat";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial from-slate-800 from-20% to-slate-950">
      <section className="flex flex-row h-dvh">
        <section className="flex flex-row items-center justify-center w-full h-full">
          <Hero />
        </section>
        <section className="flex flex-col items-center justify-center w-full">
          <Chat />
        </section>
      </section>
      <section id="projects" className="flex flex-row h-dvh justify-center pt-20">
        <Projects />
      </section>
    </main>
  );
}
