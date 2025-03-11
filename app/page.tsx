import Chat from "@/components/Chat/Chat";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="h-dvh">
      <section className="flex flex-row bg-radial from-slate-800 from-20% to-slate-950 h-full">
        <section className="flex flex-row items-center justify-center w-full h-full">
          <Hero />
        </section>
        <section className="flex flex-col items-center justify-center w-full">
          <Chat />
        </section>
      </section>
    </main>
  );
}
