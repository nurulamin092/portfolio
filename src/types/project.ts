export interface Project {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  image: string;
  gallery?: string[];

  technologies: string[];
  features: string[];

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
