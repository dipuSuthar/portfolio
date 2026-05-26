import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiWebpack,
  SiVite,
  SiPrettier,
  SiEslint,
  SiAxios,
  SiVercel,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiReactrouter />, name: "React Router" },
    ],
  },

  {
    title: "Styling & UI",
    skills: [
      { icon: <FaSass />, name: "Sass" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiMui />, name: "Material UI" },
      { icon: <SiFramer />, name: "Framer Motion" },
    ],
  },

  {
    title: "State Management & APIs",
    skills: [
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiReactquery />, name: "React Query" },
      { icon: <SiAxios />, name: "Axios" },
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      { icon: <SiWebpack />, name: "Webpack" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiPrettier />, name: "Prettier" },
      { icon: <SiEslint />, name: "ESLint" },
      { icon: <SiVercel />, name: "Vercel" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-14 border-l-4 border-purple-500 pl-4">
          Skills & Technologies
        </h2>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Lottie */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/79c17ad3-382e-4779-b8c6-33ddc74e90ab/uX1BlZ6ZOf.lottie"
              loop
              autoplay
              className="w-full max-w-[450px] h-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-5">Frontend Developer</h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Passionate frontend developer focused on building responsive,
              interactive, and performance-optimized web applications using
              modern React ecosystem tools and UI technologies.
            </p>

            {/* Highlights */}
            <ul className="space-y-5 text-base text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Build responsive and accessible user interfaces across all
                  devices
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Create smooth animations and interactive experiences using
                  modern frontend tools
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Integrate APIs and manage application state efficiently using
                  Redux and React Query
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Optimize frontend performance using lazy loading, asset
                  optimization, and efficient rendering techniques
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-14">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-8 text-purple-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                {category.skills.map(({ icon, name }, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center justify-center text-sm text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
                  >
                    <div className="text-5xl drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]">
                      {icon}
                    </div>

                    <span className="mt-3 text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Animation */}
        {/* <div className="flex justify-center mt-24">
          <div className="w-full max-w-md">
            <DotLottieReact
              src="https://lottie.host/001d5d46-cb37-479b-aafd-9fa84d553c0f/BWdL6MwWf1.lottie"
              loop
              autoplay
              className="w-full h-auto"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
