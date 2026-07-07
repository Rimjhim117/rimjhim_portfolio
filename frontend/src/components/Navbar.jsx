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
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between md:justify-end items-center">
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-full justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-indigo-600 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center text-slate-600 font-semibold text-xs tracking-wider uppercase">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-indigo-600 transition duration-300">
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <button className="ml-4 bg-indigo-600 text-white px-6 py-2.5 rounded-full shadow-sm hover:shadow hover:bg-indigo-700 transition duration-300 font-bold tracking-wider">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md w-full flex flex-col py-2 shadow-lg border-t border-slate-100">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-slate-600 font-semibold tracking-wider uppercase text-xs hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 py-4 border-t border-slate-100">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full shadow-sm hover:bg-indigo-700 transition duration-300 font-bold tracking-wider text-xs uppercase">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
