import { CheckCircle2 } from "lucide-react";

interface Props {
  learnings: string[];
}

export default function ProjectLearnings({ learnings }: Props) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">Key Learnings</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {learnings.map((learning) => (
          <div
            key={learning}
            className="flex items-center gap-3 rounded-xl border border-border p-4"
          >
            <CheckCircle2 className="size-5 text-emerald-500" />

            <span>{learning}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
