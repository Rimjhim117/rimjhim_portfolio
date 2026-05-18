import React from "react";
import { FaBookOpen, FaBriefcase } from "react-icons/fa";

export default function ResearchAndIndustry() {
  return (
    <section id="research" className="min-h-[60vh] px-6 py-20 bg-indigo-50 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-indigo-800 mb-10 text-center">Research & Industry Experience</h2>
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Research Publication */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <FaBookOpen className="text-purple-600 text-2xl" />
            <h3 className="text-xl font-bold text-gray-800">Research Publication</h3>
          </div>
          <p className="text-lg font-semibold text-gray-900 leading-tight">
            AI-Powered Smart Cloud Kitchen with Personalized Recipe Recommendation System
          </p>
          <p className="text-sm text-gray-600 italic mt-3 border-l-4 border-purple-300 pl-3">
            Published at: 2025 IEEE 1st International Conference on Recent Trends in Computing and Smart Mobility (RCSM 2025)
          </p>
          <p className="text-sm text-gray-700 mt-4">
            Authored a research paper detailing the implementation of hybrid recommendation algorithms and NLP methodologies for personalized dietary solutions within a scalable cloud infrastructure.
          </p>
        </div>

        {/* Industry Program */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-blue-600 text-2xl" />
            <h3 className="text-xl font-bold text-gray-800">Industry Program</h3>
          </div>
          <p className="text-lg font-semibold text-gray-900 leading-tight">
            IBM PBEL Virtual Internship - Artificial Intelligence
          </p>
          <p className="text-sm font-medium text-blue-600 mt-2">
            2025
          </p>
          <p className="text-sm text-gray-700 mt-4">
            Gained hands-on experience in building AI solutions. Developed an AI-powered chatbot (Readora) leveraging NLP and IBM Watson Assistant to understand user intent and provide personalized recommendations.
          </p>
        </div>

      </div>
    </section>
  );
}
