"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-[#e5e5e5] overflow-hidden">

      {/* Desktop Image */}
      <Image
        src="/images/Hero image.jpg"
        alt="Hero Background"
        fill
        priority
        className="hidden md:block object-cover object-center"
      />

      {/* Mobile Image */}
      <Image
        src="/hero mobile.jpeg"
        alt="Hero Background"
        fill
        priority
        className="block md:hidden object-contain object-bottom"
      />

      <div className="hero-main absolute inset-0 flex items-start">
        <div className="px-6 md:px-12 pt-[37vh] md:pt-40">
          <h1 
            className="tracking-wide text-[18px] md:text-[40px]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <span className="text-[#00CC61]">
              EXCEEDING
            </span>
            <span className="text-black ml-2">
              POSSIBILITIES
            </span>
          </h1>
        </div>
      </div>

    </section>
  );
}