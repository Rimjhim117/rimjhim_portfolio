import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaFileExcel,
  FaMedal
} from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      title: "Core Java",
      issuer: "United College of Engineering and Research",
      icon: <FaCode className="text-orange-500 text-3xl" />,
    },
    {
      title: "Web Development",
      issuer: "Internshala",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    },
    {
      title: "Machine Learning",
      issuer: "IIIT Allahabad",
      icon: <FaBrain className="text-purple-500 text-3xl" />,
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
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-purple-50 to-white text-center"
    >
      <h2 className="text-4xl font-bold text-purple-700 mb-12">Certifications</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-purple-100 text-left"
          >
            <div className="flex items-center gap-4 mb-3">
              {cert.icon}
              <div>
                <h3 className="text-xl font-semibold text-purple-700">{cert.title}</h3>
                <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
