import { ReactNode } from "react";
import { Textarea } from "@heroui/react";

interface TextareaFieldProps {
  classNames?: { [key: string]: string };
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  minRows?: number;
  maxRows?: number;
  isDisabled?: boolean;
  errorMessage?: ReactNode;
}

function TextareaField(props: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Textarea
        {...props}
        classNames={{
          inputWrapper: `w-full focus-visible:outline-none data-[focus=true]:ring-transparent resize-none no-scrollbar ${
            props.classNames?.inputWrapper || ""
          }`,
          input: `p-4 no-scrollbar ${props.classNames?.input || ""}`,
          ...(props.classNames || {}),
        }}
      />
      {props.errorMessage && (
        <span className="text-xs pl-2 text-red-600!">{props.errorMessage}</span>
      )}
    </div>
  );
}

export default TextareaField;
