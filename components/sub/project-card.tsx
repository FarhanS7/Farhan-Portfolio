// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// type ProjectCardProps = {
//   src: string;
//   title: string;
//   description: string;
//   link: string;
//   github: string;
//   tags: string[];
//   index: number;
// };

// export const ProjectCard = ({
//   src,
//   title,
//   description,
//   link,
//   github,
//   tags,
//   index,
// }: ProjectCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 } },
//       }}
//       className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-[#0F0F1B] border border-[#2A0E61] shadow-lg shadow-[#2A0E6130] transition-all duration-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image container with overlay */}
//       <div className="relative h-52 w-full overflow-hidden">
//         <Image
//           src={src}
//           alt={title}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-500 group-hover:scale-110"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1B] via-transparent to-transparent opacity-80" />

//         {/* Project links that appear on hover */}
//         <div
//           className="absolute top-4 right-4 flex gap-2 transition-opacity duration-300"
//           style={{ opacity: isHovered ? 1 : 0 }}
//         >
//           <a
//             href={github}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="bg-[#2A0E61] p-2 rounded-full hover:bg-purple-700 transition-colors"
//             aria-label="GitHub Repository"
//           >
//             <Github className="h-4 w-4 text-white" />
//           </a>
//           <a
//             href={link}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="bg-[#2A0E61] p-2 rounded-full hover:bg-purple-700 transition-colors"
//             aria-label="Live Demo"
//           >
//             <ExternalLink className="h-4 w-4 text-white" />
//           </a>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-6 flex flex-col">
//         <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
//           {title}
//         </h3>
//         <p className="mt-3 text-gray-300 text-sm flex-1">{description}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-2 py-1 text-xs bg-[rgba(112,66,248,0.2)] border border-[#7042f88b] text-[#b49bff] rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* View project button */}
//         <motion.div
//           initial={{ width: "40%" }}
//           animate={{ width: isHovered ? "100%" : "40%" }}
//           transition={{ duration: 0.3 }}
//           className="mt-6 overflow-hidden"
//         >
//           <a
//             href={link}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 py-2 px-4 rounded-lg text-white font-medium transition-all"
//           >
//             {isHovered ? "View Project" : "View"}
//           </a>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
  index: number;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  tags,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-[#0F0F1B]/80 backdrop-blur-sm border border-[#2A0E61] shadow-lg shadow-[#2A0E6130] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

      {/* Image container with overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            onError={() => setImageError(true)}
            priority={index < 3}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center">
            <div className="text-4xl">🖼️</div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1B] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating action buttons */}
        <motion.div
          className="absolute top-4 right-4 flex gap-2"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : -10,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#0F0F1B]/90 backdrop-blur-sm p-2.5 rounded-full border border-[#2A0E61] hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 group/btn"
            aria-label="GitHub Repository"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4 text-gray-300 group-hover/btn:text-white transition-colors" />
          </motion.a>
          <motion.a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#0F0F1B]/90 backdrop-blur-sm p-2.5 rounded-full border border-[#2A0E61] hover:bg-cyan-600/20 hover:border-cyan-400 transition-all duration-300 group/btn"
            aria-label="Live Demo"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-4 w-4 text-gray-300 group-hover/btn:text-white transition-colors" />
          </motion.a>
        </motion.div>

        {/* Featured badge (optional - you can add a 'featured' property to projects) */}
        {index === 0 && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full text-xs font-semibold text-white">
              <Star className="h-3 w-3" />
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col relative">
        <motion.h3
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        <p className="text-gray-300 text-sm flex-1 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-xs bg-[rgba(112,66,248,0.15)] border border-[#7042f88b] text-[#b49bff] rounded-full hover:bg-[rgba(112,66,248,0.25)] hover:border-purple-400/60 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: tagIndex * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Animated CTA Button */}
        <motion.div
          className="mt-auto overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group/cta"
            initial={{ width: "100%" }}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />

            <span className="relative z-10 flex items-center gap-2">
              <span>View Project</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="h-4 w-4" />
              </motion.div>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
