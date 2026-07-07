import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    // Replace the value below with your actual Web3Forms Access Key
    // You can get a free key instantly at https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-[60vh] px-6 py-24 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-10 text-center">
        <span className="font-mono text-indigo-600 text-xl mr-3 font-semibold">07.</span>
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto space-y-6 text-gray-700">
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          I'm currently looking for new opportunities! Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Form using Web3Forms action */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 focus:outline-none transition text-sm text-slate-800 font-medium"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 focus:outline-none transition text-sm text-slate-800 font-medium"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            required
            rows={4}
            className="px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 focus:outline-none transition text-sm text-slate-800 font-medium resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-8 py-3.5 rounded-full transition duration-300 font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-200 ${
              status === "sending"
                ? "bg-indigo-400 text-slate-100 cursor-not-allowed"
                : status === "success"
                ? "bg-emerald-600 text-white shadow-emerald-100"
                : status === "error"
                ? "bg-rose-600 text-white shadow-rose-100"
                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100 hover:shadow"
            }`}
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending..."}
            {status === "success" && "Message Sent!"}
            {status === "error" && "Failed to Send"}
          </button>
        </form>

        {/* Email */}
        <div className="flex items-center justify-center gap-3 text-sm font-medium mt-6 text-slate-600">
          <FaEnvelope className="text-indigo-600 text-base" />
          <a href="mailto:rimjhimsrivastava971@gmail.com" className="hover:underline hover:text-indigo-600 transition">
            rimjhimsrivastava971@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3 text-sm font-medium text-slate-600">
          <FaPhoneAlt className="text-indigo-600 text-base" />
          <span>+91 8736826766</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="https://github.com/Rimjhim117"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rimjhim-srivastava-52769032b"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-800 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Download */}
        <div className="mt-8">
          <a
            href="/Rimjhim_Cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-full hover:bg-indigo-700 transition duration-300 font-bold text-xs uppercase tracking-wider shadow-sm shadow-indigo-100 hover:shadow"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
