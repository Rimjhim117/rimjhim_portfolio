import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-purple-50 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-7 mb-4">
          I'm a <span className="font-semibold text-purple-600">Full-stack developer and AI/ML enthusiast</span> with hands-on experience building end-to-end intelligent web applications using MERN, FastAPI, and NLP-based recommendation systems.
        </p>
        <p className="text-gray-700 text-lg leading-7 mb-6">
          As an IEEE-published researcher, I have a track record of delivering impactful, production-ready products—combining strong backend fundamentals, frontend polish, and data-driven thinking to solve real-world problems.
        </p>

        <div className="space-y-6">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-200 inline-block pb-1">Education</h3>
            <div className="space-y-3 mt-2">
              <div className="flex items-start gap-3">
                <FaUniversity className="text-purple-600 text-xl mt-1 min-w-[20px]" />
                <div>
                  <p className="text-base text-gray-800 font-medium">B.Tech in Information Technology (2022–2026)</p>
                  <p className="text-sm text-gray-600">United College of Engineering and Research, Prayagraj • CGPA: 7.91</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaSchool className="text-purple-600 text-xl mt-1 min-w-[20px]" />
                <div>
                  <p className="text-base text-gray-800 font-medium">Schooling</p>
                  <p className="text-sm text-gray-600">St. Anthony's Convent Girls’ Inter College, Prayagraj</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Industry */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-200 inline-block pb-1">Research & Industry</h3>
            <div className="space-y-3 mt-2">
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                <p className="text-sm font-bold text-purple-800">Research Publication</p>
                <p className="text-sm text-gray-700 font-medium mt-1">AI-Powered Smart Cloud Kitchen with Personalized Recipe Recommendation System</p>
                <p className="text-xs text-gray-500 italic mt-1">2025 IEEE 1st International Conference on Recent Trends in Computing and Smart Mobility (RCSM 2025)</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm font-bold text-blue-800">Industry Program</p>
                <p className="text-sm text-gray-700 font-medium mt-1">IBM PBEL Virtual Internship - Artificial Intelligence (2025)</p>
                <p className="text-xs text-gray-600 mt-1">Developed AI-powered chatbot using NLP and IBM Watson Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/About_photo.jpg"
          alt="Rimjhim Srivastava"
          className="w-72 h-auto rounded-xl shadow-xl border-4 border-white object-cover object-top"
        />
      </div>
    </section>
  );
}
