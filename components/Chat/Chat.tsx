"use client";

import { useRef, useEffect } from "react";
import useChat from "@/modules/clients/hooks/useChat";
import InputField from "@core/ui/Fields/InputField/InputField";
import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";
import PulseLoader from "react-spinners/PulseLoader";

function Chat() {
  const { askChat, messages, setQuestion, question, isLoading } = useChat();
  const latestMessageRef = useRef<HTMLDivElement | null>(null); // Create ref

  useEffect(() => {
    // Scroll to latest message when messages change
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]); // Runs when messages update
  return (
    <div className="flex flex-col gap-4 w-3/4 h-3/4 p-4 bg-gradient-to-r from-slate-950 to-slate-900 shadow-purple-3xl rounded-xl">
      {/* ANSWERS */}
      <div className="h-full p-4 overflow-auto no-scrollbar">
        {messages.map((message, i) => (
          <div
            className="flex flex-col gap-4 mb-8"
            key={i}
            ref={i === messages.length - 1 ? latestMessageRef : null}
          >
            <div className="flex justify-start mb-1">
              <div className="bg-slate-800 shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200">
                {message.question}
              </div>
            </div>
            <div className="flex justify-end">
              {isLoading && i === messages.length - 1 ? (
                <div className="bg-gradient-to-r from-fuchsia-900 to-purple-600 shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200">
                  <PulseLoader
                    color={"#EDF1FF"}
                    loading={isLoading}
                    size={8}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <div
                  className="bg-gradient-to-r from-fuchsia-900 to-purple-600 shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200 shadow-lg shadow-fuchsia-900/50"
                  dangerouslySetInnerHTML={{ __html: message.answer || "" }} // Ensure answer is a string
                />
              )}
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
            input: "p-4 text-slate-500",
          }}
        />
        <BasicButton
          onPress={() => askChat()}
          startContent={
            <Icon
              name="SendHorizontal"
              strokeWidth={1}
              size={26}
              color="white"
            />
          }
          className="w-auto flex-none bg-gradient-to-r from-fuchsia-900 to-purple-600 rounded-3xl shadow-lg shadow-fuchsia-900/50"
        />
      </div>
    </div>
  );
}

export default Chat;
