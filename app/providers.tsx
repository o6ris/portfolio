"use client";

import { HeroUIProvider } from "@heroui/react";
import { ChatProvider } from "@/modules/clients/contexts/chatContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ChatProvider>{children}</ChatProvider>
    </HeroUIProvider>
  );
}
