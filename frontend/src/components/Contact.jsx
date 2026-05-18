import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] px-6 py-20 bg-purple-50 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Contact Me</h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto space-y-6 text-gray-700"
      >
        <p className="text-lg">
          I'm currently looking for new opportunities! Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Form using mailto action */}
        <form 
          action="mailto:rimjhimsrivastava971@gmail.com" 
          method="POST" 
          encType="text/plain" 
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            required
            rows={4}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none transition resize-none"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Email */}
        <div className="flex items-center justify-center gap-3 text-lg mt-6">
          <FaEnvelope className="text-purple-600" />
          <a href="mailto:rimjhimsrivastava971@gmail.com" className="hover:underline">
            rimjhimsrivastava971@gmail.com
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
            href="/Rimjhim_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
