// "use client";
// import { SkillDataProvider } from "@/components/sub/skill-data-provider";
// import {
//   BACKEND_SKILL,
//   FRONTEND_SKILL,
//   FULLSTACK_SKILL,
//   OTHER_SKILL,
// } from "@/constants";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// const SKILL_CATEGORIES = [
//   { label: "Frontend", data: FRONTEND_SKILL },
//   { label: "Backend", data: BACKEND_SKILL },
//   { label: "Fullstack", data: FULLSTACK_SKILL },
//   { label: "Other", data: OTHER_SKILL },
// ];

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.08, delayChildren: 0.2 },
//   },
// };

// export const Skills = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="skills-section py-12">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-8">
//         {SKILL_CATEGORIES.map((cat, idx) => (
//           <button
//             key={cat.label}
//             className={`px-4 py-2 rounded-full font-semibold transition
//               ${
//                 activeTab === idx
//                   ? "bg-blue-600 text-white shadow-lg"
//                   : "bg-gray-200 text-gray-700"
//               }
//               hover:bg-blue-500 hover:text-white`}
//             onClick={() => setActiveTab(idx)}
//           >
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       {/* Skills Grid */}
//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         key={activeTab} // Ensures animation on tab switch
//       >
//         <AnimatePresence mode="wait">
//           {SKILL_CATEGORIES[activeTab].data.map((skill, i) => (
//             <SkillDataProvider
//               key={skill.skill_name}
//               src={skill.image}
//               name={skill.skill_name}
//               width={skill.width}
//               height={skill.height}
//               index={i}
//             />
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </section>
//   );
// };

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
  { label: "Frontend", data: FRONTEND_SKILL, icon: "🎨" },
  { label: "Backend", data: BACKEND_SKILL, icon: "⚙️" },
  { label: "Fullstack", data: FULLSTACK_SKILL, icon: "🚀" },
  { label: "Other", data: OTHER_SKILL, icon: "🛠️" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const tabVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills-section py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Discover the technologies and tools I work with to create amazing
            digital experiences
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 p-2"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.label}
              className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 backdrop-blur-sm border-2 min-w-[120px] md:min-w-[140px]
                ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-2xl shadow-blue-500/25 scale-105"
                    : "bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500"
                }
                hover:scale-105 hover:shadow-xl transform-gpu`}
              onClick={() => setActiveTab(idx)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.label}</span>
              </span>

              {/* Active indicator */}
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with Enhanced Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {SKILL_CATEGORIES[activeTab].data.map((skill, i) => (
                <SkillDataProvider
                  key={`${activeTab}-${skill.skill_name}`}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Background decoration */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-10 blur-xl"></div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 shadow-lg">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {SKILL_CATEGORIES[activeTab].data.length}
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              {SKILL_CATEGORIES[activeTab].label.toLowerCase()} skills mastered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
