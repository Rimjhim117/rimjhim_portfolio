import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-purple-50 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-7">
          I'm <span className="font-semibold text-purple-600">Rimjhim Srivastava</span>, an IT student at United College of Engineering and Research, Prayagraj.
          I specialize in backend development and have hands-on experience with Spring Boot, Python, and machine learning.
        </p>
        <p className="text-gray-700 text-lg mt-4 leading-7">
          I enjoy crafting real-world solutions using modern technology — from building APIs to deploying ML-powered applications. I'm a passionate learner, always ready to explore, innovate, and collaborate.
        </p>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/about_photo.jpg"
          alt="Rimjhim Srivastava"
          className="w-72 h-auto rounded-xl shadow-xl border-4 border-white object-cover object-top"
        />
      </div>
    </section>
  );
}
