import type { Metadata, Viewport } from "next";
import { Providers } from "@/app/providers";
import ChatModal from "@/components/Chat/ChatModal";
import { Lexend, Poppins } from "next/font/google";
import ExternalLinks from "@/components/ExternalLinks/ExternalLinks";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tsiry Ralambo | Web developer who loves turning Ideas to Life",
  description:
    "Frontend Developer skilled in React, Next.js & MongoDB, with a background in multimedia. Passionate about design, innovation & building user-friendly web apps.",
  // Open Graph settings for social media sharing
  openGraph: {
    siteName: "Tsiry | Web developer who loves turning Ideas to Life", 
    type: "website",
    locale: "en_US",
  },
  // Directives for search engine bots
  robots: {
    index: true, // Allow indexing of this page (i.e., it can appear in search results)
    follow: true, // Allow following links on this page
    "max-image-preview": "large", // Allow large image previews in search results
    "max-snippet": -1, // Allow unlimited length for text snippets
    "max-video-preview": -1, // Allow unlimited length for video previews
    googleBot: "index, follow", // Specific directives for Google's bot
  },
  // Verification meta tags for services like Google Search Console
  // verification: {
  //   google: "YOUR_DATA", // Google verification code
  //   yandex: ["YOUR_DATA"], // Yandex verification code
  //   other: {
  //     "msvalidate.01": ["YOUR_DATA"], // Microsoft verification
  //     "facebook-domain-verification": ["YOUR_DATA"], // Facebook verification
  //   },
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-radial from-slate-800 from-20% to-slate-950" lang="en">
      <body className={`${lexend.className} ${poppins.className} relative`}>
        <Providers>
          <ExternalLinks />
          <ChatModal />
          {children}
        </Providers>
      </body>
    </html>
  );
}
