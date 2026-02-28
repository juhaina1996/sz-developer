"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ProjectsMobile from "./ProjectsMobile";
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
    imgHeight: "h-[97vh]",
    imgWidth: "w-[388px]",
    badgePosition: "top-[35px] right-[27px]",
  },
  {
    title: "Ritu - A Luxury Farm Resort",
    location: "Vaduvanchal, Wayanad",
    year: "2028",
    image: "/project 2.png",
    status: "Ongoing",
    url: "http://www.rituresort.com/",
    imgHeight: "h-[83vh]",
    imgWidth: "w-[65vw]",
    badgePosition: "top-[35px] left-[20px]",
  },
  {
    title: "Seraya - Villa Commune",
    location: "Pantheerankavu, Calicut",
    year: "2028",
    image: "/project 3.png",
    status: "Launching Soon",
    url: "",
    imgHeight: "h-[74vh]",
    imgWidth: "w-[65vw]",
    badgePosition: "top-[35px] right-[40px]",
  },
];

export default function Projects() {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);
  
  return (
    <section 
      id="projects" 
      className="w-full bg-transparent py-[128px]"
    >
      <div className="w-full px-12 our-projects-container">
        {/* SECTION HEADING */}
        <h2 className="text-center text-[36px] tracking-[0.3em] text-[#6E6E6E] mb-[89px] our-projects">
          OUR PROJECTS
        </h2>
        {isMobile && <ProjectsMobile />}
        {/* PROJECT LIST */}
        {!isMobile && (
          <div className="flex flex-col gap-[128px]">
            {projects.map((project, index) => {
              const reverse = index === projects.length - 1; // Only last reversed

              return (
                <div
                  key={index}
                  className={`flex flex-row ${
                    reverse ? "flex-row-reverse" : ""
                  } items-start`}
                >
                  {/* IMAGE SIDE */}
                  <div 
                    className={`relative group`}
                  >
                    {/* <div className="absolute inset-0 translate-x-[-7px] translate-y-[7px] bg-[#c0c0c0] shadow-[0_40px_70px_-35px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:translate-x-[-10px] group-hover:translate-y-[10px]" /> */}

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 border border-[rgba(0,0,0,0.04)] block cursor-pointer overflow-hidden"
                      >
                        <span
                          className={`absolute z-20 bg-[#F6F6F6] text-[13px] text-[#3F3F3F] px-4 py-1 rounded-[4px] ${project.badgePosition}`}
                        >
                          {project.status}
                        </span>

                        <Image
                          src={project.image}
                          alt={project.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className={`w-full ${project.imgHeight} object-contain transition-transform duration-500 group-hover:scale-105`}
                        />
                      </a>
                    ) : (
                      <div className="relative z-10 border border-[rgba(0,0,0,0.04)] overflow-hidden">
                        <span
                          className={`absolute z-20 bg-[#F6F6F6] text-[13px] text-[#3F3F3F] px-4 py-1 rounded-[4px] ${project.badgePosition}`}
                        >
                          {project.status}
                        </span>

                        <Image
                          src={project.image}
                          alt={project.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className={`w-full ${project.imgHeight} object-contain transition-transform duration-500 group-hover:scale-105`}
                        />
                      </div>
                    )}
                  </div>
                  {/* TEXT SIDE */}
                  <div className="flex-1 w-full pt-4">
                    {/* TITLE ROW */}
                    <div
                      className={`flex div-one-projects justify-between ${
                        reverse ? "text-right" : ""
                      }`}
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                    >
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[40px] cursor-pointer hover:opacity-70 transition-opacity duration-200"
                        >
                          <h3>{project.title}</h3>
                        </a>
                      ) : (
                        <h3 className="">{project.title}</h3>
                      )}

                      <span className={`${reverse ? "mr-[10px]" : ""}`}>{project.year}</span>
                    </div>

                    {/* GREEN BAR + DIVIDER */}
                    <div
                      className={`flex w-full div-two-projects ${
                        reverse ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div 
                        className="w-[7px] h-[16px] bg-[#00CC61] mt-[4px]"
                      />

                      <div 
                        className="flex-1 h-[1px] bg-[#000000] block horizontal-black"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                      />
                    </div>

                    {/* LOCATION + ICON */}
                    <div
                      className={`flex w-full div-three-projects ${
                        reverse
                          ? "flex-row-reverse text-right"
                          : "justify-between items-center"
                      }`}
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                    >
<p className={`${reverse ? "mr-auto" : "ml-[40px]"}`}>
  {project.location}
</p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity duration-200"
                        >
                          <ExternalLink size={23} strokeWidth={1.2} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
