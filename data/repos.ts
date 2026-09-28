import { REPO_LIST_1, type RepoTuple } from "./repoList1";
import { REPO_LIST_2 } from "./repoList2";

export interface Repo {
  name: string;
  description: string;
  language: string;
  color: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
}

export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00add8",
  "C++": "#f34b7d",
  Blade: "#f05340",
  Python: "#3572A5",
  Vue: "#41b883",
  SCSS: "#c6538c",
};

/** Real descriptions pulled from the GitHub API (repos not listed have none). */
const REPO_DESCRIPTIONS: Record<string, string> = {
  "QuickLance-Client":
    "QuickLance is a freelance service platform where users can browse freelancers, add services, and manage them. This is the frontend of the project built using React and Tailwind CSS.",
  "Lawyer-Appointment-Booking-App":
    "A modern and responsive web application for booking appointments with lawyers. Built with React, styled using Tailwind CSS and DaisyUI, and enhanced with Framer Motion, Recharts, and React Icons for a smooth and interactive user experience.",
  "Sohay-App":
    "Sohay is a modern, user-friendly mobile banking Single Page Application (SPA) that brings essential and advanced banking services to your fingertips. From seamless bill payments to micro-credit services, Sohay empowers users — especially in rural and semi-urban areas — with easy, fast, and secure digital financial transactions.",
  "StackMind-Client":
    "This is the frontend for the StackMind Web Blog platform, built with React. It provides a responsive user interface to browse blogs, post content, manage user accounts, and interact with the backend APIs.",
  "Tea-house-web": "Tea-shop landing page with TailwindCSS",
  "Intro-To-Tailwind": "Tailwind introduction — built something with Tailwind.",
  "JavaScript-concept": "Basic concepts of JavaScript",
  "Assignment02-A2-Kids-School": "A2 Kids School Website",
  "Function-C-": "Concept of DSA with C++ (function)",
  Patterns: "Data Structures & Algorithms",
  assignment001: "Bangladesh 2.0",
  "my-first-Repository": "Live website",
  "Tic-Tac-Toe": "Tic-Tac-Toe game using HTML, CSS and JavaScript",
};

const GH = "https://github.com/abedinalways/";

function toRepo([name, language, stars, forks, updated]: RepoTuple): Repo {
  return {
    name,
    description: REPO_DESCRIPTIONS[name] ?? "",
    language,
    color: LANG_COLORS[language] ?? "",
    stars,
    forks,
    updated,
    url: GH + name,
  };
}

/** Every public repo, most recently updated first. */
export const REPOS: Repo[] = [...REPO_LIST_1, ...REPO_LIST_2].map(toRepo);

/** The six pinned repository cards on the profile overview. */
export const PINNED_REPOS: Repo[] = [
  "QuickLance-Client",
  "Lawyer-Appointment-Booking-App",
  "Sohay-App",
  "StackMind-Client",
  "E-commerce-App",
  "Job-autofill-extension",
].map((name) => {
  const repo = REPOS.find((r) => r.name === name);
  if (!repo) throw new Error(`Pinned repo missing: ${name}`);
  return repo;
});

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}