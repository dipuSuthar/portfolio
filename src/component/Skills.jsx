import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNpm,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMui,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiVite,
  SiWebpack,
  SiPrettier,
} from "react-icons/si";
import { FaDog } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const skills = [
  { title: "Frontend/Design", percent: 90 },
  { title: "Backend", percent: 60 },
  { title: "Programming", percent: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-4">
          Skills
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Left Lottie Animation */}
          <div className="w-full md:w-1/2">
            <DotLottieReact
              src="https://lottie.host/79c17ad3-382e-4779-b8c6-33ddc74e90ab/uX1BlZ6ZOf.lottie"
              loop
              autoplay
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">What I Do</h3>
            {/* <p className="text-lg font-medium mb-6">
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p> */}
            <p className="text-lg font-medium mb-6">
              Passionate Front-End Developer who loves crafting interactive,
              responsive, and user-friendly web applications.
            </p>

            {/* Skills Icons */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-8 text-white text-4xl">
              {[
                // Core
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3Alt />, name: "CSS3" },
                { icon: <FaSass />, name: "Sass" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <SiMui />, name: "Material UI" },

                // Languages
                { icon: <FaJsSquare />, name: "JavaScript" },
                // { icon: <SiTypescript />, name: "TypeScript" },

                // Frameworks
                { icon: <FaReact />, name: "React.js" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiRedux />, name: "Redux" },

                // Build Tools
                { icon: <FaNpm />, name: "NPM" },
                // { icon: <SiYarn />, name: "Yarn" },
                { icon: <SiVite />, name: "Vite" },
                { icon: <SiWebpack />, name: "Webpack" },

                // Version Control
                { icon: <FaGitAlt />, name: "Git" },
                { icon: <FaGithub />, name: "GitHub" },

                // Code Quality
                { icon: <SiPrettier />, name: "Prettier" },
                { icon: <FaDog />, name: "Husky" },
              ].map(({ icon, name }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-sm text-gray-300 hover:text-indigo-400 transition-transform duration-300 hover:scale-110"
                >
                  {icon}
                  <span className="mt-2">{name}</span>
                </div>
              ))}
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Design pixel-perfect, accessible UIs that work across all
                  devices
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Bring designs to life with smooth animations and
                  micro-interactions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Leverage modern tools like Tailwind CSS, Sass, and Material-UI
                  for rapid styling
                </span>
              </li>
              {/* <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Implement SEO-friendly, blazing-fast pages with Next.js
                </span>
              </li> */}
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Ensure consistent design with reusable and modular components
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Proficiency Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-8">Proficiency</h3>
            {skills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <p className="mb-2">{skill.title}</p>
                <div className="w-full h-4 bg-white/20 rounded-full">
                  <div
                    className="h-full bg-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <DotLottieReact
              src="https://lottie.host/001d5d46-cb37-479b-aafd-9fa84d553c0f/BWdL6MwWf1.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
