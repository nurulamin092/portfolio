import { heroData } from "@/data/hero";

import FadeUp from "@/components/motion/FadeUp";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import HeroTechStack from "./HeroTechStack";

export default function HeroContent() {
  return (
    <div className="flex flex-col">
      <FadeUp>
        <HeroBadge />
      </FadeUp>

      <FadeUp>
        <p className="mt-8 text-violet-400">{heroData.greeting}</p>
      </FadeUp>

      <FadeUp>
        <h1 className="mt-4 text-5xl font-bold leading-tight lg:text-7xl">
          <span className="bg-linear-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {heroData.name}
          </span>
        </h1>
      </FadeUp>

      <FadeUp>
        <h2 className="mt-4 text-2xl text-slate-300">{heroData.role}</h2>
      </FadeUp>

      <FadeUp>
        <p className="mt-6 max-w-xl leading-8 text-slate-400">
          {heroData.description}
        </p>
      </FadeUp>

      <FadeUp>
        <HeroButtons />
      </FadeUp>

      <FadeUp>
        <HeroSocial />
      </FadeUp>

      <FadeUp>
        <HeroTechStack />
      </FadeUp>
    </div>
  );
}
