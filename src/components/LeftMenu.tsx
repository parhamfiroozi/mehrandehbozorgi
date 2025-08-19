"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// ❌ removed: import { motion, AnimatePresence } from "framer-motion";

export default function LeftMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLLIElement | null>(null);
  const visibleOnHero = activeIndex === 0;

  useEffect(() => {
    const onActive = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail ?? 0;
      setActiveIndex(idx);
      if (idx !== 0) setIsOpen(false);
    };
    window.addEventListener("vp:active", onActive as EventListener);
    return () =>
      window.removeEventListener("vp:active", onActive as EventListener);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) {
      root.classList.add("overflow-hidden");
      setTimeout(() => firstLinkRef.current?.focus(), 0);
    } else {
      root.classList.remove("overflow-hidden");
    }
    return () => root.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!visibleOnHero) return null;

  return (
    <>
      <aside
        className="fixed z-[12000]"
        aria-label="Menu"
        style={{
          right: "max(1rem, env(safe-area-inset-right))",
          top: "max(1rem, env(safe-area-inset-top))",
        }}
      >
        <button
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          onClick={() => setIsOpen((v) => !v)}
          className="relative rounded-full overflow-hidden transition-transform active:scale-95 w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] md:w-[88px] md:h-[88px] shadow-lg"
        >
          <Image
            src="/logos/logo2.png"
            alt="Menu"
            fill
            className="object-contain"
            sizes="(max-width:640px) 64px, (max-width:768px) 76px, 88px"
            priority
          />
        </button>
      </aside>

      <div
        id="leftmenu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Main Menu"
        className={`fixed inset-0 z-[11500] transition-opacity duration-200 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/pics/pic2.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
        </div>

        <div
          className="absolute inset-0 flex items-start justify-end md:justify-end"
          onClick={(e) => e.stopPropagation()}
          dir="rtl"
          style={{
            paddingRight: "max(1rem, env(safe-area-inset-right))",
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingTop: "max(5.5rem, calc(env(safe-area-inset-top) + 4rem))",
            paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
          }}
        >
          <nav className="bnazanin w-full max-w-[1200px] bg-white/85 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-0 rounded-2xl md:rounded-none px-4 sm:px-6 md:px-0 py-6 md:py-0 shadow-xl md:shadow-none mx-auto md:mx-0">
            <ul className="text-right leading-tight space-y-4 sm:space-y-5 md:space-y-6">
              <li
                ref={firstLinkRef}
                tabIndex={0}
                className="hover:text-accent cursor-pointer whitespace-nowrap outline-none text-[clamp(28px,9vw,72px)]"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent<number>("vp:goTo", { detail: 1 })
                  );
                  setIsOpen(false);
                }}
              >
                منوی رستوران
              </li>

              <li
                className="hover:text-accent cursor-pointer whitespace-nowrap text-[clamp(24px,8vw,60px)]"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent<number>("vp:goTo", { detail: 2 })
                  );
                  setIsOpen(false);
                }}
              >
                شربت خانه سنتی
              </li>

              <li
                className="hover:text-accent cursor-pointer whitespace-nowrap text-[clamp(24px,8vw,60px)]"
                onClick={() => {
                  window.dispatchEvent(new Event("close:restaurant-menu"));
                  setIsOpen(false);
                }}
              >
                ارتباط با ما
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
