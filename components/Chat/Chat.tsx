"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useChat from "@/modules/clients/hooks/useChat";
import TextareaField from "@/core/ui/Fields/TextareaField/TextareaField";
import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";
import PulseLoader from "react-spinners/PulseLoader";

interface ChatProps {
  toggleDisplay?: () => void;
  isDisplayed?: boolean;
}

function Chat({ toggleDisplay, isDisplayed }: ChatProps) {
  const { askChat, messages, setQuestion, question, isLoading } = useChat();
  const latestMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const formatMessageWithLineBreaks = (message: string) => {
    return message.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < message.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-4 p-4 bg-gradient-to-r from-slate-950 to-slate-900 shadow-purple-3xl rounded-xl relative w-full h-full lg:w-3/4 lg:h-3/4"
    >
      {isDisplayed && (
        <div className="flex justify-end absolute top-0 right-0 w-full rounded-xl shadow-md backdrop-blur-sm p-1">
          <BasicButton
            isIconOnly={true}
            startContent={<Icon name="ChevronDown" color="white" />}
            onPress={toggleDisplay}
            className="p-0"
          />
        </div>
      )}
      <div className="h-full p-4 overflow-auto no-scrollbar">
        {messages.map((message, i) => (
          <div
            className="flex flex-col gap-4 mb-8"
            key={i}
            ref={i === messages.length - 1 ? latestMessageRef : null}
          >
            <div className="flex justify-start mb-1">
              <div className="bg-slate-800 shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200">
                {formatMessageWithLineBreaks(message.question)}
              </div>
            </div>
            <div className="flex justify-end">
              {isLoading && i === messages.length - 1 ? (
                <div className="bg-gradiant-primary shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200">
                  <PulseLoader
                    color={"#EDF1FF"}
                    loading={isLoading}
                    size={8}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <div
                  className="bg-gradiant-primary shadow-md p-2 rounded-lg max-w-3/4 text-fuchsia-200 shadow-lg shadow-fuchsia-900/50"
                  dangerouslySetInnerHTML={{ __html: message.answer || "" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* QUESTIONS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-row gap-2 items-end"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <TextareaField
            value={question}
            onValueChange={(value) => setQuestion(value)}
            variant="bordered"
            minRows={1}
            maxRows={3}
            isDisabled={isLoading}
            classNames={{
              inputWrapper: "flex-1 border-2 border-fuchsia-900 rounded-2xl",
              input: "p-4 text-slate-500",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0, x: 10 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        >
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
            className="w-auto flex-none bg-gradiant-primary rounded-3xl shadow-lg shadow-fuchsia-900/50"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Chat;
