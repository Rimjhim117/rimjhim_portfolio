import React from "react";
import { FaTrophy, FaCode, FaUsers, FaIdBadge, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "1st Position at Technovanza 2026",
      issuer: "CS/AIML Dept (AI-Powered Smart Cloud Kitchen)",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      title: "IEEE Published Researcher",
      issuer: "IEEE Xplore Digital Library — RCSM 2025, MANIT Bhopal",
      icon: <FaIdBadge className="text-purple-600 text-3xl" />,
      color: "border-purple-200 bg-purple-50",
    },
    {
      title: "Solved 230+ GFG & 126 LeetCode Problems",
      issuer: "GeeksforGeeks (Institute Rank 58) & LeetCode (17 Hard)",
      icon: <FaCode className="text-orange-600 text-3xl" />,
      color: "border-orange-200 bg-orange-50",
    },
    {
      title: "Project Lead - AI Cloud Kitchen",
      issuer: "Led a team of 2 across full-stack & ML integration",
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      color: "border-blue-200 bg-blue-50",
    },
    {
      title: "UHACK 4.0 — Team DeepThink Labs",
      issuer: "UGI, in association with IEEE, Google Developer Groups & IIC",
      icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
      color: "border-indigo-200 bg-indigo-50",
    },
    {
      title: "Smart India Hackathon (SIH) 2025",
      issuer: "Government of India Initiative",
      icon: <FaLaptopCode className="text-green-600 text-3xl" />,
      color: "border-green-200 bg-green-50",
    },
    {
      title: "HackDiwas 2.0 Participation",
      issuer: "United Group of Institutions",
      icon: <FaIdBadge className="text-pink-600 text-3xl" />,
      color: "border-pink-200 bg-pink-50",
    },
    {
      title: "TCS Industry Visit",
      issuer: "Selected among a handful of students — TCS Varanasi, Sep 2024",
      icon: <FaUsers className="text-teal-600 text-3xl" />,
      color: "border-teal-200 bg-teal-50",
    },
  ];

  return (
    <section id="achievements" className="min-h-[50vh] px-6 py-20 bg-white flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
      >
        Achievements & Participations
      </motion.h2>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className={`p-6 rounded-2xl shadow-sm border ${ach.color} hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center text-center`}
          >
            <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
              {ach.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2">{ach.title}</h3>
            <p className="text-sm font-medium text-gray-600">{ach.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
