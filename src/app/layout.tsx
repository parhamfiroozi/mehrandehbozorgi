import "./globals.css";
import { fontFa, fontCordoba } from "./fonts";
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
          fontFa.className, // ✅ BNazanin as actual default font-family
          fontCordoba.variable, // ✅ expose Cordoba as CSS var
        ].join(" ")}
      >
        <Navbar />
        <LeftMenu />
        {children}
      </body>
    </html>
  );
}
