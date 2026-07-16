import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/common/card";

interface ContactCardProps {
  title: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

export default function ContactCard({
  title,
  value,
  href,
  icon,
}: ContactCardProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Card
        variant="glass"
        padding="md"
        className="group flex items-center justify-between hover:-translate-y-1
hover:border-violet-500/50
hover:shadow-xl
transition-all
duration-300"
      >
        <div className="flex items-center gap-4">
          <div
            className="flex size-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500
group-hover:text-white"
          >
            {icon}
          </div>

          <div>
            <p className="text-sm text-muted-foreground">{title}</p>

            <h3 className="mt-1 font-semibold">{value}</h3>
          </div>
        </div>

        <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:text-violet-400 group-hover:rotate-45" />
      </Card>
    </Link>
  );
}
