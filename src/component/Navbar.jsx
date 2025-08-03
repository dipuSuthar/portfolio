// src/components/Navbar.jsx

import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent dark:text-white">
      <div className="text-3xl font-bold font-logo">{"< Dilip Suthar />"}</div>

      <ul className="hidden md:flex gap-6 text-lg">
        {[
          { name: "Skills", to: "skills" },
          { name: "Education", to: "education" },
          { name: "Work Experiences", to: "work" },
          { name: "Achievements", to: "achievements" },
          { name: "Resume", to: "resume" },
          { name: "Contact", to: "contact" },
        ].map(({ name, to }) => (
          <li key={to} className="hover:text-indigo-400 cursor-pointer">
            <ScrollLink to={to} smooth={true} duration={500} offset={-60}>
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div className="ml-4">
        {/* <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button> */}
      </div>
    </nav>
  );
}
