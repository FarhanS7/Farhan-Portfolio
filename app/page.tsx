// import AboutSection from "@/components/main/about";
// import { Encryption } from "@/components/main/encryption";
// import { Hero } from "@/components/main/hero";
// import { Projects } from "@/components/main/projects";
// import SkillsSection from "@/components/main/skills";

// export default function Home() {
//   return (
//     <main className="h-full w-full">
//       <div className="flex flex-col gap-20">
//         <Hero />
//         <AboutSection />
//         <SkillsSection />
//         {/* <JourneySection /> */}
//         <Encryption />
//         <Projects />
//       </div>
//     </main>
//   );
// }

import dynamic from "next/dynamic";

// Lazy load components with fallback loading UI
const Hero = dynamic(() => import("@/components/main/hero"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
});
const AboutSection = dynamic(() => import("@/components/main/about"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
});
const SkillsSection = dynamic(() => import("@/components/main/skills"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
});
const Encryption = dynamic(() => import("@/components/main/encryption"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
});
const Projects = dynamic(() => import("@/components/main/projects"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
});

// You can also add JourneySection lazily later if needed
const JourneySection = dynamic(() => import("@/components/main/journey"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
});

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutSection />
        <JourneySection />
        <SkillsSection />

        <Projects />
        <Encryption />
      </div>
    </main>
  );
}
