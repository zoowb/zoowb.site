import Header from "@/components/Header";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "JIU's Portfolio",
  description: "Frontend Developer",
};

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body style={{ backgroundColor: "#f1f1f1" }} className={redHatDisplay.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
