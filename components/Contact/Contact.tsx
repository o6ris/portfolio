"use client";

import { motion } from "framer-motion";
import useContact from "@/modules/clients/hooks/useContact";
import InputField from "@/core/ui/Fields/InputField/InputField";
import TextareaField from "@/core/ui/Fields/TextareaField/TextareaField";
import BasicButton from "@/core/ui/Button/BasicButton";
import ClipLoader from "react-spinners/ClipLoader";
import Icon from "@/core/ui/Icons/Icon";

function Contact() {
  const { sendMessage, formDataOnChange, formData, errors, isLoading, notif } =
    useContact();
  return (
    <motion.section className="flex flex-col gap-6 pb-20 w-full p-2 lg:px-20 ">
      <h2 className="bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
        Contact me
      </h2>
      <form className="flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full gap-6 lg:flex-row">
          <InputField
            placeholder="eg: John"
            variant="bordered"
            // isDisabled={isLoading}
            classNames={{
              inputWrapper: "border-2 border-slate-400 rounded-2xl",
              input: "p-4 text-slate-300",
            }}
            value={formData.name}
            onValueChange={(value) => formDataOnChange("name", value)}
            errorMessage={
              errors?.find((error) => error.path[0] === "name")?.message
            }
          />
          <InputField
            placeholder="eg: john.mail.com"
            variant="bordered"
            // isDisabled={isLoading}
            classNames={{
              inputWrapper: "border-2 border-slate-400 rounded-2xl",
              input: "p-4 text-slate-300",
            }}
            value={formData.email}
            onValueChange={(value) => formDataOnChange("email", value)}
            errorMessage={
              errors?.find((error) => error.path[0] === "email")?.message
            }
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
            input: "p-4 text-slate-300",
          }}
          value={formData.message}
          isCharNumbDisplayed={true}
          onValueChange={(value) => formDataOnChange("message", value)}
          errorMessage={
            errors?.find((error) => error.path[0] === "message")?.message
          }
        />
        <div className="flex gap-4 items-center justify-end">
          {notif.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 bg-green-300 border-2 border-green-800 p-2 rounded-md text-green-800"
            >
              <Icon name="Check" color="#2E7D32" size={22} />
              {notif}
            </motion.div>
          )}
          <BasicButton
            content="Send"
            className="bg-gradiant-primary text-slate-200 rounded-3xl shadow-lg shadow-fuchsia-900/50 flex items-center gap-2"
            onPress={sendMessage}
            isDisabled={isLoading}
            startContent={
              <ClipLoader
                color={"#EDF1FF"}
                loading={isLoading}
                size={16}
                aria-label="Loading Spinner"
              />
            }
          />
        </div>
      </form>
    </motion.section>
  );
}

export default Contact;
