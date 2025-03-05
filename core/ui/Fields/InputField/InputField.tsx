import { Input } from "@heroui/react";

interface InputFieldProps {
  classNames?: { [key: string]: string };
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
}

function InputField(props: InputFieldProps) {
  return (
    <Input
      {...props}
      classNames={{
        inputWrapper: "w-full bg-blue-700 ",
        input: "p-4",
        ...(props.classNames || {}),
      }}
    />
  );
}

export default InputField;
