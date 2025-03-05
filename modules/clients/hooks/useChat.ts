import { useState } from "react";

export default function useChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const askChat = async (body: string) => {
    const url = `${baseUrl}/api/chat`;
    try {
      const response = await fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify(body),
          next: { revalidate: 1000 },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setAnswer(data.answer)
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
    answer,
    setQuestion,
    question,
  }
}