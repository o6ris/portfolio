import { ReactNode } from "react";
import { Input } from "@heroui/react";

interface InputFieldProps {
  classNames?: { [key: string]: string };
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  errorMessage?: ReactNode;
}

function InputField(props: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Input
        {...props}
        classNames={{
          inputWrapper: `w-full focus-visible:outline-hidden data-[focus=true]:ring-transparent ${
            props.classNames?.inputWrapper || ""
          }`,
          input: `p-4 ${props.classNames?.input || ""}`,
          ...(props.classNames || {}),
        }}
      />
      {props.errorMessage && (
        <span className="text-xs pl-2 text-red-600!">{props.errorMessage}</span>
      )}
    </div>
  );
}

export default InputField;
