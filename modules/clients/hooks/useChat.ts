import { useState, useEffect } from "react";
import useChatContext from "../contexts/chatContext";
import {
  isValidDate,
  isValidTime,
  isValidEmail,
  isValidPhone,
} from "@modules/clients/utils/validateBookingInfos";

interface bookingInfosProps {
  date: string;
  time: string;
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
    const formattedQuestion = question.replace(/\n/g, " - ");
    const userMessage = { question: formattedQuestion, answer: "..." };
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
      /<li>date:\s*(.+?)<\/li>[\s\S]*?<li>time:\s*(.+?)<\/li>[\s\S]*?<li>email:\s*(.+?)<\/li>[\s\S]*?<li>phone:\s*(.+?)<\/li>[\s\S]*?<li>object:\s*(.+?)<\/li>/i;
    const match = htmlString.match(regex);

    if (!match) return null; // Return null if no match found

    return {
      date: match[1].trim(),
      time: match[2].trim(),
      userEmail: match[3].trim(),
      userPhone: match[4].trim(),
      text: match[5].trim(),
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
                  answer: `I've just sent you an email confirmation for your call with me in ${bookingInfos?.date} at ${bookingInfos?.time}`,
                }
              : msg
          )
        );
      } else {
        let errorMsg;
        if (data.error.errors) {
          errorMsg = data.error.errors[0].message;
        } else {
          errorMsg = data.error;
        }
        const error = new Error(errorMsg || "An unexpected error occurred");
        throw error;
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, answer: errorMessage }
            : msg
        )
      );
    }
  };

  const handleBookingSubmission = (
    date: string,
    time: string,
    email: string,
    phone: string
  ) => {
    if (!isValidDate(date)) {
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? {
                ...msg,
                answer:
                  "Invalid date. Please provide a valid one (eg: March 15).",
              }
            : msg
        )
      );
    } else if (!isValidTime(time)) {
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? {
                ...msg,
                answer:
                  "Invalid time. Please select a time between 9 AM and 6 PM with correct format (AM or PM).",
              }
            : msg
        )
      );
    } else if (!isValidEmail(email)) {
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, answer: "Invalid email format." }
            : msg
        )
      );
    } else if (!isValidPhone(phone)) {
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, answer: "Invalid email format." }
            : msg
        )
      );
    } else {
      bookCall();
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
        "Thank you for confirming! I'm processing your informations"
      )
    ) {
      handleBookingSubmission(
        bookingInfos?.date ?? "",
        bookingInfos?.time ?? "",
        bookingInfos?.userEmail ?? "",
        bookingInfos?.userPhone ?? ""
      );
    }
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          question: "",
          answer:
            "Hi there! <strong>I'm virtual Tsiry.</strong> <p>You can ask me anything about my skills, experience, or projects.</p> <p>Feel free to start with something like <strong>'What do you do?'</strong> or <strong>'Tell me about your projects!'</strong></p> <p>You can also <strong>book a call with me</strong> if you want to</p>",
        },
      ]);
    }, 2000);
  }, []);

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
