import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteConfig } from "@/config/site";

export const contactData = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },

  {
    title: "GitHub",
    value: "github.com/nurulamin092",
    href: siteConfig.social.github.url,
    icon: FaGithub,
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/mnurulamin",
    href: siteConfig.social.linkedin.url,
    icon: FaLinkedin,
  },

  {
    title: "Resume",
    value: "Download Resume",
    href: siteConfig.social.resume.url,
    icon: FileText,
  },
] as const;
