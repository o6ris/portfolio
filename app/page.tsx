import Chat from "@/components/Chat/Chat";

export default function Home() {
  return (
    <main className="h-dvh">
      <section className="flex flex-row gap-2 bg-red-300 h-full">
        <section className="flex flex-col items-center justify-center bg-green-200 w-full">
          <h1>Love turing Ideas into life</h1>
        </section>
        {/* CHAT */}
        <section className="flex flex-col items-center justify-center bg-radial from-slate-800 from-20% to-slate-950 w-full">
          <article className="flex flex-col items-center justify-center w-full h-full">
            <Chat />
          </article>
        </section>
      </section>
    </main>
  );
}
