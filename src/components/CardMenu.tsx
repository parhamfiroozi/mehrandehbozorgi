"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type CardMenuItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: { label: string; href: string }[];
};

export default function CardMenu({
  items,
  baseColor = "#fff",
  ease = "easeOut",
}: {
  items: CardMenuItem[];
  baseColor?: string;
  ease?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const transition = { duration: 0.35, ease } as const;

  return (
    <div dir="rtl" className="w-full">
      <div className="mx-auto max-w-[1800px] w-full pr-4 sm:pr-8 lg:pr-12">
        <div className="flex flex-col items-end gap-10">
          {items.map((item, idx) => (
            <div key={item.label} className="w-full">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="bnazanin rounded-[28px] w-full px-12 py-10 text-[clamp(48px,10vw,180px)] font-normal shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-transform active:scale-95 text-right"
                style={{ background: item.bgColor, color: item.textColor }}
              >
                {item.label}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={transition}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-5 rounded-[24px] px-12 py-10 bnazanin text-[clamp(36px,7.5vw,140px)] leading-snug"
                      style={{ background: baseColor, color: "#000" }}
                    >
                      <ul className="space-y-6 text-right">
                        {item.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="hover:text-accent transition-colors"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
