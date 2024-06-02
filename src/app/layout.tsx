import Header from "@/components/Header";
import RecoilRootWrapper from "@/components/RecoilWarpper";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "JIWOO CHOI",
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
      <RecoilRootWrapper>
        <body className={redHatDisplay.className}>
          <Header />
          {children}
        </body>
      </RecoilRootWrapper>
    </html>
  );
}
