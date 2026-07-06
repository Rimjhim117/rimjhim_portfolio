import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          Hi, I'm Rimjhim Srivastava
        </h1>
        <p className="text-lg sm:text-xl text-indigo-600 font-semibold uppercase tracking-wider mb-6">
          IT Graduate
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="/Rimjhim_Resume.pdf"
            download
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Download Resume
          </a>
          <div className="flex gap-4 justify-center sm:justify-start text-slate-600 text-2xl">
            <a
              href="https://github.com/Rimjhim117"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rimjhim-srivastava-52769032b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
<img
  src="/rimjhim_profile_centered.jpg"
  alt="Rimjhim Srivastava"
  className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
/>
      </motion.div>
    </section>
  );
}