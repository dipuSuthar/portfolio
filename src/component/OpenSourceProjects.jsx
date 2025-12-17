"use client";

const projects = [
  {
    name: "Portfolio",
    desc: [
      "🚀 A fully responsive personal developer portfolio built with React.js and Tailwind CSS",
      "Showcases my skills, certifications, and projects in a clean, mobile-first UI",
      "Includes reusable components, optimized performance, and smooth navigation",
      "Deployed on Vercel for fast, reliable hosting with global CDN delivery",
    ],
    lang: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
    link: "https://madebydilip.vercel.app", // replace with your actual portfolio link
    code: "https://github.com/dipuSuthar/portfolio",
  },
  {
    name: "Talk",
    desc: [
      "🔥 A secure real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO",
      "Supports one-to-one and group messaging with WebSockets for seamless communication",
      "Features include image/file upload with preview",
      "End-to-end encryption for private chats",
      "Authentication with JWT",
      "Message history, online/offline status, and typing indicators",
      "Designed with a responsive chat UI and scalable backend to handle concurrent users",
    ],
    lang: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
    link: "https://talk-client.vercel.app", // replace with your GitHub or demo link
  },
];

export default function OpenSourceProjects() {
  return (
    <section id="projects" className="text-white px-6">
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

              {/* Description as bullet list */}
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                {proj.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

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

              {/* Project Link */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  View Project
                </a>
              )}
              {proj.code && (
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 ml-1 text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  Code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
