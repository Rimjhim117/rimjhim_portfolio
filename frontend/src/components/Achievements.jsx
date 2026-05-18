import React from "react";
import { FaBuilding, FaChartLine, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Tata Group GenAI Virtual Program",
      issuer: "Tata Group",
      icon: <FaBrain className="text-indigo-600 text-3xl" />,
      desc: "Completed an immersive program focused on Generative AI concepts, prompt engineering, and real-world enterprise applications.",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      title: "Data Analytics Virtual Experience",
      issuer: "Deloitte Australia (Forage)",
      icon: <FaChartLine className="text-pink-600 text-3xl" />,
      desc: "Worked on practical tasks related to data quality assessment, data insights, and data presentation using modern analytics tools.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      title: "Tata Consultancy Services (TCS) Industry Visit",
      issuer: "TCS Awadh Park",
      icon: <FaBuilding className="text-teal-600 text-3xl" />,
      desc: "Participated in an industry visit to TCS, gaining insights into corporate workflows, enterprise software development, and agile practices.",
      color: "bg-teal-50 border-teal-200",
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
        Virtual Experiences & Industry Visits
      </motion.h2>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-2xl shadow-sm border ${ach.color} hover:shadow-lg transition-all duration-300 flex flex-col`}
          >
            <div className="flex items-center gap-4 mb-4">
              {ach.icon}
              <h3 className="text-xl font-bold text-gray-800 leading-tight">{ach.title}</h3>
            </div>
            <p className="text-sm font-bold text-gray-600 mb-3">{ach.issuer}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{ach.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
