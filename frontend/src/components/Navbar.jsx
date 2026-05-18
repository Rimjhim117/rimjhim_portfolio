import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between md:justify-end items-center">
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-full justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center text-gray-700 font-medium text-sm lg:text-base">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-purple-600 transition duration-300">
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button className="ml-2 bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700 hover:shadow-lg transition duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg flex flex-col py-4 border-b border-gray-100">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-700 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 py-3">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition duration-300">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
