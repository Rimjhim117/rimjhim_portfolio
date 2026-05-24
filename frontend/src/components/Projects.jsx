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
      title: "Readora - AI Book Recommendation Chatbot",
      description: "Architected a premium full-stack book recommendation chatbot using React and Express. Integrated IBM Watson Web Chat with client-side event hooks to dynamically query REST API recommendation endpoints. Implemented a custom quote-safe CSV database parser and premium UI styled with responsive, pure CSS 3D physical book card animations.",
      tech: ["React.js", "Node.js", "Express.js", "IBM Watson", "CSS 3D", "REST APIs"],
      github: "https://github.com/Rimjhim117/readora_chatbot",
      demo: "https://readora-chatbot.onrender.com"
    },
    {
      title: "Offline Semantic Chat Reply Recommender",
      description: "Designed a context-aware chat reply recommendation engine. Engineered an offline hybrid matcher combining Sentence-Transformers (all-MiniLM-L6-v2) for semantic intent recognition and TF-IDF for keyword matching. Developed an interactive Streamlit simulator dashboard, a custom CSV/Excel dataset uploader, and Leave-One-Out cross-validation to assess semantic retrieval accuracy.",
      tech: ["Python", "Streamlit", "Sentence-Transformers", "Scikit-Learn", "NLP"],
      github: "https://github.com/Rimjhim117/Offline_chat_reply_recommendationsystem"
    },
    {
      title: "CityScape: Marketplace for Local Goods",
      description: "Developed a premium travel discovery and local e-commerce platform using React and Spring Boot. Integrated Gemini AI for personalized day-by-day itineraries alongside real-time currency conversion and weather tools. Features a glassmorphic user interface, shopping cart, and secure session-based authentication with persistent state.",
      tech: ["Spring Boot", "React", "TailwindCSS", "Gemini AI", "REST APIs"],
      github: "https://github.com/Rimjhim117/Market-Place-for-Local-Goods",
      demo: "https://cityscape-frontend.onrender.com"
    },
    {
      title: "Personal Blog Platform",
      description: "Created a full-stack blogging platform using MongoDB, Express, React, and Node.js. Styled with Tailwind CSS, it features secure JWT-based registration and login, CRUD operations for blog posts, Unsplash-powered cover images, likes, bookmarking, and local storage auto-save drafts.",
      tech: ["MERN", "TailwindCSS", "JWT", "REST APIs"],
      github: "https://github.com/Rimjhim117/blog_platform",
      demo: "https://blog-platform-42z2.onrender.com/"
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
