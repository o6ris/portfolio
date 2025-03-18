import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long, 500 characters maximum"),
});

interface formDataProps {
  name: string;
  email: string;
  message: string;
}

export default function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState("");
  const [formData, setFormData] = useState<formDataProps>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const formDataOnChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const sendMessage = async () => {
    try {
      setIsLoading(true);
      contactSchema.parse(formData);

      const url = `${baseUrl}/api/contact`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setNotif("Message sent!");
        setTimeout(() => {
          setNotif("");
        }, 3000);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const error = new Error(data.message);
        throw error;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors);
      } else {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    formDataOnChange,
    formData,
    errors,
    isLoading,
    notif,
  };
}
