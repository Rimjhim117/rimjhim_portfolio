import React from "react";
import { FaBookOpen, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ExperienceAndResearch() {
  const experiences = [
    {
      type: "Research",
      title: "AI-Powered Smart Cloud Kitchen with Personalized Recipe Recommendation System",
      issuer: "2025 IEEE 1st International Conference (RCSM 2025)",
      icon: <FaBookOpen className="text-purple-600 text-2xl" />,
      desc: "Authored a research paper detailing hybrid recommendation algorithms and NLP methodologies for personalized dietary solutions within a scalable cloud infrastructure.",
      link: "https://ieeexplore.ieee.org/document/11506842",
      borderColor: "border-purple-500",
    },
    {
      type: "Internship",
      title: "IBM PBEL Virtual Internship - Artificial Intelligence",
      issuer: "IBM (2025)",
      icon: <FaBriefcase className="text-blue-600 text-2xl" />,
      desc: "Gained hands-on experience in building AI solutions. Developed an AI-powered chatbot (Readora) leveraging NLP and IBM Watson Assistant for personalized recommendations.",
      borderColor: "border-blue-500",
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
