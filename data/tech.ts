export interface TechNode {
  id: string;
  label: string;
  x: number;
  y: number;
  ring: number;
}

export const TECH_NODES: TechNode[] = [
  { id: "react", label: "React", x: 350, y: 120, ring: 0 },
  { id: "nextjs", label: "Next.js", x: 500, y: 200, ring: 0 },
  { id: "typescript", label: "TypeScript", x: 450, y: 340, ring: 0 },
  { id: "tailwind", label: "Tailwind", x: 250, y: 180, ring: 0 },
  { id: "nodejs", label: "Node.js", x: 200, y: 320, ring: 0 },
  { id: "graphql", label: "GraphQL", x: 580, y: 380, ring: 1 },
  { id: "postgresql", label: "PostgreSQL", x: 120, y: 420, ring: 1 },
  { id: "redis", label: "Redis", x: 620, y: 260, ring: 1 },
  { id: "docker", label: "Docker", x: 80, y: 240, ring: 2 },
  { id: "aws", label: "AWS", x: 660, y: 160, ring: 2 },
  { id: "figma", label: "Figma", x: 100, y: 120, ring: 2 },
  { id: "git", label: "Git", x: 680, y: 440, ring: 2 },
];

export const TECH_EDGES: [string, string][] = [
  ["react", "nextjs"],
  ["react", "typescript"],
  ["nextjs", "typescript"],
  ["tailwind", "react"],
  ["nodejs", "graphql"],
  ["nodejs", "postgresql"],
  ["redis", "nodejs"],
  ["docker", "aws"],
  ["graphql", "postgresql"],
  ["figma", "tailwind"],
  ["git", "docker"],
];

export const TECH_INFO: Record<string, { desc: string; uses: string[] }> = {
  react: { desc: "Component-based UI library", uses: ["SPAs", "Mobile", "Desktop"] },
  nextjs: { desc: "Production React framework", uses: ["SSR", "SSG", "API Routes"] },
  typescript: { desc: "Type-safe JavaScript", uses: ["Better DX", "Fewer Bugs"] },
  tailwind: { desc: "Utility-first CSS", uses: ["Rapid UI", "Design System"] },
  nodejs: { desc: "Server-side JavaScript", uses: ["APIs", "Real-time", "Tools"] },
};