import { CheckCircle2 } from "lucide-react";

import { aboutData } from "@/data/about";

export default function AboutHighlights() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {aboutData.highlights.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <CheckCircle2 className="size-5 text-violet-400" />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
