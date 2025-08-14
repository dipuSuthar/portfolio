// src/components/Hero.jsx
import { FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Hero() {
  return (
    <section id="hero" className=" text-white px-6 py-5 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT: Text Content */}
        <div className="md:w-1/1 space-y-6">
          <p className="text-7xl md:text-6xl font-bold leading-tight">
            Hi all, I'm <span className="text-indigo-400">Dilip👋</span>
          </p>

          <h3 className="text-4xl text-gray-300">
            A passionateFront-End Developer 🎨 with experience in building
            dynamic and scalable web applications using JavaScript, React.js,
            Next.js, and other modern libraries and frameworks.
          </h3>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl mt-4">
            <a
              href="https://www.linkedin.com/in/dilip-suthar-124b9a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#155cb3] hover:bg-[#1a1a1a] p-3 rounded-full transition-colors duration-300"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6" id="resume">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
              >
                CONTACT ME
              </ScrollLink>
            </button>
            <a href="./files/Resume-2025.pdf" download>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold">
                DOWNLOAD MY RESUME
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT: Animation/Image */}
        <div className="md:w-1/2 w-full flex justify-center mt-0 object-fill">
          <DotLottieReact
            src="https://lottie.host/9f79135e-2978-43ca-9d92-e3bb3ff197ed/c4M3oT8zv7.lottie"
            loop
            autoplay
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
    </section>
  );
}
