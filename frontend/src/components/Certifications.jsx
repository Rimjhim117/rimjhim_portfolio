import React from "react";
import {
  FaCode, FaLaptopCode, FaBrain, FaFileExcel, FaMedal, FaCloud
} from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      title: "Machine Learning",
      issuer: "IIIT Allahabad",
      year: "2024",
      icon: <FaBrain className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Core Java",
      issuer: "United College of Engineering and Research",
      year: "2023",
      icon: <FaCode className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Web Development",
      issuer: "Internshala",
      year: "2024",
      icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Microsoft Excel",
      issuer: "Coursera",
      year: "2024",
      icon: <FaFileExcel className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Python Programming",
      issuer: "GUVI (in association with HCL Technologies)",
      year: "2025",
      icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
    },
    {
      title: "SpringBoot Assessment",
      issuer: "LearnTube.ai",
      year: "2025",
      icon: <FaCode className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Naukri NCAT Certificate",
      issuer: "Naukri Campus",
      year: "2025",
      icon: <FaMedal className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Tata Crucible Campus Quiz 2025",
      issuer: "Tata Group",
      year: "2025",
      icon: <FaMedal className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL – IIT Kharagpur",
      year: "Jul–Oct 2025",
      icon: <FaCloud className="text-indigo-600 text-3xl" />,
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-[50vh] px-6 py-24 bg-[#fafafa] text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center">
        <span className="font-mono text-indigo-600 text-xl mr-3 font-semibold">06.</span>
        Certifications & Courses
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.title}
            className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg shadow-sm transition-all duration-300 text-left flex flex-col justify-center items-center text-center"
          >
            <div className="mb-4 bg-slate-50 p-4 rounded-full border border-slate-100 shadow-sm">
              {cert.icon}
            </div>
            <h3 className="text-base font-bold text-slate-800 leading-tight mb-1">{cert.title}</h3>
            <p className="text-xs text-slate-500 font-semibold">{cert.issuer}</p>
            {cert.year && <p className="text-xs text-slate-400 font-bold mt-1.5">{cert.year}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
