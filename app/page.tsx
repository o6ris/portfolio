"use client";

import useChat from "@/modules/clients/hooks/useChat";
import InputField from "@core/ui/Fields/InputField/InputField";
import BasicButton from "@/core/ui/Button/BasicButton";

export default function Home() {
  const { askChat, answer, setQuestion, question } = useChat();

  return (
    <main className="h-dvh">
      <section className="flex flex-row gap-2 bg-red-300 h-full">
        <section className="flex flex-col items-center justify-center bg-green-200 w-full">
          <h1>Love turing Ideas into life</h1>
        </section>
        {/* CHAT */}
        <section className="flex flex-col items-center justify-center bg-purple-500 w-full">
          <article className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col gap-2 w-2/3 h-2/3 p-2 bg-green-100">
              {/* ANSWERS */}
              <div className="h-full bg-green-500 p-4">{answer}</div>
              {/* QUESTIONS */}
              <div className="flex flex-row gap-2">
                <InputField
                  value={question}
                  onValueChange={(value) => setQuestion(value)}
                  variant="bordered"
                  classNames={{ inputWrapper: " flex-1 bg-blue-500" }}
                />
                <BasicButton
                  onPress={() => askChat(question)}
                  content=">"
                  className="w-auto flex-none bg-yellow-800"
                />
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
