"use client";

import { useState } from "react";
import Chat from "./Chat";
import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";

function ChatModal() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };
  return (
    <div className="flex flex-col items-end fixed bottom-0 right-0 z-100 pr-4 w-full">
      <div className={`flex justify-end ${!isDisplayed && "hidden"}`}>
        <Chat toggleDisplay={toggleDisplay} isDisplayed={isDisplayed} />
      </div>
      <div className={`flex justify-end w-1/2 ${isDisplayed && "hidden"}`}>
        <BasicButton
          startContent={
            <Icon
              name="BotMessageSquare"
              strokeWidth={2}
              size={22}
              color="purple"
            />
          }
          endContent={
            <Icon name="ChevronUp" strokeWidth={2} size={22} color="#E2E8F0" />
          }
          content="Chat with me!"
          onPress={toggleDisplay}
          className="flex items-center justify-around font-bold text-slate-200 w-1/2 shadow-md bg-gradient-to-r from-slate-800 to-slate-900 p-2 rounded-t-lg "
        />
      </div>
    </div>
  );
}

export default ChatModal;
