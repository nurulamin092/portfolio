import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ecospark",

    slug: "ecospark-hub",

    title: "EcoSpark Hub",

    shortDescription: "Modern Sustainability Platform",

    description:
      "EcoSpark Hub is a production-ready full-stack sustainability platform where users can discover, publish, and monetize eco-friendly ideas with secure authentication, role-based access, and premium features.",

    image: "/projects/ecospark.png",

    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
    ],

    features: [
      "JWT Authentication",
      "Role Based Access",
      "Stripe Payment",
      "Admin Dashboard",
      "Idea Publishing",
      "Premium Content",
    ],

    repository: {
      client: "https://github.com/nurulamin092/ecospark-client",
      server: "https://github.com/nurulamin092/ecospark-server",
    },

    liveUrl: "https://your-domain.com",

    featured: true,
  },
];
