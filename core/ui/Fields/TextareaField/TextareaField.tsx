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
}

function TextareaField(props: TextareaFieldProps) {
  return (
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
  );
}

export default TextareaField;
