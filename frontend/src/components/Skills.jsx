import React from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaGitAlt, FaGithub, FaCode, FaBrain, FaRobot, FaProjectDiagram, FaServer
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import {
  SiSpringboot, SiMysql, SiMongodb, SiStreamlit, SiNodedotjs, SiVercel, SiCplusplus
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className="text-pink-500 text-3xl mb-4" />,
      skills: [
        { name: "Machine Learning", color: "bg-pink-100 text-pink-700" },
        { name: "NLP", color: "bg-blue-100 text-blue-700" },
        { name: "Recommendation Systems", color: "bg-indigo-100 text-indigo-700" },
        { name: "IBM Watson", color: "bg-gray-100 text-gray-700" },
      ],
      gradient: "from-pink-50 to-white",
    },
    {
      title: "Programming Languages",
      icon: <FaCode className="text-orange-500 text-3xl mb-4" />,
      skills: [
        { name: "Java", color: "bg-orange-100 text-orange-700" },
        { name: "Python", color: "bg-blue-100 text-blue-700" },
        { name: "C", color: "bg-gray-100 text-gray-700" },
        { name: "C++", color: "bg-blue-100 text-blue-800" },
      ],
      gradient: "from-orange-50 to-white",
    },
    {
      title: "Web Technologies",
      icon: <FaReact className="text-cyan-500 text-3xl mb-4" />,
      skills: [
        { name: "HTML5", color: "bg-orange-100 text-orange-600" },
        { name: "CSS3", color: "bg-blue-100 text-blue-600" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-700" },
        { name: "React.js", color: "bg-cyan-100 text-cyan-700" },
      ],
      gradient: "from-cyan-50 to-white",
    },
    {
      title: "Backend & Databases",
      icon: <FaServer className="text-green-500 text-3xl mb-4" />,
      skills: [
        { name: "Node.js", color: "bg-green-100 text-green-700" },
        { name: "Spring Boot", color: "bg-green-100 text-green-800" },
        { name: "SQL", color: "bg-blue-100 text-blue-700" },
        { name: "MongoDB", color: "bg-green-100 text-green-900" },
      ],
      gradient: "from-green-50 to-white",
    },
    {
      title: "Tools & Platforms",
      icon: <FaGitAlt className="text-red-500 text-3xl mb-4" />,
      skills: [
        { name: "Git", color: "bg-red-100 text-red-700" },
        { name: "GitHub", color: "bg-gray-200 text-gray-800" },
        { name: "VS Code", color: "bg-blue-100 text-blue-600" },
        { name: "Streamlit", color: "bg-pink-100 text-pink-600" },
        { name: "Vercel", color: "bg-black text-white" },
      ],
      gradient: "from-red-50 to-white",
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gray-50 flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-800 mb-16 text-center"
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
            className={`bg-gradient-to-br ${group.gradient} p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100`}
          >
            {group.icon}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm ${skill.color}`}
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
