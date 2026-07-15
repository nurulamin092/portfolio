import { CheckCircle2 } from "lucide-react";

interface Props {
  features: string[];
}

export default function ProjectFeatures({ features }: Props) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-400" />

          <span className="text-sm text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  );
}
