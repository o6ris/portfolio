import { useState, useEffect } from "react";
import useChatContext from "../contexts/chatContext";

interface bookingInfosProps {
  bookingDate: string;
  userEmail: string;
  userPhone: string;
  text: string;
}

export default function useChat() {
  const [question, setQuestion] = useState("");
  const { messages, setMessages } = useChatContext();
  const [bookingInfos, setbookingInfos] = useState<bookingInfosProps | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const askChat = async () => {
    if (!question.trim()) return;
    const userMessage = { question, answer: "..." };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setQuestion("");
    const url = `${baseUrl}/api/chat`;
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          question: question,
          history: messages,
        }),
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
      setIsLoading(false);
    }
  };

  const extractBookinginfos = (htmlString: string) => {
    const regex =
      /<li>date:\s*(.+?)<\/li>[\s\S]*?<li>email:\s*(.+?)<\/li>[\s\S]*?<li>phone:\s*(.+?)<\/li>[\s\S]*?<li>object:\s*(.+?)<\/li>/i;
    const match = htmlString.match(regex);

    if (!match) return null; // Return null if no match found

    return {
      bookingDate: match[1].trim(),
      userEmail: match[2].trim(),
      userPhone: match[3].trim(),
      text: match[4].trim(),
    };
  };

  const bookCall = async () => {
    const url = `${baseUrl}/api/calendar`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(bookingInfos),
        next: { revalidate: 1000 },
      });
      const data = await response.json();
      if (response.ok) {
        setMessages((prevMessages) =>
          prevMessages.map((msg, index) =>
            index === prevMessages.length - 1
              ? {
                  ...msg,
                  answer: `I've just sent you an email confirmation for your call with me in ${bookingInfos?.bookingDate}`,
                }
              : msg
          )
        );
      } else {
        const error = new Error(data.error.errors[0].message || "An unexpected error occurred");
        throw error;
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, answer: errorMessage }
            : msg
        )
      );
    }
  };

  useEffect(() => {
    if (
      messages[messages.length - 1]?.answer.includes(
        "Please confirm if everything is correct, and I'll finalize the booking for you"
      )
    ) {
      const bookingInfos = extractBookinginfos(
        messages[messages.length - 1].answer
      );
      setbookingInfos(bookingInfos);
    }
  }, [messages]);

  useEffect(() => {
    if (
      messages[messages.length - 1]?.answer.includes(
        "Thank you for confirming! I'm creating the event"
      )
    ) {
      bookCall();
    }
  }, [messages]);

  return {
    askChat,
    bookCall,
    setMessages,
    messages,
    setQuestion,
    question,
    isLoading,
  };
}
