import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TouchRipple from "@/components/TouchRipple";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AICE - AI Innovation Community for Excellence",
  description:
    "Official landing page for AICE at College of Engineering Chengannur (CEC). Discover events, workshops, and AI projects.",
  keywords: [
    "AICE",
    "AI Innovation Community for Excellence",
    "CEC",
    "College of Engineering Chengannur",
    "Artificial Intelligence",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white antialiased selection:bg-fuchsia-500 selection:text-white`}
      >
        <TouchRipple />
        {children}
      </body>
    </html>
  );
}