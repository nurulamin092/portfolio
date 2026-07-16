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

    gallery: [
      {
        title: "Home Page",
        image: "/projects/ecospark/home.png",
      },
      {
        title: "Ideas Feed",
        image: "/projects/ecospark/ideas.png",
      },
      {
        title: "Payment",
        image: "/projects/ecospark/payment.png",
      },
      {
        title: "Admin Dashboard",
        image: "/projects/ecospark/admin.png",
      },
    ],

    technologies: [
      {
        name: "Next.js 16",
        category: "Frontend",
      },
      {
        name: "React 19",
        category: "Frontend",
      },
      {
        name: "TypeScript",
        category: "Frontend",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
      },
      {
        name: "Express.js",
        category: "Backend",
      },
      {
        name: "PostgreSQL",
        category: "Database",
      },
      {
        name: "Prisma ORM",
        category: "ORM",
      },
      {
        name: "JWT",
        category: "Authentication",
      },
      {
        name: "Stripe",
        category: "Payment",
      },
    ],

    features: [
      "JWT Authentication",
      "Role Based Access",
      "Stripe Payment",
      "Admin Dashboard",
      "Idea Publishing",
      "Premium Content",
    ],

    overview:
      "EcoSpark Hub is a full-stack platform where users can publish sustainability ideas, interact with the community, and unlock premium content through secure payments.",

    problem:
      "Many sustainability platforms focus only on content publishing and lack community engagement, premium features, and scalable administration.",

    solution:
      "EcoSpark Hub introduces role-based access, premium content, secure authentication, idea voting, Stripe payments, and a powerful admin dashboard to provide a complete ecosystem.",

    challenges: [
      {
        title: "Implementing secure role-based authentication",
        solution:
          "Designed JWT authentication with role-based middleware and protected API routes.",
      },

      {
        title: "Building nested comments",
        solution:
          "Implemented recursive comment rendering with parent-child relationships.",
      },

      {
        title: "Managing complex Prisma relations",
        solution:
          "Optimized schema design and used Prisma relations for scalable queries.",
      },

      {
        title: "Payment integration",
        solution:
          "Integrated Stripe Checkout and verified payments securely on the backend.",
      },
    ],

    learnings: [
      "Scalable folder architecture",
      "Repository & Service Layer",
      "React Query best practices",
      "Authentication flow design",
      "Prisma relation modeling",
    ],

    repository: {
      client: "https://github.com/nurulamin092/ecospark-client",
      server: "https://github.com/nurulamin092/ecospark-server",
    },

    liveUrl: "https://your-domain.com",

    featured: true,

    year: "2026",

    status: "Completed",

    role: "Full Stack Developer",

    duration: "8 Weeks",
  },
];
