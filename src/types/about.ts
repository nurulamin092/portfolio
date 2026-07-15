export interface AboutData {
  title: string;
  subtitle: string;
  description: string;

  highlights: string[];

  stats: {
    label: string;
    value: string;
  }[];
}
