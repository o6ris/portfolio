import { Button, PressEvent } from "@heroui/react";

interface BasicButtonProps {
  className?: string;
  content?: string;
  onPress?: (e: PressEvent) => void;
  variant?: "flat" | "solid" | "bordered" | "light" | "faded" | "shadow" | "ghost";
  isIconOnly?: boolean;
}

function BasicButton(props: BasicButtonProps) {
  return <Button {...props} className={`p-4 ${props.className}`} >{props.content}</Button>;
}

export default BasicButton;