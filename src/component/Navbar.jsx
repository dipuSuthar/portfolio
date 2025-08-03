// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent dark:text-white">
      <div className="text-3xl font-bold font-logo">{"< Dilhar />"}</div>

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
