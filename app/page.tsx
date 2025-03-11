import Chat from "@/components/Chat/Chat";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <main className="h-dvh">
      <section className="flex flex-row bg-radial from-slate-800 from-20% to-slate-950 h-full">
        <section className="flex flex-col items-center justify-center w-full">
          <Title />
        </section>
        {/* CHAT */}
        <section className="flex flex-col items-center justify-center w-full">
          <article className="flex flex-col items-center justify-center w-full h-full">
            <Chat />
          </article>
        </section>
      </section>
    </main>
  );
}
