"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const rightImages = [
  "/pics/pic3.png",
  "/pics/pic4.png",
  "/pics/pic5.png",
  "/pics/pic6.png",
  "/pics/pic7.png",
  "/pics/pic8.png",
];

export default function SplitHeroSlide() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Left and right split */}
      <div className="absolute inset-0 -z-10 grid grid-cols-2 h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src="/pics/pic2.png"
            alt="Left background"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
        </div>

        <div className="relative h-full w-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            allowTouchMove={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="h-full w-full"
          >
            {rightImages.map((src) => (
              <SwiperSlide key={src}>
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt="Right slideshow"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Centered logo1 */}
      <div className="relative z-40 flex h-full items-center justify-center">
        <div className="relative w-[50vw] max-w-[400px] aspect-[3/2]">
          <Image
            src="/logos/logo1.png"
            alt="Mehrandeh Bozorgi logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 70vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}
