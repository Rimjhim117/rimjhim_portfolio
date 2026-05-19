import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "AI-Powered Smart Cloud Kitchen",
      description: "Built a production-deployed full-stack cloud kitchen platform with AI-driven food ordering and personalized recipe discovery. Engineered a hybrid recommendation engine combining TF-IDF, BERT embeddings, and collaborative filtering. IEEE-published and awarded 1st position at Technovanza 2026.",
      tech: ["MERN", "FastAPI", "ML", "BERT"],
      demo: "https://cloud-kitchen-frontend-eulf.onrender.com"
    },
    {
      title: "AI-Powered Hybrid Tutor Finder",
      description: "Built a full-stack AI-powered tutor-student matching platform at UHACK 4.0 (Team: DeepThink Labs) with role-based dashboards for students, teachers, and parents. Trained 3 neural network models using brain.js for tutor compatibility scoring, student performance prediction, and personalized recommendations. Features 250+ question quiz system with timed focus mode, tab-switch detection, and Google Gemini-powered AI chatbot with gamified learning.",
      tech: ["React", "Node.js", "MongoDB", "brain.js", "JWT"],
      github: "https://github.com/AniketMishra8/Tutor-Finder",
      demo: "https://deepthinktut.netlify.app"
    },
    {
      title: "CityScape: Marketplace for Local Goods",
      description: "Developed platform enabling users to explore cities and discover local goods. Implemented secure session-based login and responsive UI using Spring Boot backend with React frontend.",
      tech: ["Spring Boot", "React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/Rimjhim117/CityScape"
    },
    {
      title: "Personal Blog Platform",
      description: "Developed full-stack blogging platform with JWT-based authentication and CRUD operations. Optimized MongoDB queries and implemented responsive UI for improved cross-device usability.",
      tech: ["MERN"],
      github: "https://github.com/Rimjhim117/blog_platform"
    },
    {
      title: "Readora - AI Book Recommendation Chatbot",
      description: "Built conversational AI chatbot using NLP and ML for personalized book recommendations with multi-turn dialogue support. Integrated IBM Watson Assistant APIs for intent recognition and context-aware conversational flows. Developed as capstone project for IBM PBEL Virtual Internship.",
      tech: ["Python", "NLP", "IBM Watson"],
      github: "https://github.com/Rimjhim117/readora_chatbot"
    },
    {
      title: "Bank Management System",
      description: "Developed desktop application simulating banking operations including login, deposit, withdrawal, transfer, and loan requests. Built GUI using Java Swing with admin controls.",
      tech: ["Java", "Swing", "File I/O"],
      github: "https://github.com/Rimjhim117/BankManagementSystemGUI"
    },
    {
      title: "Portfolio Website",
      description: "Built responsive personal portfolio with backend support, project showcase, and contact form. Deployed on Vercel with modern, animated design.",
      tech: ["React", "Node.js", "TailwindCSS", "Vercel"],
      github: "https://github.com/Rimjhim117/rimjhim_portfolio"
    }
  ];
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={project.title}
            className="bg-purple-50 hover:bg-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition border border-purple-200 text-left flex flex-col"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
