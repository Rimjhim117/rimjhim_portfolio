import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const projects = [
    {
      title: "AI-Powered Smart Cloud Kitchen",
      description: "Built a production-deployed full-stack cloud kitchen platform with AI-driven food ordering and personalized recipe discovery. Engineered a hybrid recommendation engine combining TF-IDF, BERT embeddings, and collaborative filtering. IEEE-published and awarded 1st position at Technovanza 2026.",
      tech: ["MERN", "FastAPI", "ML", "BERT"],
      demo: "https://cloud-kitchen-frontend-eulf.onrender.com",
      caseStudy: {
        situation: "Traditional cloud kitchens suffer from fragmented user flows, disjointed ordering, and lack of personalized food recommendations.",
        task: "Design and deploy a production-ready, full-stack cloud kitchen platform featuring a highly personalized, intelligent recipe discovery and recommendation engine.",
        action: "Engineered a hybrid recommendation engine combining TF-IDF content-filtering, deep semantic representations using BERT embeddings, and user collaborative filtering. Built a high-performance backend using FastAPI and structured the frontend with React.",
        result: "Achieved a 94% Hit Rate@10 in food recommendations. The project was awarded 1st Place at Technovanza 2026 (UGI Project Exhibition) and successfully published in the IEEE Xplore Digital Library."
      }
    },
    {
      title: "AI-Powered Hybrid Tutor Finder",
      description: "Built a full-stack AI-powered tutor-student matching platform at UHACK 4.0 (Team: DeepThink Labs) with role-based dashboards for students, teachers, and parents. Trained 3 neural network models using brain.js for tutor compatibility scoring, student performance prediction, and personalized recommendations. Features 250+ question quiz system with timed focus mode, tab-switch detection, and Google Gemini-powered AI chatbot with gamified learning.",
      tech: ["React", "Node.js", "MongoDB", "brain.js", "Gemini AI"],
      github: "https://github.com/AniketMishra8/Tutor-Finder",
      demo: "https://deepthinktut.netlify.app",
      caseStudy: {
        situation: "Standard tutor matching platforms rely on rigid, superficial criteria (e.g. location, subject) rather than predicting academic compatibility or personality alignment.",
        task: "Develop a smart matching platform at UHACK 4.0 that predicts student-tutor fit and proactively assesses student performance.",
        action: "Trained 3 neural network models in brain.js for matching, compatibility scoring, and performance prediction. Integrated Google Gemini to serve as an interactive tutor chatbot, designed a timed quiz system, and implemented tab-switch cheating prevention.",
        result: "Built a gamified matching engine that ranked as a top finalist at UHACK 4.0 (backed by IEEE and Google Developer Groups)."
      }
    },
    {
      title: "Readora - AI Book Recommendation Chatbot",
      description: "Architected a premium full-stack book recommendation chatbot using React and Express. Integrated IBM Watson Web Chat with client-side event hooks to dynamically query REST API recommendation endpoints. Implemented a custom quote-safe CSV database parser and a highly responsive, clean user interface.",
      tech: ["React.js", "Node.js", "Express.js", "IBM Watson", "CSS3", "REST APIs"],
      github: "https://github.com/Rimjhim117/readora_chatbot",
      demo: "https://readora-chatbot.onrender.com",
      caseStudy: {
        situation: "Most book search tools are static search bars, which fail to engage users in conversation to find books aligned with their current mood or interests.",
        task: "Construct an interactive book discovery assistant using enterprise conversational AI.",
        action: "Integrated IBM Watson Assistant with client-side event hooks to link user inputs with a REST API backend. Parsed raw CSV datasets into a lightweight, quote-safe recommendation database.",
        result: "Created an engaging chatbot interface with smooth layout transitions, serving as the capstone project for the IBM PBEL AI Virtual Internship."
      }
    },
    {
      title: "Offline Semantic Chat Reply Recommender",
      description: "Designed a context-aware chat reply recommendation engine. Engineered an offline hybrid matcher combining Sentence-Transformers (all-MiniLM-L6-v2) for semantic intent recognition and TF-IDF for keyword matching. Developed an interactive Streamlit simulator dashboard, a custom CSV/Excel dataset uploader, and Leave-One-Out cross-validation to assess semantic retrieval accuracy.",
      tech: ["Python", "Streamlit", "Sentence-Transformers", "Scikit-Learn", "NLP"],
      github: "https://github.com/Rimjhim117/Offline_chat_reply_recommendationsystem",
      caseStudy: {
        situation: "Customer support agents frequently type repetitive chat answers. Cloud-based recommendation models can be costly, slow, and introduce privacy concerns.",
        task: "Build a highly accurate, privacy-centric, and entirely offline semantic response helper.",
        action: "Engineered a local hybrid matching engine combining Sentence-Transformers (all-MiniLM-L6-v2) for intent alignment and TF-IDF for exact match boosting. Created a Streamlit frontend and evaluated accuracy using Leave-One-Out cross-validation.",
        result: "Achieved immediate response generation using a 3-message context memory window without making external cloud API calls, ensuring high accuracy and local data privacy."
      }
    },
    {
      title: "CityScape: Marketplace for Local Goods",
      description: "Developed a premium travel discovery and local e-commerce platform using React and Spring Boot. Integrated Gemini AI for personalized day-by-day itineraries alongside real-time currency conversion and weather tools. Features a glassmorphic user interface, shopping cart, and secure session-based authentication with persistent state.",
      tech: ["Spring Boot", "React", "TailwindCSS", "Gemini AI", "REST APIs"],
      github: "https://github.com/Rimjhim117/Market-Place-for-Local-Goods",
      demo: "https://cityscape-frontend.onrender.com",
      caseStudy: {
        situation: "Travelers struggle to discover authentic local goods and plan tailored itineraries on standard e-commerce or booking sites.",
        task: "Create a travel discovery and localized marketplace application.",
        action: "Developed a Spring Boot REST API backend and React frontend. Integrated Google Gemini AI to dynamically generate custom day-by-day travel itineraries. Added weather and currency converter APIs.",
        result: "Launched a fully responsive platform with persistent cart state and session authentication, blending local e-commerce with AI planning."
      }
    },
    {
      title: "Personal Blog Platform",
      description: "Created a full-stack blogging platform using MongoDB, Express, React, and Node.js. Styled with Tailwind CSS, it features secure JWT-based registration and login, CRUD operations for blog posts, Unsplash-powered cover images, likes, bookmarking, and local storage auto-save drafts.",
      tech: ["MERN", "TailwindCSS", "JWT", "REST APIs"],
      github: "https://github.com/Rimjhim117/blog_platform",
      demo: "https://blog-platform-42z2.onrender.com/",
      caseStudy: {
        situation: "Users need a seamless blogging platform with offline draft safety and direct content creation features.",
        task: "Implement a full-stack publishing platform with draft auto-saving and user interactions.",
        action: "Utilized the MERN stack with JWT authentication for secure sessions. Built CRUD operations for blog posts and likes, integrated the Unsplash API for custom covers, and used browser local storage for draft recovery.",
        result: "Deployed a responsive blogging space with persistent user authentication and local draft safety."
      }
    },
    {
      title: "Bank Management System",
      description: "Developed desktop application simulating banking operations including login, deposit, withdrawal, transfer, and loan requests. Built GUI using Java Swing with admin controls.",
      tech: ["Java", "Swing", "File I/O"],
      github: "https://github.com/Rimjhim117/BankManagementSystemGUI",
      caseStudy: {
        situation: "Simulating core banking operations (accounts, loans, transfers) in a desktop format without complex server dependencies.",
        task: "Develop a lightweight, local Java desktop banking application with clean UI/UX and transactional persistence.",
        action: "Designed the GUI using Java Swing. Implemented transactional file I/O for account balances, interest calculations, and bank ledger records. Included admin panel dashboard for loan approvals.",
        result: "Built a fully functional local simulator for deposits, withdrawals, and peer transfers with transactional logging."
      }
    },
    {
      title: "Portfolio Website",
      description: "Built responsive personal portfolio with backend support, project showcase, and contact form. Deployed on Vercel with modern, animated design.",
      tech: ["React", "Node.js", "TailwindCSS", "Vercel"],
      github: "https://github.com/Rimjhim117/rimjhim_portfolio",
      caseStudy: {
        situation: "Personal portfolios need to look professional, load instantly, and present complex developer skills clearly to recruiters.",
        task: "Design and build a polished portfolio displaying projects, experience, achievements, and downloadable credentials.",
        action: "Implemented a slate/indigo responsive layout in React and styled it with Tailwind CSS. Removed heavy scroll animations to eliminate viewport flickering, and structured content sections neatly.",
        result: "Deployed a highly responsive portfolio on Vercel with a successful build, clean layout, and direct resume/CV download capabilities."
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center">
        <span className="font-mono text-indigo-600 text-xl mr-3 font-semibold">05.</span>
        Projects & Case Studies
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-slate-50/50 hover:bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg shadow-sm transition-all duration-300 text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-500 mb-4 text-sm leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mt-4">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="text-xs bg-white text-slate-600 border border-slate-200/60 px-2.5 py-0.5 rounded-full font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              
              {project.caseStudy && (
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm shadow-indigo-100 hover:shadow"
                >
                  View Case Study <FaArrowRight size={10} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative z-10 shadow-2xl border border-slate-100 flex flex-col max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">PROJECT CASE STUDY</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{activeCaseStudy.title}</h3>
              </div>

              {/* STAR Layout */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-6 text-left">
                {/* Situation */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-l-2 border-indigo-500 pl-2 mb-2">Situation</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{activeCaseStudy.caseStudy.situation}</p>
                </div>

                {/* Task */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-l-2 border-indigo-500 pl-2 mb-2">Task</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{activeCaseStudy.caseStudy.task}</p>
                </div>

                {/* Action */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-l-2 border-indigo-500 pl-2 mb-2">Action</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{activeCaseStudy.caseStudy.action}</p>
                </div>

                {/* Result */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide border-l-2 border-indigo-500 pl-2 mb-2">Result</h4>
                  <p className="text-slate-900 font-medium text-sm leading-relaxed bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/50">{activeCaseStudy.caseStudy.result}</p>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100 mt-6 justify-between items-center">
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-0">
                  {activeCaseStudy.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {activeCaseStudy.github && (
                    <a
                      href={activeCaseStudy.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 text-sm font-semibold transition-colors"
                    >
                      <FaGithub size={16} /> Codebase
                    </a>
                  )}
                  {activeCaseStudy.demo && (
                    <a
                      href={activeCaseStudy.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
