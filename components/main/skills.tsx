"use client";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
} from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SKILL_CATEGORIES = [
  { label: "Frontend", data: FRONTEND_SKILL },
  { label: "Backend", data: BACKEND_SKILL },
  { label: "Fullstack", data: FULLSTACK_SKILL },
  { label: "Other", data: OTHER_SKILL },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills-section py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.label}
            className={`px-4 py-2 rounded-full font-semibold transition
              ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700"
              }
              hover:bg-blue-500 hover:text-white`}
            onClick={() => setActiveTab(idx)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeTab} // Ensures animation on tab switch
      >
        <AnimatePresence mode="wait">
          {SKILL_CATEGORIES[activeTab].data.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
