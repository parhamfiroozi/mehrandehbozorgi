// src/app/layout.tsx
import "./globals.css";
import { fontSans, fontFa, fontCordoba } from "./fonts";
import Navbar from "../components/Navbar";
import LeftMenu from "../components/LeftMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mehrandeh Bozorgi",
  description: "Persian restaurant in three languages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={[
          fontFa.className, // 🟩 BNazanin as the default font-family
          fontSans.variable, // optional: keep CSS var for English
          fontCordoba.variable, // optional: keep CSS var for headings
        ].join(" ")}
      >
        <Navbar />
        <LeftMenu />
        {children}
      </body>
    </html>
  );
}
