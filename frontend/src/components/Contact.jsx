import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-[60vh] px-6 py-20 bg-purple-50 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">Contact Me</h2>

      <div className="max-w-xl mx-auto space-y-6 text-gray-700">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:outline-none transition resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Message */}
        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}

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
