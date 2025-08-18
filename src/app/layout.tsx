import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "../components/Navbar"; // ⬅️ add this (from app/ to components/)
import LeftMenu from "../components/LeftMenu";
import Head from "next/head"; // Make sure to import the `Head` component

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

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
      <body className={`bnazanin ${inter.variable} ${playfair.variable}`}>
        {/* Head tag with favicon */}
        <Head>
          <link rel="icon" href="/logo1.png" type="image/png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {/* Navbar and LeftMenu */}
        <Navbar />
        <LeftMenu />
        {children} {/* Render child components here */}
      </body>
    </html>
  );
}
