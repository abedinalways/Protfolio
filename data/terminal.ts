export interface TerminalLine {
  type: "cmd" | "out" | "blank";
  text: string;
}

export const TERMINAL_LINES: TerminalLine[] = [
  { type: "cmd", text: "$ whoami" },
  { type: "out", text: "minhaj — frontend developer, open source enthusiast" },
  { type: "blank", text: "" },
  { type: "cmd", text: "$ cat skills.txt" },
  { type: "out", text: "React · Next.js · TypeScript · Node.js · GraphQL" },
  { type: "blank", text: "" },
  { type: "cmd", text: "$ ls projects/" },
  { type: "out", text: "ecommerce/  ai-dashboard/  social-app/  design-system/" },
  { type: "blank", text: "" },
  { type: "cmd", text: "$ uptime" },
  { type: "out", text: "coding since 2019 — 5+ years of building for the web" },
];