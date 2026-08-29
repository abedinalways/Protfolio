export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard.",
    stack: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
    accent: "#6366f1",
    year: "2024",
  },
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    category: "Frontend",
    description:
      "Real-time data visualization dashboard with ML-powered insights and interactive charts.",
    stack: ["React", "D3.js", "Python", "FastAPI", "WebSocket"],
    accent: "#8b5cf6",
    year: "2024",
  },
  {
    id: "social-app",
    title: "Social Collaboration App",
    category: "Full Stack",
    description:
      "Team collaboration platform with real-time messaging, file sharing, and video calls.",
    stack: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "AWS"],
    accent: "#06b6d4",
    year: "2023",
  },
  {
    id: "design-system",
    title: "Component Design System",
    category: "Open Source",
    description:
      "A comprehensive design system with 50+ components, documentation, and Figma integration.",
    stack: ["React", "Storybook", "TypeScript", "Radix UI"],
    accent: "#f59e0b",
    year: "2023",
  },
];