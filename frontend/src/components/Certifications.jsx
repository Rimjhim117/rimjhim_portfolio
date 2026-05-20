import React from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaLaptopCode, FaBrain, FaFileExcel, FaMedal, FaCloud
} from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      title: "Machine Learning",
      issuer: "IIIT Allahabad",
      year: "2024",
      icon: <FaBrain className="text-purple-500 text-3xl" />,
    },
    {
      title: "Core Java",
      issuer: "United College of Engineering and Research",
      year: "2023",
      icon: <FaCode className="text-orange-500 text-3xl" />,
    },
    {
      title: "Web Development",
      issuer: "Internshala",
      year: "2024",
      icon: <FaLaptopCode className="text-cyan-500 text-3xl" />,
    },
    {
      title: "Microsoft Excel",
      issuer: "Coursera",
      year: "2024",
      icon: <FaFileExcel className="text-green-600 text-3xl" />,
    },
    {
      title: "Python Programming",
      issuer: "GUVI (in association with HCL Technologies)",
      year: "2025",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    },
    {
      title: "SpringBoot Assessment",
      issuer: "LearnTube.ai",
      year: "2025",
      icon: <FaCode className="text-green-600 text-3xl" />,
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: <FaLaptopCode className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Naukri NCAT Certificate",
      issuer: "Naukri Campus",
      year: "2025",
      icon: <FaMedal className="text-pink-600 text-3xl" />,
    },
    {
      title: "Tata Crucible Campus Quiz 2025",
      issuer: "Tata Group",
      year: "2025",
      icon: <FaMedal className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL – IIT Kharagpur",
      year: "Jul–Oct 2025",
      icon: <FaCloud className="text-sky-500 text-3xl" />,
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-[50vh] px-6 py-20 bg-gradient-to-b from-purple-50 to-white text-center"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-700 mb-16"
      >
        Certifications & Courses
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            key={cert.title}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100 text-left flex flex-col justify-center items-center text-center"
          >
            <div className="mb-4">
              {cert.icon}
            </div>
            <h3 className="text-md font-bold text-gray-800 leading-tight mb-1">{cert.title}</h3>
            <p className="text-xs text-gray-500 font-medium">{cert.issuer}</p>
            {cert.year && <p className="text-xs text-purple-400 font-semibold mt-1">{cert.year}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
