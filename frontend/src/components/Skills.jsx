import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiStreamlit
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C", icon: <FaC className="text-blue-600" /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> }, // ✅ Added
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-black" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-pink-600" /> }, // ✅ Added
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-white text-center"
    >
      <h2 className="text-4xl font-bold text-purple-700 mb-12">My Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-purple-600 mb-4">{group.title}</h3>
            <ul className="grid grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 bg-white px-4 py-2 rounded-full text-sm shadow-sm border border-purple-100"
                >
                  {skill.icon}
                  <span className="text-gray-700">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

