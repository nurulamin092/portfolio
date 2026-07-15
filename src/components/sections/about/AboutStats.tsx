import { aboutData } from "@/data/about";

export default function AboutStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      {aboutData.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-border bg-background/40 p-6"
        >
          <h3 className="text-3xl font-bold text-violet-400">{stat.value}</h3>

          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
