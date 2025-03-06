import { useState } from "react";
import useChatContext from "../contexts/chatContext";

export default function useChat() {
  const [question, setQuestion] = useState("");
  const {messages, setMessages} = useChatContext();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const askChat = async () => {
    const url = `${baseUrl}/api/chat`;
    try {
      const response = await fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify(question),
          next: { revalidate: 1000 },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setMessages((prevMessages) => [...prevMessages, {question: question, answer: data.answer}])
      } else {
        const error = new Error(data.message);
        throw error;
      }

    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return {
    askChat,
    messages,
    setQuestion,
    question,
  }
}