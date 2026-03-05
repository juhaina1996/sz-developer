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
    <section className="relative w-full h-[91vh] bg-[#e5e5e5] overflow-hidden">

     <Image
  src="/images/Hero image.jpg"
  alt="Hero Background"
  fill
  priority
  className="
    object-contain 
    md:object-cover 
    object-bottom 
    md:object-center
    scale-100 md:scale-100
  "
/>

      <div className="hero-main absolute inset-0 flex items-start">
        <div className="px-6 md:px-12 pt-[40vh] md:pt-40">
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