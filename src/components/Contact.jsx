import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] px-6 py-20 bg-purple-50 text-center"
    >
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Contact Me</h2>

      <div className="max-w-xl mx-auto space-y-6 text-gray-700">
        {/* Email */}
        <div className="flex items-center justify-center gap-3 text-lg">
          <FaEnvelope className="text-purple-600" />
          <a href="mailto:umashankersrivastava9@gmail.com" className="hover:underline">
            umashankersrivastava9@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3 text-lg">
          <FaPhoneAlt className="text-purple-600" />
          <span>+91 8736826766</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="https://github.com/Rimjhim117"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rimjhim-srivastava-52769032b"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Download */}
        <div className="mt-8">
          <a
            href="/Rimjhim_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
