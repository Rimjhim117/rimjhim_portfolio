import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 gap-12 bg-gradient-to-br from-indigo-50/20 via-[#fafafa] to-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100/60">
          Available for Opportunities
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Hi, I'm <span className="text-indigo-600">Rimjhim Srivastava</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 font-medium tracking-wide mb-8">
          IT Graduate & AI-Driven Software Engineer
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="/Rimjhim_Resume.pdf"
            download
            className="bg-indigo-600 text-white px-8 py-3.5 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 font-semibold text-sm tracking-wide text-center"
          >
            Download Resume
          </a>
          <div className="flex gap-4 justify-center sm:justify-start text-slate-500 text-2xl">
            <a
              href="https://github.com/Rimjhim117"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-800 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rimjhim-srivastava-52769032b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-800 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <img
          src="/rimjhim_profile_centered.jpg"
          alt="Rimjhim Srivastava"
          className="w-72 h-72 object-cover rounded-[2rem] border border-slate-200/80 shadow-2xl shadow-slate-200/40 hover:scale-[1.02] transition-all duration-300"
        />
      </motion.div>
    </section>
  );
}