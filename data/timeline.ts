export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  desc: string;
  tech: string[];
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    desc: "Leading the frontend architecture for a SaaS platform serving 100k+ users.",
    tech: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "StartupXYZ",
    desc: "Built the core product from scratch, scaling from 0 to 50k users in 6 months.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    year: "2022",
    role: "Junior Developer",
    company: "Digital Agency",
    desc: "Developed responsive websites and web apps for various clients.",
    tech: ["JavaScript", "React", "CSS", "WordPress"],
  },
];