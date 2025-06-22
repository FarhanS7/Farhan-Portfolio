import { FaFacebook, FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";

// export const SKILL_DATA = [
//   {
//     skill_name: "HTML",
//     image: "html.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "CSS",
//     image: "css.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "JavaScript",
//     image: "js.webp",
//     width: 65,
//     height: 65,
//   },
//   {
//     skill_name: "Tailwind CSS",
//     image: "tailwind.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "React",
//     image: "react.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Redux",
//     image: "redux.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "React Query",
//     image: "reactquery.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "TypeScript",
//     image: "ts.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Next.js 14",
//     image: "next.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Framer Motion",
//     image: "framer.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Stripe",
//     image: "stripe.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Node.js",
//     image: "node.webp",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "MongoDB",
//     image: "mongodb.webp",
//     width: 40,
//     height: 40,
//   },
// ] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

// export const FRONTEND_SKILL = [
//   {
//     skill_name: "HTML",
//     image: "html.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "CSS",
//     image: "css.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "JavaScript",
//     image: "js.png",
//     width: 65,
//     height: 65,
//   },
//   {
//     skill_name: "Tailwind CSS",
//     image: "tailwind.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Material UI",
//     image: "mui.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "React",
//     image: "react.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Redux",
//     image: "redux.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "React Query",
//     image: "reactquery.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "TypeScript",
//     image: "ts.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Next.js 14",
//     image: "next.png",
//     width: 80,
//     height: 80,
//   },
// ] as const;

// export const BACKEND_SKILL = [
//   {
//     skill_name: "Node.js",
//     image: "node.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Express.js",
//     image: "express.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "MongoDB",
//     image: "mongodb.png",
//     width: 40,
//     height: 40,
//   },
//   {
//     skill_name: "Firebase",
//     image: "firebase.png",
//     width: 55,
//     height: 55,
//   },
//   {
//     skill_name: "PostgreSQL",
//     image: "postgresql.png",
//     width: 70,
//     height: 70,
//   },
//   {
//     skill_name: "MySQL",
//     image: "mysql.png",
//     width: 70,
//     height: 70,
//   },
//   {
//     skill_name: "Prisma",
//     image: "prisma.png",
//     width: 70,
//     height: 70,
//   },
//   {
//     skill_name: "Graphql",
//     image: "graphql.png",
//     width: 80,
//     height: 80,
//   },
// ] as const;

// export const FULLSTACK_SKILL = [
//   {
//     skill_name: "React Native",
//     image: "reactnative.png",
//     width: 70,
//     height: 70,
//   },
//   {
//     skill_name: "Tauri",
//     image: "tauri.png",
//     width: 70,
//     height: 70,
//   },
//   {
//     skill_name: "Docker",
//     image: "docker.png",
//     width: 70,
//     height: 70,
//   },

//   {
//     skill_name: "Figma",
//     image: "figma.png",
//     width: 50,
//     height: 50,
//   },
// ] as const;

// export const OTHER_SKILL = [
//   {
//     skill_name: "Go",
//     image: "go.png",
//     width: 60,
//     height: 60,
//   },
// ] as const;

// components/data/skillsData.ts

export type Skill = {
  name: string;
  level: string;
  category: "frontend" | "backend" | "database" | "devops";
  icon: string;
  description?: string;
  yearStarted?: number;
  color?: string;
};

export const skills: Skill[] = [
  {
    name: "Java",
    level: "Expert",
    category: "backend",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
    description: "Enterprise application development, Spring ecosystem",
    yearStarted: 2024,
    color: "#f89820",
  },
  // {
  //   name: "Spring Boot",
  //   level: "Intermediate",
  //   category: "backend",
  //   icon: "/skills_logo/spring-boot-logo.svg",
  //   description: "Enterprise application development, Spring ecosystem",
  //   yearStarted: 2024,
  //   color: "#6db33f",
  // },
  {
    name: "Python",
    level: "Expert",
    category: "backend",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    description: "Web application development, machine learning",
    yearStarted: 2020,
    color: "#3776ab",
  },
  {
    name: "FastAPI",
    level: "Expert",
    category: "backend",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg",
    description: "Backend web application, clean code",
    yearStarted: 2022,
    color: "#009688",
  },
  {
    name: "MongoDB",
    level: "Expert",
    category: "database",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    description: "NoSQL database design and optimization",
    yearStarted: 2021,
    color: "#47A248",
  },
  {
    name: "Postgres",
    level: "Expert",
    category: "database",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    description: "Relational database management and optimization",
    yearStarted: 2023,
    color: "#336791",
  },
  {
    name: "MySQL",
    level: "Expert",
    category: "database",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    description: "Database design and performance tuning",
    yearStarted: 2023,
    color: "#4479A1",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    category: "frontend",
    icon: "/skills/next.webp",
    description: "Modern frontend development with React",
    yearStarted: 2023,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    description: "Utility-first CSS framework",
    yearStarted: 2023,
    color: "#38B2AC",
  },
  {
    name: "Git",
    level: "Expert",
    category: "devops",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    description: "Version control and collaboration",
    yearStarted: 2019,
    color: "#F05032",
  },
  {
    name: "Docker",
    level: "Expert",
    category: "devops",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    description: "Containerization and orchestration",
    yearStarted: 2019,
    color: "#2496ED",
  },
  // {
  //   name: "Azure",
  //   level: "Expert",
  //   category: "devops",
  //   icon: "/skills_logo/azure-icon.svg",
  //   description: "Cloud services and infrastructure",
  //   yearStarted: 2023,
  //   color: "#0089D6",
  // },
];

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" – a dynamic showcase of my skills, experiences, and passion for web development.',
    image: "/projects/project-1.png",
    link: "https://example.com",
    github: "https://github.com/yourname/portfolio", // ✅ required
    tags: ["Next.js", "TypeScript", "Tailwind CSS"], // ✅ required
    features: [
      "Dynamic routing with Next.js",
      "Responsive design with Tailwind CSS",
      "Interactive animations using Framer Motion",
    ],
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      "A sleek UI project using modern card interaction design patterns.",
    image: "/projects/project-2.png",
    link: "https://example.com/cards",
    github: "https://github.com/yourname/cards",
    tags: ["React", "Framer Motion", "Styled Components"],
    features: [
      "Smooth animations with Framer Motion",
      "Responsive design for all devices",
      "Interactive card flipping effect",
    ],
  },
  {
    title: "Space Themed Website",
    description: "A themed site exploring animation and layout techniques.",
    image: "/projects/project-3.png",
    link: "https://example.com/space",
    github: "https://github.com/yourname/space",
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Parallax scrolling effects",
      "Responsive design for all devices",
      "Interactive space-themed animations",
    ],
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  // sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
