"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders client-side (after mounting)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const content = (
    <footer
      className="
        fixed inset-x-0 bottom-0 z-[20000]  // Ensure it is above Swiper content
        bg-white/80 backdrop-blur-md
        border-t border-black/10
        py-4
      "
      dir="rtl"
      aria-label="پاورقی"
    >
      <div className="mx-auto max-w-[1400px] px-3 py-2 flex items-center justify-between gap-3">
        {/* Left: designer logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/logos/designer.png"
              alt="Designer Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-sm text-gray-700 bnazanin">طراحی و توسعه</span>
        </div>

        {/* Center: motto in MJ Cordoba font */}
        <div className="text-center flex-1">
          <span className="mjcordoba text-[clamp(14px,1.6vw,18px)] text-gray-900">
            در خدمت شما هستیم
          </span>
        </div>

        {/* Right: Google Maps link */}
        <div className="flex items-center">
          <a
            href="https://www.google.com/maps/place/%D8%B1%D8%B3%D8%AA%D9%88%D8%B1%D8%A7%D9%86+%D8%AF%D9%87+%D8%A8%D8%B2%D8%B1%DA%AF%DB%8C+%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%E2%80%AD/data=!4m2!3m1!1s0x3fb2139722f491fb:0xb988493306b09486?sa=X&ved=1t:242&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full px-3 py-1.5
              text-sm bnazanin
              bg-black/80 text-white
              hover:bg-black
              transition
              shadow-sm
            "
          >
            مشاهده نقشه
          </a>
        </div>
      </div>
    </footer>
  );

  // Render footer using createPortal, ensuring it's outside the transform context
  return createPortal(content, document.body);
}
