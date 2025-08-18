"use client";

import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";

export default function VerticalPager({
  slides,
  spaceBetween = 0, // ← new prop to control gaps between slides
}: {
  slides: React.ReactNode[];
  spaceBetween?: number;
}) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const onGoTo = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail ?? 0;
      swiperRef.current?.slideTo(idx);
    };
    window.addEventListener("vp:goTo", onGoTo as EventListener);
    return () => window.removeEventListener("vp:goTo", onGoTo as EventListener);
  }, []);

  return (
    <SwiperReact
      direction="vertical"
      slidesPerView={1}
      modules={[Mousewheel, Pagination]}
      pagination={{ clickable: true }}
      mousewheel={{ forceToAxis: true, releaseOnEdges: true, sensitivity: 1 }} // ← lets you leave slide 2
      spaceBetween={spaceBetween} // ← gap between slides
      className="h-screen w-full"
      onSwiper={(sw) => {
        swiperRef.current = sw;
        window.dispatchEvent(new CustomEvent("vp:active", { detail: 0 }));
      }}
      onSlideChange={(sw) => {
        window.dispatchEvent(
          new CustomEvent("vp:active", { detail: sw.activeIndex })
        );
      }}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx} className="h-screen w-full">
          {slide}
        </SwiperSlide>
      ))}
    </SwiperReact>
  );
}
