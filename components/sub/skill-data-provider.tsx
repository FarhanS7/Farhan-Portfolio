// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";

// type SkillDataProviderProps = {
//   src: string;
//   name: string;
//   width: number;
//   height: number;
//   index: number;
// };

// export const SkillDataProvider = ({
//   src,
//   name,
//   width,
//   height,
//   index,
// }: SkillDataProviderProps) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//   });

//   const imageVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const animationDelay = 0.1;

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       variants={imageVariants}
//       animate={inView ? "visible" : "hidden"}
//       custom={index}
//       transition={{ delay: index * animationDelay }}
//     >
//       <Image src={`/skills/${src}`} width={width} height={height} alt={name} />
//     </motion.div>
//   );
// };

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: isHovered ? 0.4 : 0,
      scale: isHovered ? 1.2 : 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative group perspective-1000"
      initial="hidden"
      variants={cardVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-2xl blur-xl -z-10"
        variants={glowVariants}
        animate="visible"
      />

      {/* Main card */}
      <motion.div
        className="relative bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 transform-gpu"
        variants={hoverVariants}
      >
        {/* Skill icon/image container */}
        <div className="relative flex items-center justify-center mb-3 h-16 md:h-20 z-10">
          {!imageError ? (
            <motion.div
              className="relative z-10"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={`/skills/${src}`}
                width={Math.min(width, 60)}
                height={Math.min(height, 60)}
                alt={name}
                className="object-contain filter drop-shadow-lg relative z-10"
                onError={() => setImageError(true)}
                style={{
                  maxWidth: "60px",
                  maxHeight: "60px",
                  width: "auto",
                  height: "auto",
                }}
              />
            </motion.div>
          ) : (
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl md:text-2xl font-bold z-10">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Skill name */}
        <motion.h3
          className="text-sm md:text-base font-semibold text-center text-slate-800 dark:text-slate-200 leading-tight relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {name}
        </motion.h3>

        {/* Animated border - positioned behind content */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #14b8a6)",
            padding: "2px",
            borderRadius: "1rem",
          }}
          whileHover={{ opacity: 1 }}
        >
          <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl" />
        </motion.div>

        {/* Progress indicator (optional visual enhancement) */}
        <motion.div
          className="absolute bottom-2 left-2 right-2 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={{ width: "0%" }}
            whileHover={{ width: "85%" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
