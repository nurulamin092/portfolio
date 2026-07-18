import type { Project } from "@/types/project";
export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "ORM"
  | "Styling"
  | "Authentication"
  | "Payment"
  | "API"
  | "Tool";

export interface Technology {
  name: string;
  category: TechnologyCategory;
}

export const projects: Project[] = [
  {
    id: "ecospark",

    slug: "ecospark-hub",

    title: "EcoSpark Hub",

    shortDescription: "Full Stack Sustainability Platform",

    description:
      "A production-ready sustainability platform where users can publish ideas, vote, comment, purchase premium content, and interact through a modern community-driven ecosystem.",

    image: "/projects/ecospark/home.png",

    gallery: [
      {
        title: "Home Page",

        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      },
      {
        title: "Ideas Feed",
        image: "/projects/ecospark/ideas.png",
      },
      {
        title: "Premium Payment",
        image: "/projects/ecospark/payment.png",
      },
      {
        title: "Admin Dashboard",
        image: "/projects/ecospark/admin.png",
      },
    ],

    technologies: [
      { name: "Next.js 16", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Express.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Prisma ORM", category: "ORM" },
      { name: "JWT", category: "Authentication" },
      { name: "Stripe", category: "Payment" },
    ],

    features: [
      "Authentication",
      "Role Based Access",
      "Premium Ideas",
      "Stripe Payment",
      "Nested Comments",
      "Voting System",
      "Admin Dashboard",
      "Bookmark System",
    ],

    overview:
      "A complete SaaS-style sustainability platform with authentication, premium content, payments, community engagement, and admin management.",

    problem:
      "Most sustainability communities lack premium content, moderation tools, and scalable architecture.",

    solution:
      "Built a modern full-stack application with secure authentication, Stripe payments, role-based authorization, and community features.",

    challenges: [
      {
        title: "Complex Authorization",
        solution: "Implemented JWT authentication with role-based middleware.",
      },
      {
        title: "Nested Comments",
        solution: "Designed recursive comment architecture.",
      },
      {
        title: "Payment Integration",
        solution: "Integrated secure Stripe Checkout flow.",
      },
      {
        title: "Database Relations",
        solution: "Optimized Prisma relational schema.",
      },
    ],

    learnings: [
      "Scalable Architecture",
      "JWT Security",
      "Repository Pattern",
      "React Query",
      "Prisma Relations",
    ],

    repository: {
      client: "https://github.com/nurulamin092/eco-spark-hub-client",
      server: "https://github.com/nurulamin092/EcoSpark-Hub-Server.git",
    },

    liveUrl: "https://eco-spark-hub-client-eta.vercel.app",

    featured: true,

    year: "2026",

    status: "Completed",

    role: "Full Stack Developer",

    duration: "8 Weeks",
  },
  {
    id: "skillbridge",

    slug: "skillbridge",

    title: "SkillBridge",

    shortDescription: "Tutor Booking Platform",

    description:
      "A modern tutor booking platform where students can discover tutors, schedule sessions, manage bookings, and interact through a responsive user experience.",

    image: "/projects/skill/home.png",

    gallery: [],

    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js", category: "Backend" },
      { name: "MongoDB", category: "Database" },
    ],

    features: [
      "Authentication",
      "Tutor Profiles",
      "Booking System",
      "Search & Filter",
      "Dashboard",
      "Responsive UI",
    ],

    overview:
      "A complete tutoring platform connecting students and tutors with booking and profile management.",

    problem:
      "Finding qualified tutors and managing bookings efficiently is often difficult.",

    solution:
      "Developed a booking platform with tutor management, authentication, and responsive UI.",

    challenges: [],

    learnings: [
      "Authentication",
      "Filtering",
      "Responsive Design",
      "Dashboard UI",
    ],

    repository: {
      client: "https://github.com/nurulamin092/skill-bridge-web-client.git",
      server: "https://github.com/nurulamin092/skill-bridge-web-server.git",
    },

    liveUrl: "https://skill-bridge-web-client.vercel.app",

    featured: true,

    year: "2025",

    status: "Completed",

    role: "Full Stack Developer",

    duration: "6 Weeks",
  },
  {
    id: "moviedb",

    slug: "movie-db",

    title: "MovieDB",

    shortDescription: "Movie Discovery Application",

    description:
      "A movie browsing application powered by TMDB API where users can search movies, explore trending titles, and view detailed movie information.",

    image: "/projects/movie/home.png",

    gallery: [],

    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "TMDB API", category: "API" },
    ],

    features: [
      "Trending Movies",
      "Movie Search",
      "Movie Details",
      "Responsive Design",
      "API Integration",
    ],

    overview: "A modern movie discovery application built with TMDB API.",

    problem: "Users need a fast interface to explore and search movies.",

    solution:
      "Integrated TMDB API with a responsive frontend for seamless movie discovery.",

    challenges: [],

    learnings: ["API Integration", "Dynamic Routing", "Search Optimization"],

    repository: {
      client: "https://github.com/nurulamin092/the_movie_db.git",
    },

    liveUrl: "https://the-movie-db-pi.vercel.app",

    featured: false,

    year: "2025",

    status: "Completed",

    role: "Frontend Developer",

    duration: "1 Week",
  },
];
