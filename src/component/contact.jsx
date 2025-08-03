// src/pages/Contact.jsx or src/components/Contact.jsx
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen  text-white px-6  flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-8 text-center max-w-xl">
        Feel free to reach out for collaborations, job opportunities, or just to
        connect!
      </p>

      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dilip-suthar-124b9a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#155cb3] p-4 rounded-full hover:bg-black transition duration-300"
        >
          <FaLinkedin className="text-white text-2xl hover:text-indigo-400" />
        </a>

        {/* Email */}
        <a
          href="mailto:dilipsutharbca05@gmail.com"
          className="bg-[#df3939] p-4 rounded-full hover:bg-black transition duration-300"
        >
          <FaEnvelope className="text-white text-2xl hover:text-indigo-400" />
        </a>
      </div>
    </section>
  );
}
