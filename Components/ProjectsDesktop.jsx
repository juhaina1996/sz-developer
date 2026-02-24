"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsDesktop({ projects }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="flex flex-col gap-[128px]">
      {projects.map((project, index) => {
        const reverse = index === projects.length - 1;

        return (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              reverse ? "lg:flex-row-reverse" : ""
            } items-start`}
          >
            {/* IMAGE SIDE */}
            <div 
              className={`relative w-full ${project.imgWidth} group`}
              data-aos="fade-right"
              data-aos-delay="0"
              data-aos-duration="1200"
            >
              {/* Background Box */}
              <div
                className="absolute inset-0 
                -translate-x-[7px] 
                translate-y-[7px] 
                bg-[#c0c0c0]
                shadow-[0_40px_70px_-35px_rgba(0,0,0,0.22)]
                transition-all duration-300 group-hover:-translate-x-[10px] group-hover:translate-y-[10px]"
              />

              {/* Image Container */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 border border-[rgba(0,0,0,0.04)] block cursor-pointer overflow-hidden"
              >
                <span
                  className={`absolute z-20 bg-[#F6F6F6] text-[13px] text-[#3F3F3F] px-4 py-1 rounded-[10px] ${project.badgePosition}`}
                >
                  {project.status}
                </span>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={1000}
                  className={`w-full ${project.imgHeight} object-cover transition-transform duration-500 group-hover:scale-105`}
                />
              </a>
            </div>

            {/* TEXT SIDE */}
            <div className="flex-1 w-full pt-4">
              {/* TITLE ROW */}
              <div
                className={`flex div-one-projects gap-4 ${
                  reverse ? "lg:flex-row-reverse text-right" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-[40px] cursor-pointer hover:opacity-70 transition-opacity duration-200"
                >
                  <h3>{project.title}</h3>
                </a>
                <span>{project.year}</span>
              </div>

              {/* GREEN BAR + DIVIDER */}
              <div
                className={`flex w-full div-two-projects ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div 
                  className="w-[7px] h-[16px] bg-[#00CC61] mt-[4px]"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                />
                <div 
                  className="flex-1 h-[1px] bg-[#000000] hidden lg:block horizontal-black"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                />
              </div>

              {/* LOCATION + ICON */}
              <div
                className={`flex w-full div-three-projects ${
                  reverse
                    ? "lg:flex-row-reverse text-right"
                    : "justify-between items-center"
                }`}
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <p className="ml-[40px]">{project.location}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity duration-200"
                >
                  <ExternalLink size={23} strokeWidth={1.2} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
