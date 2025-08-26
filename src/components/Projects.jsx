import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Marketplace for Local Goods (CityScape)",
    description:
      "A web app that allows tourists to explore and purchase local items before arriving at a city.",
    tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rimjhim117/CityScape",
  },
  {
    title: "Personalized Recipe Recommendation System",
    description:
      "A hybrid recommender system using collaborative and content-based filtering to suggest recipes based on ingredients.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/Rimjhim117/Personalized_Recommendation_System",
  },
  {
    title: "Readora – Smart Book Recommendation Chatbot",
    description:
      "An intelligent chatbot built with IBM Watson Assistant that recommends books and interacts with users to enhance reading experiences.",
    tech: ["IBM Watson Assistant", "NLP", "React"],
    github: "https://github.com/Rimjhim117/readora_chatbot",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using React and TailwindCSS with resume download and modern UI.",
    tech: ["React", "TailwindCSS", "GitHub Pages"],
    github: "https://github.com/Rimjhim117/rimjhim_portfolio",
  },
  {
    title: "Bank Management System",
    description:
      "A desktop application that simulates banking operations like login, deposit, withdrawal, transfer, loan request, and admin controls.",
    tech: ["Java", "Swing", "File I/O"],
    github: "https://github.com/Rimjhim117/BankManagementSystemGUI",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-white text-center"
    >
      <h2 className="text-4xl font-bold text-purple-700 mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-purple-50 hover:bg-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition border border-purple-200 text-left"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-purple-700">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 hover:text-purple-900"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
