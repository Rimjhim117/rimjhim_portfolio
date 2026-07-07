import React from "react";
import { FaBookOpen, FaBriefcase, FaExternalLinkAlt, FaBuilding, FaChartLine, FaBrain } from "react-icons/fa";

export default function ExperienceAndResearch() {
  const experiences = [
    {
      type: "Research",
      title: "AI-Powered Smart Cloud Kitchen with Personalized Recipe Recommendation System",
      issuer: "2025 IEEE 1st International Conference (RCSM 2025), MANIT Bhopal",
      icon: <FaBookOpen className="text-indigo-600 text-2xl" />,
      desc: "Published in IEEE Xplore Digital Library. Proposed and developed an AI-powered cloud kitchen system integrating personalized recipe recommendations using NLP and machine learning.",
      link: "https://ieeexplore.ieee.org/document/11506842",
    },
    {
      type: "Internship",
      title: "IBM PBEL Virtual Internship — Artificial Intelligence",
      issuer: "IBM (2025)",
      icon: <FaBriefcase className="text-indigo-600 text-2xl" />,
      desc: "Selected for stipend-based virtual internship focused on applied Artificial Intelligence. Developed AI-powered chatbot (Readora) leveraging IBM Watson Assistant for personalized recommendations.",
    },
    {
      type: "Internship",
      title: "Full-Stack Development Virtual Internship",
      issuer: "Skillbit Technologies (Jul 2025 – Aug 2025)",
      icon: <FaBriefcase className="text-indigo-600 text-2xl" />,
      desc: "Completed hands-on training building full-stack applications using React, Node.js, and Express. Learned RESTful API development and database integration with MongoDB through guided projects. Gained exposure to agile development workflows and industry best practices.",
    },
    {
      type: "Virtual Program",
      title: "Tata Group GenAI Data Analytics Job Simulation",
      issuer: "Tata Group (2025)",
      icon: <FaBrain className="text-indigo-600 text-2xl" />,
      desc: "Participated in program exploring Generative AI foundations, prompt engineering, and enterprise AI applications.",
    },
    {
      type: "Virtual Experience",
      title: "Deloitte Data Analytics & Technology Job Simulation",
      issuer: "Deloitte (Forage, 2025)",
      icon: <FaChartLine className="text-indigo-600 text-2xl" />,
      desc: "Completed virtual program focusing on data analytics methodologies and technology consulting practices.",
    },
    {
      type: "Industry Visit",
      title: "Tata Consultancy Services (TCS) Industry Visit",
      issuer: "TCS Varanasi (Sep 2024)",
      icon: <FaBuilding className="text-indigo-600 text-2xl" />,
      desc: "Visited TCS, selected among a handful of students from the batch. Gained insights into corporate workflows, enterprise software development, and agile practices.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-24 bg-[#fafafa] flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center">
        <span className="font-mono text-indigo-600 text-xl mr-3 font-semibold">02.</span>
        Experience & Research
      </h2>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.title}
            className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg shadow-sm transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              {exp.icon}
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">{exp.type}</h3>
            </div>
            <h4 className="text-base font-bold text-slate-800 leading-tight mb-2">
              {exp.title}
            </h4>
            <p className="text-sm font-semibold text-indigo-600 mb-4">
              {exp.issuer}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">
              {exp.desc}
            </p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 text-indigo-600 font-bold hover:text-indigo-800 transition text-xs uppercase tracking-wider"
              >
                View Publication <FaExternalLinkAlt size={10} />
              </a>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
