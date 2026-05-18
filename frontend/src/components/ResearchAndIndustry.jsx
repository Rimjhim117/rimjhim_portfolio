import React from "react";
import { FaBookOpen, FaBriefcase, FaExternalLinkAlt, FaBuilding, FaChartLine, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ExperienceAndResearch() {
  const experiences = [
    {
      type: "Research",
      title: "AI-Powered Smart Cloud Kitchen with Personalized Recipe Recommendation System",
      issuer: "2025 IEEE 1st International Conference (RCSM 2025), MANIT Bhopal",
      icon: <FaBookOpen className="text-purple-600 text-2xl" />,
      desc: "Published in IEEE Xplore Digital Library. Proposed and developed an AI-powered cloud kitchen system integrating personalized recipe recommendations using NLP and machine learning.",
      link: "https://ieeexplore.ieee.org/document/11506842",
      borderColor: "border-purple-500",
    },
    {
      type: "Internship",
      title: "IBM PBEL Virtual Internship — Artificial Intelligence",
      issuer: "IBM (2025)",
      icon: <FaBriefcase className="text-blue-600 text-2xl" />,
      desc: "Selected for stipend-based virtual internship focused on applied Artificial Intelligence. Developed AI-powered chatbot (Readora) leveraging NLP and IBM Watson Assistant for personalized recommendations.",
      borderColor: "border-blue-500",
    },
    {
      type: "Internship",
      title: "Full-Stack Development Virtual Internship",
      issuer: "Skillbit Technologies (Jul 2025 – Aug 2025)",
      icon: <FaBriefcase className="text-orange-600 text-2xl" />,
      desc: "Completed hands-on training building full-stack applications using React, Node.js, and Express. Learned RESTful API development and database integration with MongoDB through guided projects. Gained exposure to agile development workflows and industry best practices.",
      borderColor: "border-orange-500",
    },
    {
      type: "Virtual Program",
      title: "Tata Group GenAI Data Analytics Job Simulation",
      issuer: "Tata Group (2025)",
      icon: <FaBrain className="text-indigo-600 text-2xl" />,
      desc: "Participated in program exploring Generative AI foundations, prompt engineering, and enterprise AI applications.",
      borderColor: "border-indigo-500",
    },
    {
      type: "Virtual Experience",
      title: "Deloitte Data Analytics & Technology Job Simulation",
      issuer: "Deloitte (Forage, 2025)",
      icon: <FaChartLine className="text-pink-600 text-2xl" />,
      desc: "Completed virtual program focusing on data analytics methodologies and technology consulting practices.",
      borderColor: "border-pink-500",
    },
    {
      type: "Industry Visit",
      title: "Tata Consultancy Services (TCS) Industry Visit",
      issuer: "TCS Varanasi (Sep 2024)",
      icon: <FaBuilding className="text-teal-600 text-2xl" />,
      desc: "Visited TCS, selected among a handful of students from the batch. Gained insights into corporate workflows, enterprise software development, and agile practices.",
      borderColor: "border-teal-500",
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-indigo-50 flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-indigo-900 mb-12 text-center"
      >
        Experience & Research
      </motion.h2>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white p-6 rounded-2xl shadow-sm border-t-4 ${exp.borderColor} hover:shadow-lg transition-all duration-300 flex flex-col h-full`}
          >
            <div className="flex items-center gap-3 mb-4">
              {exp.icon}
              <h3 className="text-sm font-bold tracking-wider text-gray-500 uppercase">{exp.type}</h3>
            </div>
            <h4 className="text-xl font-bold text-gray-800 leading-tight mb-2">
              {exp.title}
            </h4>
            <p className="text-sm font-semibold text-indigo-600 mb-4">
              {exp.issuer}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {exp.desc}
            </p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-purple-600 font-semibold hover:text-purple-800 transition"
              >
                View Publication <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}
