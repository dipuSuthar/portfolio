"use client";

const projects = [
  { 
    name:"Portfolio",
    desc: [
      "🚀 A fully responsive personal developer portfolio built using React.js and Tailwind CSS",
      "Showcases my projects, skills, and frontend development journey with a modern UI",
      "Integrated smooth animations, interactive sections, and optimized responsive layouts",
      "Focused on clean component architecture, performance optimization, and accessibility",
      "Deployed on Vercel for fast and reliable global hosting",
    ],
    lang: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    link: "https://madebydilip.vercel.app", // replace with your actual portfolio link
    code: "https://github.com/dipuSuthar/portfolio",
  },
  {
    name: "Talk (note: this repo private)",
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
    link: "https://devops-front-end.vercel.app", // replace with your GitHub or demo link
  },
  {
    name: "Video Timeline",
    desc: [
      "🎬 A custom YouTube-inspired video timeline built with React.js",
      "Implemented chapter-based video navigation with interactive timeline controls",
      "Users can directly jump to specific timestamps by clicking timeline segments",
      "Focused on frontend logic building, video synchronization, and custom progress calculations",
      "Built using React Player, Material UI, and modern React component architecture",
    ],
    lang: ["React", "JavaScript", "Material UI", "React Player", "CSS"],
    link: "https://video-time-line.vercel.app",
    code: "https://github.com/dipuSuthar/Video-Time-line",
  },
  {
    name: "MyMed Healthcare Website",

    desc: [
      "💊 A modern and fully responsive healthcare company website built using Next.js and Tailwind CSS",

      "Designed clean and user-friendly interfaces for showcasing healthcare services, company information, and responsive business layouts",

      "Implemented reusable frontend components, smooth navigation, and interactive UI sections for better user experience",

      "Focused on performance optimization, responsive design, accessibility, and scalable frontend architecture",

      "Built with a mobile-first approach and deployed using modern frontend hosting platforms",
    ],

    lang: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],

    features: [
      "Responsive Design",
      "Reusable Components",
      "Modern Healthcare UI",
      "Smooth Animations",
      "Mobile-First Layout",
      "Performance Optimization",
      "Interactive Sections",
    ],

    link: "https://my-med-beta.vercel.app/",
    code: "https://github.com/dipuSuthar/MyMed",
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
