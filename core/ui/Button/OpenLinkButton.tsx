"use client";

import { icons } from "lucide-react";
import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";

interface OpenLinkButtonProps {
  url?: string;
  name?: keyof typeof icons;
  size?: number;
}

export default function OpenLinkButton({ url, name, size = 26 }: OpenLinkButtonProps) {
  if (!url) return null; // Avoid rendering a broken button

  return (
    <BasicButton
      onPress={() => {
        window.open(url, "_blank");
      }}
      isIconOnly={true}
      startContent={<Icon name={name} strokeWidth={2} size={size} color="#E2E8F0" />}
    />
  );
}
