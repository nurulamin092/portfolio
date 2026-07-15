import { heroData } from "@/data/hero";

export default function HeroContent() {
  return (
    <div>
      <p className="text-violet-400">{heroData.greeting}</p>

      <h1 className="mt-4 text-6xl font-bold">{heroData.name}</h1>

      <h2 className="mt-4 text-2xl text-slate-400">{heroData.role}</h2>

      <p className="mt-6 max-w-xl leading-8 text-slate-400">
        {heroData.description}
      </p>
    </div>
  );
}
