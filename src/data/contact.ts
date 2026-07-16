import { siteConfig } from "@/config/site";

export const contactData = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },

  {
    title: "GitHub",
    value: "github.com/nurulamin092",
    href: siteConfig.github,
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/mnurulamin",
    href: siteConfig.linkedin,
  },

  {
    title: "Resume",
    value: "Download Resume",
    href: siteConfig.resume,
  },
];
