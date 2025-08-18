
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const showLogo = activeIndex > 0; // any slide after hero

  useEffect(() => {
    const onActive = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail ?? 0;
      setActiveIndex(idx);
    };
    window.addEventListener("vp:active", onActive as EventListener);
    return () =>
      window.removeEventListener("vp:active", onActive as EventListener);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-[10000] transition-colors duration-700 ${
        showLogo ? "bg-[rgb(206,165,24)] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="h-full flex items-center justify-center">
        <div
          className={`relative transition-all duration-700 ${
            showLogo
              ? "w-[120px] h-[60px] opacity-100 scale-100"
              : "w-[300px] h-[150px] opacity-0 scale-0"
          }`}
        >
          <Image
            src="/logos/logo1.png"
            alt="Mehrandeh Bozorgi logo"
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>
      </div>
    </nav>
  );
}
