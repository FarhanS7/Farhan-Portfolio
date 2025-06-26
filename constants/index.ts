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
    title: "Automind AI – AI-Powered Car Marketplace",
    description:
      "A full-stack car marketplace that uses AI to search for cars based on images, providing a seamless user experience with real-time data operations.",
    image: "/projects/project-1.png",
    link: "https://automind-ai.vercel.app/",
    github: "https://github.com/FarhanS7/auto-mind", // ✅ required
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Clerk",
      "Arcjet",
    ], // ✅ required
    features: [
      "AI-powered car search via image upload with 90%+ accuracy",
      "Test drive booking and scheduling interface",
      "Admin panel for car listing management (manual and image-based input)",
      "User authentication using Clerk",
      "Real-time database interactions with Supabase and Prisma",
      "Performance optimization using Arcjet edge protection and caching",
      "Responsive UI with modern UX design",
    ],
    category: "fullstack",
  },
  {
    title: "Kinetic Ai – Career Development Platform",
    description:
      "A comprehensive AI-driven platform for career development, offering resume generation, mock interviews, and personalized career insights.",
    image: "/projects/project-2.png",
    link: "https://kineticai.vercel.app/",
    github: "https://github.com/FarhanS7/KINETICAI",
    tags: [
      "Next.js",
      "Styled Components",
      "Clerk",
      "NeonDB",
      "Prisma",
      "Inngest",
    ],
    features: [
      "AI-driven resume and cover letter generation based on user profile",
      "Mock interview system powered by conversational AI flows",
      "Industry insights and personalized career suggestions",
      "Secure user login and profile management with Clerk",
      "Scalable backend architecture using NeonDB and Prisma",
      "Responsive and accessible interface with contextual coaching modules",
      "Conversational UI design for enhanced user engagement",
    ],
    category: "fullstack",
  },
  {
    title: "Space Themed Portfolio",
    description: "A themed site exploring animation and layout techniques.",
    image: "/projects/project-3.png",
    link: "https://farhan-shahriar.vercel.app/",
    github: "https://github.com/yourname/space",
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Parallax scrolling effects",
      "Responsive design for all devices",
      "Interactive space-themed animations",
    ],
    category: "fullstack",
  },
  {
    title: "CZS SUPER CUP - Football Tournament Management",
    description:
      "A full-stack tournament registration platform for managing football tournaments, including player and team registrations, admin dashboard, and performance optimizations.",
    image: "/projects/project-4.png",
    link: "https://www.czssupercup.com/",
    // github: "https://github.com/yourname/space",
    tags: [
      "Nextjs",
      "MongoDB",
      "Cloudeinary",
      "Nodejs",
      "Expressjs",
      "Frontend",
    ],
    features: [
      "Designed and implemented a full-stack tournament registration platform using React.js and Next.js",
      "Enabled 500+ player registrations and 100+ team submissions with validation for up to 18 players per team",
      "Built admin dashboard for real-time user and team approval using Redux/Context API",
      "Optimized image handling with WebP format, improving page load time by 35%",
      "Boosted performance scores via Lighthouse by streamlining frontend delivery",
      "Ensured responsive, accessible UI compliant with WCAG standards",
    ],
    category: "fullstack",
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
