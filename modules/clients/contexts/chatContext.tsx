// chatContext.js (or .ts)
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Message {
  question: string;
  answer: string;
}

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isChatDisplayed: boolean;
  setIsChatDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
  children: ReactNode;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatDisplayed, setIsChatDisplayed] = useState<boolean>(true);

  return (
    <ChatContext.Provider value={{ messages, setMessages, isChatDisplayed, setIsChatDisplayed }}>
      {children}
    </ChatContext.Provider>
  );
}

export default function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
