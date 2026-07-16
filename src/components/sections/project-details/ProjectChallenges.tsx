import type { Challenge } from "@/types/project";

interface Props {
  challenges: Challenge[];
}

export default function ProjectChallenges({ challenges }: Props) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">Challenges & Solutions</h2>

      <div className="mt-10 grid gap-6">
        {challenges.map((challenge) => (
          <article
            key={challenge.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold text-lg">{challenge.title}</h3>

            <p className="mt-3 text-muted-foreground leading-7">
              {challenge.solution}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
