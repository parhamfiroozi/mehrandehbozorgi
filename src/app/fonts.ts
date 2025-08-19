import localFont from "next/font/local";

// Default Persian UI font
export const fontFa = localFont({
  src: [{ path: "./fonts/BNazanin.ttf", weight: "400", style: "normal" }],
  variable: "--font-fa",
  display: "swap",
});

// Headings/motto font
export const fontCordoba = localFont({
  src: [{ path: "./fonts/Mj_Cordoba.ttf", weight: "400", style: "normal" }],
  variable: "--font-cordoba",
  display: "swap",
});
