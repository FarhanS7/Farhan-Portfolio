// "use client";
// import Link from "next/link";
// import { useState } from "react";

// import { NAV_LINKS, SOCIALS } from "@/constants";

// export const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
//       {/* Navbar Container */}
//       <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
//         {/* Logo + Name */}
//         <Link href="#about-me" className="flex items-center">
//           <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300 text-3xl">
//             <span>Farhan</span>
//           </div>
//         </Link>

//         {/* Web Navbar */}
//         <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
//           <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.title}
//                 href={link.link}
//                 className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
//               >
//                 {link.title}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Social Icons (Web) */}
//         <div className="hidden md:flex flex-row gap-5">
//           {SOCIALS.map(({ link, name, icon: Icon }) => (
//             <Link
//               href={link}
//               target="_blank"
//               rel="noreferrer noopener"
//               key={name}
//             >
//               <Icon className="h-6 w-6 text-white" />
//             </Link>
//           ))}
//         </div>

//         {/* Hamburger Menu */}
//         <button
//           className="md:hidden text-white focus:outline-none text-4xl"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
//           {/* Links */}
//           <div className="flex flex-col items-center gap-4">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.title}
//                 href={link.link}
//                 className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.title}
//               </Link>
//             ))}
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center gap-6 mt-6">
//             {SOCIALS.map(({ link, name, icon: Icon }) => (
//               <Link
//                 href={link}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 key={name}
//               >
//                 <Icon className="h-8 w-8 text-white" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
"use client";

import { motion } from "framer-motion";
import { ChevronUp, Clock, Code2, FolderGit2, Home, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../sub/GradientBackground";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Journey", href: "#journey", icon: Clock },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowScrollTop(currentScrollPos > 100);

      const sections = navItems.map((item) => item.href.slice(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 3 &&
            rect.bottom >= window.innerHeight / 3
          ) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const element: HTMLElement | null = document.querySelector(href);

    if (element) {
      const offsetTop: number = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth" as ScrollBehavior,
      });
    }
  };

  return (
    <>
      {/* Always visible nav bar */}
      <motion.div
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          {/* Background blur */}
          <div
            className={`
              absolute inset-0 rounded-2xl
              ${isDark ? "bg-gray-900/50" : "bg-white/50"}
              backdrop-blur-md border border-gray-200/10
              shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            `}
          />

          {/* Navigation */}
          <nav
            className="relative px-3 py-3 rounded-2xl"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex items-center justify-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                const isHovered = hoveredItem === item.name;

                return (
                  <li key={item.name} className="relative">
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`
                        relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl
                        text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? "text-white"
                            : isDark
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className="w-4 h-4" />
                      <span
                        className={`
                        absolute left-1/2 -translate-x-1/2 whitespace-nowrap
                        px-2 py-1 text-xs rounded-md transition-all duration-200
                        ${isDark ? "bg-gray-800" : "bg-white"}
                        ${isDark ? "text-gray-300" : "text-gray-600"}
                        opacity-0 -translate-y-10 pointer-events-none
                        ${isHovered ? "opacity-100 -translate-y-8" : ""}
                      `}
                      >
                        {item.name}
                      </span>
                    </motion.a>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/80 to-purple-600/80"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </motion.div>

      {/* Scroll-to-top button - only visible when scrolling */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 p-3 rounded-xl
            ${isDark ? "bg-gray-900/50" : "bg-white/50"}
            backdrop-blur-md border border-gray-200/10
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            text-gray-400 hover:text-gray-100
            transition-all duration-300
          `}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
}
