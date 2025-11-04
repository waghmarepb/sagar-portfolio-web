import { Collaboration } from "@/components/main/collaboration";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-16 lg:gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
