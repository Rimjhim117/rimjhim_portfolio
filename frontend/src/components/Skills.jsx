import React from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaBrain, FaReact, FaServer, FaGitAlt
} from "react-icons/fa";

export default function Skills() {
  const skillGroups = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className="text-indigo-600 text-3xl mb-4" />,
      skills: [
        { name: "Machine Learning" },
        { name: "NLP" },
        { name: "Recommendation Systems" },
        { name: "IBM Watson" },
      ],
    },
    {
      title: "Programming Languages",
      icon: <FaCode className="text-indigo-600 text-3xl mb-4" />,
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "C" },
        { name: "C++" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <FaReact className="text-indigo-600 text-3xl mb-4" />,
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React.js" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="text-indigo-600 text-3xl mb-4" />,
      skills: [
        { name: "Node.js" },
        { name: "Spring Boot" },
        { name: "SQL" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaGitAlt className="text-indigo-600 text-3xl mb-4" />,
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Streamlit" },
        { name: "Vercel" },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-white flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-slate-800 mb-16 text-center"
      >
        Technical Arsenal
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
          >
            {group.icon}
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 shadow-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
