"use client";
import React from "react";

const projects = [
  {
    name: "Portfolio",
    desc: "🚀 My personal developer portfolio built from scratch to showcase my skills, projects, and experience.",
    lang: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
  },
  {
    name: "Talk",
    desc: "🔥 Real-time chat application with one-to-one and group messaging support.",
    lang: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
  },
];

// const Bigprojects = [
//   {
//     name: "Saayahealth",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     image: "/images/saaya.png",
//     link: "https://www.google.com",
//   },
//   {
//     name: "Nextu",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     image: "/images/nextu.png",
//     link: "https://www.google.com",
//   },
// ];
export default function OpenSourceProjects() {
  return (
    <>
      <section id="projects" className="text-white  px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-4">
            Open Source Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="bg-[#0f2137] p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-purple-600 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  💻 {proj.name}
                </h3>

                <p className="text-gray-300 mb-4">{proj.desc}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.lang.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="projects" className=" text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Big Projects</h2>
          <p className="text-lg text-gray-300 mb-12">
            Some startups and companies that I helped to create their tech
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Bigprojects.map((project, i) => (
              <div
                key={i}
                className="bg-[#0f2137] p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-purple-500/30 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="mx-auto mb-4 w-48 h-48 object-contain"
                />
                <h3 className="text-xl font-bold text-center">
                  {project.name}
                </h3>
                <p className="text-center text-gray-300 mt-2 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-200"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
