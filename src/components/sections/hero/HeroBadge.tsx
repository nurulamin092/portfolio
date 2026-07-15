import { BadgeCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
      <BadgeCheck className="size-4" />
      Available for Work
    </div>
  );
}
