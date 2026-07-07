import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 bg-white flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
          <span className="font-mono text-indigo-600 text-xl mr-3 font-semibold">01.</span>
          About Me
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
          I am an <span className="font-semibold text-indigo-600">IT Graduate</span> specializing in building intelligent web applications, with proven experience across MERN, Spring Boot, FastAPI, and NLP-based recommendation systems.
        </p>
        <p className="text-slate-500 text-base leading-relaxed mb-8">
          I have a proven track record of delivering production-ready, data-driven products—combining strong backend fundamentals, database design, frontend polish, and applied machine learning to solve real-world problems.
        </p>

        <div className="space-y-6">
          {/* Education Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Academic Background</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300">
                <FaUniversity className="text-indigo-600 text-2xl mt-1 min-w-[24px]" />
                <div>
                  <p className="text-base text-slate-800 font-bold">B.Tech in Information Technology</p>
                  <p className="text-sm text-slate-500 font-medium mb-1.5">United College of Engineering and Research, Prayagraj • 2022–2026</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                    CGPA: 8.03
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300">
                <FaSchool className="text-indigo-600 text-2xl mt-1 min-w-[24px]" />
                <div>
                  <p className="text-base text-slate-800 font-bold">High Schooling & Inter College</p>
                  <p className="text-sm text-slate-500 font-medium">St. Anthony's Convent Girls' Inter College, Prayagraj</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/3 flex justify-center"
      >
        <img
          src="/About_photo.jpg"
          alt="Rimjhim Srivastava"
          className="w-72 h-auto rounded-3xl shadow-xl border border-slate-200/60 object-cover object-top hover:scale-[1.01] transition-all duration-300"
        />
      </motion.div>
    </section>
  );
}
