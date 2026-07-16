import Link from "next/link";

import { contactData } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {contactData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target="_blank"
          className="block rounded-2xl border border-border bg-card p-5 transition hover:border-violet-500"
        >
          <p className="text-sm text-muted-foreground">{item.title}</p>

          <h3 className="mt-1 font-semibold">{item.value}</h3>
        </Link>
      ))}
    </div>
  );
}
