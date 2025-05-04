"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 z-20"
      >
        {/* Profile Image with purple border glow */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#7042f88b] shadow-lg shadow-[#7042f861]">
            <Image
              src="/api/placeholder/400/400"
              alt="Farhan"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full md:w-2/3 text-white"
        >
          <motion.div
            variants={slideInFromTop}
            className="inline-flex items-center py-[8px] px-[7px] mb-4 border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="text-[13px] text-[#b49bff]">ABOUT ME</h1>
          </motion.div>

          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Passionate Full Stack Developer
          </h2>

          <p className="text-gray-400 mb-6 text-lg">
            Hello! I am a dedicated Full Stack Software Engineer with expertise
            in building responsive web applications, mobile solutions, and
            software systems. I specialize in creating seamless user experiences
            backed by robust architecture.
          </p>

          <p className="text-gray-400 mb-8 text-lg">
            With a strong foundation in both frontend and backend technologies,
            I transform innovative ideas into functional, scalable applications.
            I am constantly exploring new technologies to enhance my skill set
            and deliver cutting-edge solutions.
          </p>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Framer Motion",
                "Three.js",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[rgba(112,66,248,0.2)] border border-[#7042f88b] text-[#b49bff] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <motion.div variants={slideInFromLeft(1)} className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#b49bff] transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#b49bff] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-white hover:text-[#b49bff] transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#b49bff] transition-colors"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.a
            variants={slideInFromLeft(1.2)}
            href="#contact"
            className="mt-8 inline-block py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Background effect for depth - similar to your other components */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default AboutSection;
