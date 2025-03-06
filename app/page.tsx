"use client";

import useChat from "@/modules/clients/hooks/useChat";
import InputField from "@core/ui/Fields/InputField/InputField";
import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";

export default function Home() {
  const { askChat, messages, setQuestion, question } = useChat();

  return (
    <main className="h-dvh">
      <section className="flex flex-row gap-2 bg-red-300 h-full">
        <section className="flex flex-col items-center justify-center bg-green-200 w-full">
          <h1>Love turing Ideas into life</h1>
        </section>
        {/* CHAT */}
        <section className="flex flex-col items-center justify-center bg-radial from-slate-800 from-20% to-slate-950 w-full">
          <article className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col gap-4 w-3/4 h-3/4 p-4 bg-gradient-to-r from-slate-950 to-slate-900 shadow-purple-3xl rounded-xl">
              {/* ANSWERS */}
              <div className="h-full p-4 overflow-auto no-scrollbar">
                {messages.map((message, i) => (
                  <div className="flex flex-col gap-4 mb-8" key={i}>
                    <div className="flex justify-start mb-1">
                      <div className="bg-slate-800 shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200">
                        {message.question}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-fuchsia-900 to-purple-600 shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200">
                        {message.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* QUESTIONS */}
              <div className="flex flex-row gap-2">
                <InputField
                  value={question}
                  onValueChange={(value) => setQuestion(value)}
                  variant="bordered"
                  classNames={{
                    inputWrapper: "flex-1 border-2 border-fuchsia-900 rounded-2xl ",
                    input: "p-4 text-slate-500"
                  }}
                />
                <BasicButton
                  onPress={() => askChat()}
                  startContent={<Icon name="SendHorizontal" strokeWidth={1} size={26} color="white" />}
                  className="w-auto flex-none bg-gradient-to-r from-fuchsia-900 to-purple-600 rounded-3xl shadow-md shadow-purple-500/50"
                />
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
