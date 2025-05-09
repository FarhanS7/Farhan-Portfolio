"use client";

import { PROJECTS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";
import { motion } from "framer-motion";
import ProjectCard from "../sub/project-card";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-24 w-full overflow-hidden"
    >
      {/* Heading with animated underline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center"
      >
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center py-2 px-4 mb-2 border border-[#7042f88b] opacity-90 rounded-full"
        >
          <h1 className="text-sm text-[#b49bff]">MY PORTFOLIO</h1>
        </motion.div>

        <motion.h1
          variants={slideInFromTop}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
        >
          Featured Projects
        </motion.h1>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github || "#"}
            tags={project.tags || []}
            index={index}
          />
        ))}
      </motion.div>

      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
