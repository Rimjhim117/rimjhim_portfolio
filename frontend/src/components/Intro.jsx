import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-4">
          Hi, I'm Rimjhim Srivastava
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          IT Student | Backend Developer | ML Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="/Rimjhim_Resume.pdf"
            download
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300 shadow"
          >
            Download Resume
          </a>
          <div className="flex gap-4 justify-center sm:justify-start text-purple-700 text-2xl">
            <a
              href="https://github.com/Rimjhim117"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rimjhim-srivastava-52769032b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-900"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
<img
  src="/rimjhim_profile_centered.jpg"
  alt="Rimjhim Srivastava"
  className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
/>
      </div>
    </section>
  );
}