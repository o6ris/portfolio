"use client";

import { motion } from "framer-motion";
import useContact from "@/modules/clients/hooks/useContact";
import InputField from "@/core/ui/Fields/InputField/InputField";
import TextareaField from "@/core/ui/Fields/TextareaField/TextareaField";
import BasicButton from "@/core/ui/Button/BasicButton";

function Contact() {
  const { sendMessage, formDataOnChange, formData, errors } = useContact();
  return (
    <motion.section className="flex flex-col gap-6 px-20 pb-20 w-full">
      <h2 className="bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
        Contact me
      </h2>
      <form className="flex flex-col gap-6 w-full">
        <div className="flex w-full gap-6">
          <InputField
            placeholder="eg: John"
            variant="bordered"
            // isDisabled={isLoading}
            classNames={{
              inputWrapper: "flex-1 border-2 border-slate-400 rounded-2xl",
              input: "p-4 text-slate-500",
            }}
            value={formData.name}
            onValueChange={(value) => formDataOnChange("name", value)}
            errorMessage={errors?.find((error) => error.path[0] === "name" )?.message}
          />
          <InputField
            placeholder="eg: john.mail.com"
            variant="bordered"
            // isDisabled={isLoading}
            classNames={{
              inputWrapper: "flex-1 border-2 border-slate-400 rounded-2xl",
              input: "p-4 text-slate-500",
            }}
            value={formData.email}
            onValueChange={(value) => formDataOnChange("email", value)}
            errorMessage={errors?.find((error) => error.path[0] === "email")?.message}
          />
        </div>
        <TextareaField
          placeholder="eg: I need your expertise on my project..."
          variant="bordered"
          minRows={5}
          maxRows={10}
          // isDisabled={isLoading}
          classNames={{
            inputWrapper: "flex-1 border-2 border-slate-400 rounded-2xl",
            input: "p-4 text-slate-500",
          }}
          onValueChange={(value) => formDataOnChange("message", value)}
          errorMessage={errors?.find((error) => error.path[0] === "message")?.message}
        />
        <div className="flex justify-end">
          <BasicButton
            content="Send"
            className="bg-gradiant-primary rounded-3xl shadow-lg shadow-fuchsia-900/50"
            onPress={sendMessage}
          />
        </div>
      </form>
    </motion.section>
  );
}

export default Contact;
