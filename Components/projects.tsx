import Image from "next/image";

const projects = [
  {
    title: "Dam View Glamps",
    location: "Banasura Dam, Wayanad",
    year: "2024",
    image: "/project1.jpg",
    url: "#",
  },
  {
    title: "Ritu - A Luxury Farm Resort",
    location: "Vaduvanchal, Wayanad",
    year: "2028",
    image: "/project2.jpg",
    url: "#",
  },
  {
    title: "Seraya - Villa Commune",
    location: "Pantheerankavu, Calicut",
    year: "2028",
    image: "/project3.jpg",
    url: "#",
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-white py-24 md:py-32">

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl tracking-wide text-gray-800 mb-16">
          OUR PROJECTS
        </h2>

        {/* Projects List */}
        <div className="flex flex-col gap-24">

          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
            >

              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col w-full md:w-1/2">

                {/* Top Row */}
                <div className="flex justify-between items-start mb-2">

                  <div className="text-sm text-gray-800">
                    {project.title}
                  </div>

                  <div className="text-sm text-gray-500">
                    {project.year}
                  </div>

                </div>

                {/* Location */}
                <div className="text-sm text-gray-500 mb-4">
                  {project.location}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  className="text-sm text-gray-700 underline w-fit"
                >
                  View Project
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
