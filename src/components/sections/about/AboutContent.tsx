import { aboutData } from "@/data/about";

import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";

export default function AboutContent() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
        {aboutData.title}
      </p>

      <h2 className="mt-4 text-4xl font-bold">{aboutData.subtitle}</h2>

      <p className="mt-6 leading-8 text-muted-foreground">
        {aboutData.description}
      </p>

      <AboutHighlights />

      <AboutStats />
    </div>
  );
}
