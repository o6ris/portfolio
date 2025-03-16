"use client";

import { useState, useEffect } from "react";
import Chat from "./Chat";
import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";

function ChatModal() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonProps = isDesktop
    ? {
        startContent: (
          <Icon
            name="BotMessageSquare"
            strokeWidth={2}
            size={22}
            color="purple"
          />
        ),
        endContent: (
          <Icon name="ChevronUp" strokeWidth={2} size={22} color="#E2E8F0" />
        ),
        content: "Chat with me!",
        className:
          "flex items-center justify-around font-bold text-slate-200 w-full shadow-md bg-gradient-to-r from-slate-800 to-slate-900 p-2 rounded-t-lg",
      }
    : {
        startContent: (
          <Icon
            name="BotMessageSquare"
            strokeWidth={2}
            size={26}
            color="purple"
          />
        ),
        isIconOnly: true,
        className:
          "flex items-center justify-around font-bold shadow-md bg-gradient-to-r from-slate-800 to-slate-900 p-4 rounded-full mb-4!",
      };

  return (
    <div className={`flex flex-col items-end justify-end fixed bottom-0 right-0 z-20 pr-4 ${isDisplayed && "h-full"}`}>
      <div
        className={`flex justify-end items-end h-full ${
          !isDisplayed && "hidden"
        }`}
      >
        <Chat toggleDisplay={toggleDisplay} isDisplayed={isDisplayed} />
      </div>
      <div className={`flex justify-end w-full ${isDisplayed && "hidden"}`}>
        <BasicButton onPress={toggleDisplay} {...buttonProps} />;
      </div>
    </div>
  );
}

export default ChatModal;
