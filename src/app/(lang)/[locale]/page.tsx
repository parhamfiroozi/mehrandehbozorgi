"use client";

import VerticalPager from "@/components/VerticalPager";
import SplitHeroSlide from "@/components/SplitHeroSlide";
import { restaurantMenu } from "@/data/menu";
import Image from "next/image";

export default function Home() {
  const slides = [
    <SplitHeroSlide key="hero" />,

    // Second Slide - Menu
    <section key="second" className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid grid-cols-2 h-full w-full">
        <div className="relative h-full w-full">
          {/* left half intentionally empty */}
        </div>
        <div className="relative h-full w-full">
          <div
            className="h-full w-full p-6 sm:p-8 md:p-10 pt-[80px] md:pt-[100px] pb-20 overflow-y-auto"
            dir="rtl"
          >
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-flow-col auto-rows-min gap-x-12 gap-y-8 bnazanin text-right place-content-start justify-items-start">
              {restaurantMenu.map((cat) => (
                <div key={cat.title} className="space-y-3 w-full">
                  <h3 className="text-[clamp(20px,2.4vw,40px)] text-accent">
                    {cat.title}
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-10 gap-y-4 w-full">
                    {cat.items.map((it) => (
                      <li
                        key={it.name}
                        className="text-[clamp(16px,1.9vw,22px)]"
                      >
                        {it.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Opening motto */}
        <div className="absolute top-1/2 -translate-y-1/2 bnazanin text-right pointer-events-none pr-14 md:pr-24 lg:pr-32">
          <div className="text-[clamp(20px,2.2vw,32px)] font-normal text-gray-900 leading-snug">
            ساعت کاری:
            <span className="font-bold mx-1">۷:۳۰</span>
            تا
            <span className="font-bold mx-1">۲۳:۰۰</span>
          </div>
        </div>
      </div>
    </section>,

    // Third Slide - Image with "بزودی" and Google Map
    <section
      key="third"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Centered "بزودی" Text - Positioned closer to the top */}
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-[clamp(24px,5vw,60px)] text-white font-bold mb-6">
          بزودی
        </div>
      </div>
      {/* Google Map positioned below the "بزودی" */}
      <div className="relative w-full" style={{ height: "50%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.688667364016!2d53.63815122552457!3d29.61976871334704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb2139722f491fb%3A0xb988493306b09486!2z2KfZhNiz2YPZhdin2YbZhtmF2LHZhNin2YrYqSDYp9mI2YHYp9iq2Yog2LFu2LAg2YPZhtin2YbZhdmF2YlY!5e0!3m2!1sen!2sus!4v1667276168359!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>,

    // Fourth Slide with Logo, Google Maps, and Motto at the bottom
    <section
      key="fourth"
      className="relative h-screen w-full bg-white flex flex-col justify-between items-center text-center px-4"
    >
      {/* Content above the logo */}
      <div className="flex flex-col items-center justify-start flex-grow mt-[45%]">
        {/* "Designed & Developed" Text */}
        <div className="text-[clamp(16px,2vw,24px)] text-gray-700 bnazanin mb-6">
          <span className="font-bold">طراحی و توسعه</span>
        </div>
      </div>

      {/* Logo at the bottom */}
      <div className="w-[120px] h-[120px] mb-4">
        <Image
          src="/logos/designer.png"
          alt="Designer Logo"
          width={120} // Fixed width
          height={120} // Fixed height
          className="object-contain"
          priority
        />
      </div>
    </section>,
  ];

  return (
    <>
      <VerticalPager slides={slides} />
    </>
  );
}
