import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from backend
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

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
