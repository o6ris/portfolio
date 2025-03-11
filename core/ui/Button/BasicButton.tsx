import { Button, PressEvent } from "@heroui/react";
import { ReactElement } from "react";

interface BasicButtonProps {
  className?: string;
  content?: string;
  onPress?: (e: PressEvent) => void;
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost";
  isIconOnly?: boolean;
  startContent?: ReactElement;
}

function BasicButton(props: BasicButtonProps) {
  return (
    <Button
      {...props}
      className={`p-4 cursor-pointer data-focus:outline-none ${props.className}`}
    >
      {props.content}
    </Button>
  );
}

export default BasicButton;
