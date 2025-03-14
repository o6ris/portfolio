import { useState } from "react";

interface formDataProps {
  name: string;
  email: string;
  message: string;
}

export default function useContact() {
  const [formData, setFormData] = useState<formDataProps>({
    name: "",
    email: "",
    message: "",
  });
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const formDataOnChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const sendMessage = async () => {
    try {
      const url = `${baseUrl}/api/contact`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data);
      } else {
        const error = new Error(data.message);
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    sendMessage,
    formDataOnChange,
    formData,
  };
}
