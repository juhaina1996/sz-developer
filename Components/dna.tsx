"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DNA() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="dna-main w-full py-32 md:py-40 bg-transparent">
      <div className="dna-sub-container text-center">
        {/* Heading */}
        <h2 
          className="text-xl md:text-2xl tracking-wide text-gray-700 mb-8"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          OUR DNA
        </h2>

        {/* Paragraph */}
        <p 
          className="dna-sub text-base md:text-lg text-gray-700 leading-relaxed font-light"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          At our core is a belief that meaningful spaces emerge from patient
          stewardship, precise decision-making, and an uncompromising respect
          for quality that reveals itself over time -{" "}
          <span 
            className="text-green ml-1"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            exceeding
          </span> possibilities.
        </p>
      </div>
    </section>
  );
}
