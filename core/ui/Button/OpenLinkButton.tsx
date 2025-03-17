"use client";

import BasicButton from "@/core/ui/Button/BasicButton";
import Icon from "@/core/ui/Icons/Icon";

interface OpenLinkButtonProps {
  url?: string;
}

export default function OpenLinkButton({ url }: OpenLinkButtonProps) {
  if (!url) return null; // Avoid rendering a broken button

  return (
    <BasicButton
      onPress={() => {
        console.log("Opening link:", url);
        window.open(url, "_blank");
      }}
      isIconOnly={true}
      startContent={<Icon name="ExternalLink" strokeWidth={2} size={26} color="white" />}
    />
  );
}
