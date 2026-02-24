"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Dam View Glamps",
    location: "Banasura Dam, Wayanad",
    year: "2024",
    image: "/project1.jpg",
    status: "Completed",
    url: "https://www.instagram.com/damview_banasura?igsh=MXdhM2ttbTR2Y3FzdQ==",
    imgHeight: "h-[690px]",
    imgWidth: "w-[50vw]",
    badgePosition: "top-[35px] left-[27px]",
  },
  {
    title: "Ritu - A Luxury Farm Resort",
    location: "Vaduvanchal, Wayanad",
    year: "2028",
    image: "/project2.jpg",
    status: "Ongoing",
    url: "http://www.rituresort.com/",
    imgHeight: "h-[438px]",
    imgWidth: "w-[100vw]",
    badgePosition: "top-[35px] left-[20px]",
  },
  {
    title: "Seraya - Villa Commune",
    location: "Pantheerankavu, Calicut",
    year: "2028",
    image: "/project3.jpg",
    status: "Launching Soon",
    url: "#",
    imgHeight: "h-[390px]",
    imgWidth: "w-[100vw]",
    badgePosition: "top-[35px] right-[40px]",
  },
];
export default function ProjectsMobile() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="flex flex-col gap-[120px]">
      {projects.map((project, index) => {
        const isFirst = index === 0;

        return (
          <div key={index} className="w-full">
            {/* ================= FIRST PROJECT ================= */}
            {isFirst ? (
              <div className="flex items-stretch">
                {/* IMAGE */}
                <div 
                  className={`${project.imgWidth} flex-shrink-0 group`}
                  data-aos="fade-right"
                  data-aos-delay="0"
                  data-aos-duration="1200"
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 translate-x-[-7px] translate-y-[7px] bg-[#c0c0c0] transition-all duration-300 group-hover:translate-x-[-10px] group-hover:translate-y-[10px]" />

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 border border-[rgba(0,0,0,0.04)] h-full block cursor-pointer overflow-hidden"
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
                </div>

                {/* RIGHT SIDE — FULL HEIGHT COLUMN */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* TOP SECTION */}
                  <div>
                    <p 
                      className="text-[10px] text-right text-[#3F3F3F] mt-1"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                    >
                      {project.location}
                    </p>

                    <div className="flex items-center">
                      <div 
                        className="w-[6px] h-[14px] bg-[#00CC61]"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                      />
                      <div 
                        className="flex-1 h-[1px] bg-black"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                      />
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-right text-[#3F3F3F] cursor-pointer block hover:opacity-70 transition-opacity duration-200"
                      data-aos="fade-up"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                    >
                      <h3>{project.title}</h3>
                    </a>
                  </div>

                  {/* 🔥 BOTTOM RIGHT YEAR */}
                  <div 
                    className="flex justify-start items-center gap-2 ml-[10px]"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                  >
                    <span className="text-[13px] text-[#3F3F3F]">
                      {project.year}
                    </span>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity duration-200"
                    >
                      <ExternalLink size={18} strokeWidth={1.2} />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* ================= OTHER PROJECTS ================= */

              <div>
                {/* ================= IMAGE ================= */}
                <div 
                  className="relative w-full group"
                  data-aos="fade-right"
                  data-aos-delay="0"
                  data-aos-duration="1200"
                >
                  <div className="absolute inset-0 translate-x-[-7px] translate-y-[7px] bg-[#c0c0c0] transition-all duration-300 group-hover:translate-x-[-10px] group-hover:translate-y-[10px]" />

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

                {/* ================= DIVIDER + CONTENT ================= */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div 
                    className="absolute left-[36px] top-0 w-[1px] h-[40px] bg-black"
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  />

                  {/* ===== TOP ROW (Year + Title) ===== */}
                  <div 
                    className="flex items-center ml-[54px]"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    <div className="w-[70px] mt-3  text-[13px] text-[#6E6E6E]">
                      {project.year}
                    </div>

                    <div className="flex-1 text-right">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#6E6E6E] cursor-pointer inline-block hover:opacity-70 transition-opacity duration-200"
                      >
                        <h3>{project.title}</h3>
                      </a>
                    </div>
                  </div>

                  {/* ===== HORIZONTAL LINE (STARTS AFTER VERTICAL) ===== */}
                  <div className="relative mt-2 ml-[42.5px]">
                    {/* Green block */}
                    <div 
                      className="absolute top-[-40px] left-[-12px] w-[14px] h-[4px] bg-[#00CC61]"
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    />

                    {/* Horizontal line */}
                    <div 
                      className="ml-[-6px] h-[1px] bg-black w-full"
                      data-aos="fade-left"
                      data-aos-delay="600"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                    />
                  </div>

                  {/* ===== BOTTOM ROW (Icon + Location) ===== */}
                  <div 
                    className="flex items-center mt-2 ml-[54px]"
                    data-aos="fade-up"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                  >
                    <div className="w-[70px]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity duration-200"
                      >
                        <ExternalLink size={18} strokeWidth={1.2} />
                      </a>
                    </div>

                    <div className="flex-1 text-right">
                      <p className="text-[10px] text-[#6E6E6E]">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
