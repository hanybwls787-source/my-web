"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const fullName = "Hani Boulos";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullName.slice(0, index + 1));
        setIndex(index + 1);

        if (index === fullName.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(fullName.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="container mx-auto px-6 text-center">

        {/* IMAGE */}
        <motion.img
          src="/sele.png"
          alt="Hani Boulos"
          className="
            mx-auto mb-8
            w-52 h-52 md:w-64 md:h-64
            object-cover
            rounded-2xl
            border-4 border-primary
            shadow-lg
          "
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* NAME + SOCIAL */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </h1>

          <div className="flex gap-5 text-3xl">
            <a
              href="https://www.linkedin.com/in/hani-bullus-77a913304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/hanybwls787-source"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition"
            >
              <FaGithub />
            </a>

            <a
              href="hanubullus456@gmail.com"
              className="text-slate-400 hover:text-primary transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          className="text-primary text-xl md:text-2xl font-semibold mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full-Stack Developer | ASP.NET Core & React
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          I build modern, scalable, and high-performance web applications
          with clean architecture, secure backend systems, and
          user-focused front-end experiences.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-wrap gap-5 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* View Work */}
          <a
            href="#projects"
            className="
              bg-primary text-white
              px-8 py-4 rounded-xl
              font-bold text-lg
              hover:scale-105 hover:shadow-lg
              transition
            "
          >
            View My Work
          </a>

          {/* Contact */}
          <a
            href="#about"
            className="
              bg-white text-black
              px-8 py-4 rounded-xl
              font-bold text-lg
              border-2 border-primary
              hover:bg-primary hover:text-white
              hover:scale-105 hover:shadow-lg
              transition
            "
          >
            Contact Me
          </a>

          {/* Download CV */}
          <a
            href="/hani_web.pdf"
            download
            className="
              bg-gradient-to-r from-purple-600 to-indigo-600
              text-white
              px-8 py-4 rounded-xl
              font-bold text-lg
              hover:scale-105 hover:shadow-xl
              transition
            "
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
