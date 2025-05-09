import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 } },
      }}
      className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-[#0F0F1B] border border-[#2A0E61] shadow-lg shadow-[#2A0E6130] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1B] via-transparent to-transparent opacity-80" />

        {/* Project links that appear on hover */}
        <div
          className="absolute top-4 right-4 flex gap-2 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#2A0E61] p-2 rounded-full hover:bg-purple-700 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="h-4 w-4 text-white" />
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[#2A0E61] p-2 rounded-full hover:bg-purple-700 transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          {title}
        </h3>
        <p className="mt-3 text-gray-300 text-sm flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-[rgba(112,66,248,0.2)] border border-[#7042f88b] text-[#b49bff] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View project button */}
        <motion.div
          initial={{ width: "40%" }}
          animate={{ width: isHovered ? "100%" : "40%" }}
          transition={{ duration: 0.3 }}
          className="mt-6 overflow-hidden"
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 py-2 px-4 rounded-lg text-white font-medium transition-all"
          >
            {isHovered ? "View Project" : "View"}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
