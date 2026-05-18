import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "AI-Powered Smart Cloud Kitchen",
      description: "Built a full-stack AI-powered cloud kitchen platform integrating personalized recipe recommendations and food ordering. Designed hybrid recommendation engine using TF-IDF, BERT embeddings, and collaborative filtering.",
      tech: ["MERN", "FastAPI", "ML"],
      demo: "https://cloud-kitchen-frontend-culf.onrender.com"
    },
    {
      title: "CityScape: Marketplace for local Goods",
      description: "A full-stack web app that allows tourists to explore and purchase local items. Features include city descriptions, top destinations, local products, and session-based login.",
      tech: ["Spring Boot", "React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/Rimjhim117/CityScape"
    },
    {
      title: "Personal Blog Platform",
      description: "Developed full-stack blogging platform with JWT-based authentication and CRUD operations. Implemented responsive design and optimized database queries for improved performance.",
      tech: ["MERN"],
      github: "https://github.com/Rimjhim117/blog-platform"
    },
    {
      title: "Readora - AI Book Recommendation Chatbot",
      description: "Built AI-powered chatbot using NLP and machine learning for personalized book recommendations. Designed conversational flows and integrated Watson Assistant APIs for enhanced user experience.",
      tech: ["Python", "NLP", "IBM Watson"],
      github: "https://github.com/Rimjhim117/readora_chatbot"
    },
    {
      title: "Bank Management System",
      description: "A desktop application that simulates banking operations like login, deposit, withdrawal, transfer, loan request, and admin controls.",
      tech: ["Java", "Swing", "File I/O"],
      github: "https://github.com/Rimjhim117/BankManagementSystemGUI"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and TailwindCSS with resume download and modern UI.",
      tech: ["React", "TailwindCSS", "GitHub Pages"],
      github: "https://github.com/Rimjhim117/rimjhim_portfolio"
    }
  ];
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-white text-center">
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
              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 hover:text-purple-900"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 hover:text-purple-900"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
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
