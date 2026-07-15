import { heroData } from "@/data/hero";

export default function HeroTechStack() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {heroData.techStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition hover:border-violet-500 hover:text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
