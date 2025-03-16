"use client";

import useChatContext from "@/modules/clients/contexts/chatContext";
import Chat from "./Chat";

function ChatSection() {
  const { isChatDisplayed } = useChatContext();
  
  return isChatDisplayed ? (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Chat />
    </div>
  ) : null;
}


export default ChatSection