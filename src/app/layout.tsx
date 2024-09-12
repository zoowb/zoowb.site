import "@/styles/global.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "JIWOO CHOI",
  description: "Frontend Developer",
};

const notoSansKr = Noto_Sans_KR({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
