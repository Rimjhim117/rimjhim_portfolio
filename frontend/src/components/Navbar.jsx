import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center text-gray-700 font-medium text-base">
          <a href="#about" className="hover:text-purple-600 transition duration-300">About Me</a>
          <a href="#skills" className="hover:text-purple-600 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-purple-600 transition duration-300">Projects</a>
          <a href="#certifications" className="hover:text-purple-600 transition duration-300">Certifications</a>
          <a href="#contact">
            <button className="ml-4 bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 transition duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
