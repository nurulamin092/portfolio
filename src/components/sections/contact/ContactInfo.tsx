import { contactData } from "@/data/contact";
import ContactCard from "./ContactCard";

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {contactData.map((item) => {
        const href = typeof item.href === "string" ? item.href : item.href.url;

        return (
          <ContactCard
            key={item.title}
            title={item.title}
            value={item.value}
            href={href}
            icon={<item.icon className="size-5" />}
          />
        );
      })}
    </div>
  );
}
