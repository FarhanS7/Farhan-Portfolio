// "use client";

// import { PROJECTS } from "@/constants";
// import { slideInFromTop } from "@/lib/motion";
// import { motion } from "framer-motion";
// import ProjectCard from "../sub/project-card";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative flex flex-col items-center justify-center py-24 w-full overflow-hidden"
//     >
//       {/* Heading with animated underline */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="w-full flex flex-col items-center"
//       >
//         <motion.div
//           variants={slideInFromTop}
//           className="inline-flex items-center py-2 px-4 mb-2 border border-[#7042f88b] opacity-90 rounded-full"
//         >
//           <h1 className="text-sm text-[#b49bff]">MY PORTFOLIO</h1>
//         </motion.div>

//         <motion.h1
//           variants={slideInFromTop}
//           className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
//         >
//           Featured Projects
//         </motion.h1>
//       </motion.div>

//       {/* Projects grid */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
//       >
//         {PROJECTS.map((project, index) => (
//           <ProjectCard
//             key={project.title}
//             src={project.image}
//             title={project.title}
//             description={project.description}
//             link={project.link}
//             github={project.github || "#"}
//             tags={project.tags || []}
//             index={index}
//           />
//         ))}
//       </motion.div>

//       {/* Background gradient effect */}
//       <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
//         <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
//       </div>
//     </section>
//   );
// };

"use client";

import { PROJECTS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../sub/project-card";

// Define project categories
const PROJECT_CATEGORIES = [
  { label: "All", value: "all", icon: "🚀" },
  { label: "Frontend", value: "frontend", icon: "🎨" },
  { label: "Backend", value: "backend", icon: "⚙️" },
  { label: "Fullstack", value: "fullstack", icon: "🌐" },
  { label: "Mobile", value: "mobile", icon: "📱" },
  { label: "Other", value: "other", icon: "🛠️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const filterVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category using tags
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;

    // Check if any tag matches the category
    return project.tags?.some((tag) => {
      const tagLower = tag.toLowerCase();

      // Direct category matches
      if (activeCategory === "frontend") {
        return (
          tagLower.includes("react") ||
          tagLower.includes("vue") ||
          tagLower.includes("angular") ||
          tagLower.includes("html") ||
          tagLower.includes("css") ||
          tagLower.includes("javascript") ||
          tagLower.includes("typescript") ||
          tagLower.includes("frontend")
        );
      }

      if (activeCategory === "backend") {
        return (
          tagLower.includes("node") ||
          tagLower.includes("express") ||
          tagLower.includes("python") ||
          tagLower.includes("django") ||
          tagLower.includes("flask") ||
          tagLower.includes("php") ||
          tagLower.includes("laravel") ||
          tagLower.includes("backend") ||
          tagLower.includes("api") ||
          tagLower.includes("server")
        );
      }

      if (activeCategory === "fullstack") {
        return (
          tagLower.includes("fullstack") ||
          tagLower.includes("full-stack") ||
          tagLower.includes("mern") ||
          tagLower.includes("mean") ||
          tagLower.includes("django") ||
          tagLower.includes("laravel")
        );
      }

      if (activeCategory === "mobile") {
        return (
          tagLower.includes("react native") ||
          tagLower.includes("flutter") ||
          tagLower.includes("mobile") ||
          tagLower.includes("android") ||
          tagLower.includes("ios") ||
          tagLower.includes("app")
        );
      }

      if (activeCategory === "other") {
        return (
          !tagLower.includes("react") &&
          !tagLower.includes("vue") &&
          !tagLower.includes("node") &&
          !tagLower.includes("python") &&
          !tagLower.includes("mobile") &&
          !tagLower.includes("frontend") &&
          !tagLower.includes("backend") &&
          !tagLower.includes("fullstack")
        );
      }

      return false;
    });
  });

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
        className="w-full flex flex-col items-center mb-12"
      >
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center py-2 px-4 mb-2 border border-[#7042f88b] opacity-90 rounded-full"
        >
          <h1 className="text-sm text-[#b49bff]">MY PORTFOLIO</h1>
        </motion.div>

        <motion.h1
          variants={slideInFromTop}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center"
        >
          Featured Projects
        </motion.h1>

        <motion.p
          variants={slideInFromTop}
          className="text-gray-400 text-center max-w-2xl px-4"
        >
          Explore my diverse range of projects across different technologies and
          domains
        </motion.p>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        variants={filterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4"
      >
        {PROJECT_CATEGORIES.map((category) => (
          <motion.button
            key={category.value}
            className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 backdrop-blur-sm border-2 min-w-[100px] md:min-w-[120px]
              ${
                activeCategory === category.value
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-2xl shadow-purple-500/25 scale-105"
                  : "bg-[#0F0F1B]/70 text-gray-300 border-[#2A0E61] hover:border-purple-400/50 hover:bg-[#2A0E61]/30"
              }
              hover:scale-105 hover:shadow-xl transform-gpu`}
            onClick={() => setActiveCategory(category.value)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </span>

            {/* Active indicator */}
            {activeCategory === category.value && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F0F1B]/80 backdrop-blur-sm rounded-full border border-[#2A0E61]">
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {filteredProjects.length}
          </span>
          <span className="text-gray-400 text-sm">
            {activeCategory === "all"
              ? "total projects"
              : `${activeCategory} projects`}
          </span>
        </div>
      </motion.div>

      {/* Projects grid with AnimatePresence for smooth transitions */}
      <div className="w-full max-w-7xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`${activeCategory}-${project.title}`}
                  src={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  github={project.github || "#"}
                  tags={project.tags || []}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500">
                  No projects available in the {activeCategory} category yet.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-600/20 to-transparent w-96 h-96 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
