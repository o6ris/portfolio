import { useState } from "react";
import useChatContext from "../contexts/chatContext";

export default function useChat() {
  const [question, setQuestion] = useState("");
  const { messages, setMessages } = useChatContext();
  const [isLoading, setIsLoading] = useState(false)
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const askChat = async () => {
    if (!question.trim()) return;
    const userMessage = { question, answer: "..." };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setQuestion("");
    const url = `${baseUrl}/api/chat`;
    try {
      setIsLoading(true)
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(question),
        next: { revalidate: 1000 },
      });
      const data = await response.json();
      if (response.ok) {
        setMessages((prevMessages) =>
          prevMessages.map((msg, index) =>
            index === prevMessages.length - 1
              ? { ...msg, answer: data.answer }
              : msg
          )
        );
      } else {
        const error = new Error(data.message);
        throw error;
      }
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, answer: "Error: Unable to fetch response" }
            : msg
        )
      );
    } finally {
      setIsLoading(false)
    }
  };

  return {
    askChat,
    setMessages,
    messages,
    setQuestion,
    question,
    isLoading
  };
}
