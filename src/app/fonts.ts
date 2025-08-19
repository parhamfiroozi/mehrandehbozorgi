// src/app/fonts.ts
import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// 🟩 BNazanin from public/fonts
export const fontFa = localFont({
  src: "/fonts/B-NAZANIN.TTF",   // << in /public/fonts
  variable: "--font-fa",
  display: "swap",
});

// MJ-Cordoba from public/fonts
export const fontCordoba = localFont({
  src: "/fonts/MJ-Cordoba.ttf",
  variable: "--font-cordoba",
  display: "swap",
});
