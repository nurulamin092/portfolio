export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "ORM"
  | "Authentication"
  | "Payment"
  | "Styling"
  | "Deployment"
  | "Tool"
  | "API";

export interface Technology {
  name: string;
  category: TechnologyCategory;
}

export interface ProjectImage {
  title: string;
  image: string;
}

export interface Challenge {
  title: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  image: string;
  gallery: ProjectImage[];

  technologies: Technology[];

  features: string[];

  overview: string;
  problem: string;
  solution: string;
  challenges: Challenge[];
  learnings: string[];
  repository: {
    client: string;
    server?: string;
  };

  liveUrl?: string;

  featured: boolean;

  year: string;
  status: "Completed" | "In Progress";
  role: string;
  duration: string;
}
