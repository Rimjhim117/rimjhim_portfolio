import React from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaLaptopCode, FaBrain, FaFileExcel, FaMedal, FaIdBadge, FaTrophy, FaUsers
} from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      title: "1st Position at Technovanza 2026",
      issuer: "CS/AIML Dept (AI-Powered Smart Cloud Kitchen)",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Solved 230+ GFG & 126 LeetCode Problems",
      issuer: "GeeksforGeeks (Institute Rank 58) & LeetCode",
      icon: <FaCode className="text-orange-600 text-3xl" />,
    },
    {
      title: "Project Lead - AI Cloud Kitchen",
      issuer: "Led a team of 2 across full-stack & ML integration",
      icon: <FaUsers className="text-blue-600 text-3xl" />,
    },
    {
      title: "Machine Learning",
      issuer: "IIIT Allahabad",
      icon: <FaBrain className="text-purple-500 text-3xl" />,
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      icon: <FaLaptopCode className="text-cyan-500 text-3xl" />,
    },
    {
      title: "Python Programming",
      issuer: "GUVI (IICL)",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    },
    {
      title: "Core Java",
      issuer: "United College of Engineering and Research",
      icon: <FaCode className="text-orange-500 text-3xl" />,
    },
    {
      title: "Microsoft Excel",
      issuer: "Coursera",
      icon: <FaFileExcel className="text-green-600 text-3xl" />,
    },
    {
      title: "Naukri NCAT Certificate",
      issuer: "Naukri Campus",
      icon: <FaMedal className="text-pink-600 text-3xl" />,
    },
    {
      title: "HackDiwas 2.0 Participation",
      issuer: "United Group of Institutions",
      icon: <FaIdBadge className="text-purple-500 text-3xl" />,
    },
    {
      title: "IEEE RCSM 2025 Paper Presentation",
      issuer: "1st Int. Conf. on Recent Trends in Computing & Smart Mobility",
      icon: <FaIdBadge className="text-blue-700 text-3xl" />,
    },
    {
      title: "SpringBoot Assessment",
      issuer: "LearnTube.ai",
      icon: <FaCode className="text-green-600 text-3xl" />,
    },
    {
      title: "UHACK 4.0 Participation",
      issuer: "United Group of Institutions",
      icon: <FaLaptopCode className="text-purple-600 text-3xl" />,
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-purple-50 to-white text-center"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-700 mb-16"
      >
        Certifications & Achievements
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            key={cert.title}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100 text-left flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="min-w-[40px] flex justify-center">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
