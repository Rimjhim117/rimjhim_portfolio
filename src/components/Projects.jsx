import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function Projects() {
  const projects = [
    {
      title: "Marketplace for Local Goods",
      description:
        "A platform to explore and purchase regional products before visiting a city. Aimed at empowering small businesses.",
      tech: ["HTML", "CSS", "JavaScript", "Spring Boot", "Java"],
      github: "https://github.com/Rimjhim117/Market-Place-for-Local-Goods",
    },
    {
      title: "Personalized Recipe Recommendation System",
      description:
        "A recommendation engine that suggests recipes based on available ingredients using hybrid collaborative and content-based filtering.",
      tech: ["Python", "Machine Learning", "Streamlit"],
      github: "https://github.com/Rimjhim117/Personalized-Recommendation-System-",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-purple-50 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-12">My Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 text-left"
          >
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center gap-2"
              >
                <FaGithub />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
