// src/app/fonts.ts
import localFont from "next/font/local";

// BNazanin
export const fontFa = localFont({
  src: [{ path: "./BNazanin.ttf", weight: "400", style: "normal" }],
  variable: "--font-fa",
  display: "swap",
});

// Cordoba
export const fontCordoba = localFont({
  src: [{ path: "./Mj_Cordoba.ttf", weight: "400", style: "normal" }],
  variable: "--font-cordoba",
  display: "swap",
});

// Optional: Hajar
export const fontHajar = localFont({
  src: [{ path: "./Mj_Hajar_0.ttf", weight: "400", style: "normal" }],
  variable: "--font-hajar",
  display: "swap",
});
