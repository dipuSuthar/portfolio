import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiExpress,
  SiSocketdotio,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Skills() {
  const skills = [
    { title: "Frontend/Design", percent: 90 },
    { title: "Backend", percent: 60 },
    { title: "Programming", percent: 70 },
  ];
  return (
    <>
      <section id="skills" className="min-h-screen text-white px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <DotLottieReact
              src="https://lottie.host/79c17ad3-382e-4779-b8c6-33ddc74e90ab/uX1BlZ6ZOf.lottie"
              loop
              autoplay
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">What I do</h2>
            <p className="text-lg font-semibold mb-6">
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>

            {/* Icons Grid */}
            {/* Icons Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-8 text-white text-4xl">
              {[
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3Alt />, name: "CSS3" },
                { icon: <FaSass />, name: "Sass" },
                { icon: <FaJsSquare />, name: "JavaScript" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaReact />, name: "ReactJS" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiAngular />, name: "Angular" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiExpress />, name: "Express.js" },
                { icon: <SiSocketdotio />, name: "Socket.IO" },
                { icon: <FaNpm />, name: "NPM" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiMongodb />, name: "MongoDB" },
              ].map(({ icon, name }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-sm text-gray-300 hover:text-indigo-400 transition-transform duration-300 hover:scale-110"
                >
                  <div>{icon}</div>
                  <span className="mt-2">{name}</span>
                </div>
              ))}
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Build responsive, interactive, and accessible front-end user
                  interfaces using React, Next.js, and Angular
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Develop Progressive Web Applications (PWAs) with smooth user
                  experience, offline support, and fast loading times
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl">⚡</span>
                <span>
                  Integrate RESTful APIs and WebSocket-based real-time features
                  using modern front-end technologies
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left - Skill Bars */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Proficiency</h2>

            {skills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <p className="mb-2">{skill.title}</p>
                <div className="w-full h-4 bg-white/20 rounded-full">
                  <div
                    className="h-full bg-purple-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <DotLottieReact
              src="https://lottie.host/001d5d46-cb37-479b-aafd-9fa84d553c0f/BWdL6MwWf1.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>
    </>
  );
}
