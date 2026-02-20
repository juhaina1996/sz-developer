import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dam View Glamps",
    location: "Banasura Dam, Wayanad",
    year: "2024",
    image: "/project1.jpg",
    status: "Completed",
    url: "#",
  },
  {
    title: "Ritu - A Luxury Farm Resort",
    location: "Vaduvanchal, Wayanad",
    year: "2028",
    image: "/project2.jpg",
    status: "Ongoing",
    url: "#",
  },
  {
    title: "Seraya - Villa Commune",
    location: "Pantheerankavu, Calicut",
    year: "2028",
    image: "/project3.jpg",
    status: "Launching Soon",
    url: "#",
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-[#e2e2e2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-center text-sm tracking-[0.3em] text-gray-600 mb-24">
          OUR PROJECTS
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                } gap-12 md:gap-20 items-start`}
              >
                {/* Image */}
                <div className="relative w-full md:w-[48%]">
                  <span className="absolute top-3 left-3 z-10 bg-white text-[11px] px-3 py-1 rounded-full shadow">
                    {project.status}
                  </span>

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 w-full">
                  {/* Top line row */}
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-sm text-gray-800 whitespace-nowrap">
                      {project.title}
                    </h3>

                    <span className="hidden md:block flex-1 h-px bg-gray-300" />

                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  {/* Location */}
                  <p className="text-sm text-gray-500 mb-6">
                    {project.location}
                  </p>

                  {/* External link */}
                  <a
                    href={project.url}
                    className="inline-flex items-center gap-1 text-gray-600 hover:text-black"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
