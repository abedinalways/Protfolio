/* ═══════════════════════════════════════════════════════════
   Portfolio data — sourced from Sheikh Minhajul Abedin's résumé
   and the live github.com/abedinalways profile.
   ═══════════════════════════════════════════════════════════ */

export interface Skill {
  name: string;
  color: string;
}

export interface JobBullet {
  text: string;
  tech?: string[];
}

export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  bullets: JobBullet[];
}

export interface Education {
  degree: string;
  school: string;
  session: string;
  gpa: string;
}

export const PROFILE = {
  fullName: "Sheikh Minhajul Abedin",
  username: "abedinalways",
  name: "Abedin",
  title: "Jr. Frontend Engineer",
  company: "Softvence Delta",
  tagline:
    "Jr. Frontend Engineer @ Softvence Delta — building scalable, production-grade web apps with React, Next.js & TypeScript.",
  location: "Dhaka, Bangladesh",
  email: "sheikh.minhajul1205045@gmail.com",
  phone: "+880-01303002784",
  website: "https://abedin.vercel.app",
  github: "https://github.com/abedinalways",
  linkedin: "https://www.linkedin.com/in/sheikh-minhajul-abedin",
  facebook: "https://www.facebook.com/Abedin.always",
  avatar: "https://github.com/abedinalways.png?size=460",
  resume: "/resume.pdf",
  followers: 8,
  following: 30,
  repositories: 125,
  stars: 17,
  projects: 0,
  packages: 0,
  achievements: 3,
} as const;

export const STATS = {
  totalContributions: 2616,
  contributionSince: "Aug 20, 2024",
  currentStreak: 6,
  currentStreakRange: "Sep 21 – Sep 26",
  longestStreak: 29,
  longestStreakRange: "Aug 22 – Sep 19",
  yearContributions: 2077,
  visitors: 2305,
  commitsThisMonth: 117,
  reposThisMonth: 10,
  reposWorkedOn: 19,
  otherRepos: 68,
} as const;

export const SUMMARY =
  "Frontend Software Developer with 2.5 years of professional experience designing, building, and maintaining scalable, production-grade web applications using React, Next.js, and TypeScript. Hands-on experience with backend development using NestJS, PostgreSQL, SQL, Prisma and Docker, with a strong focus on modular architecture, reusable design patterns, API development and performance optimization.";

export const ABOUT_BULLETS: string[] = [
  "🔭 Building ITBA Expo 2027, FleetOS & TableRounds at Softvence Delta",
  "🚀 2.5 years of professional experience shipping production-grade React & Next.js apps",
  "⚙️ Hands-on backend work with NestJS, PostgreSQL, Prisma & Docker",
  "🌱 Leveling up with DSA in C++, system design and data visualization (D3.js)",
  "🎓 M.Sc. in Farm Structure & Environmental Engineering — BAU, Mymensingh",
  "💬 Ask me about React, Next.js, TypeScript or Vue / Nuxt",
];

export const SKILL_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: "Programming & Web",
    skills: [
      { name: "JavaScript", color: "#f1e05a" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "React.js", color: "#61dafb" },
      { name: "Next.js", color: "#ffffff" },
      { name: "Vue.js", color: "#41b883" },
      { name: "Nuxt.js", color: "#00dc82" },
      { name: "HTML5", color: "#e34c26" },
      { name: "CSS3", color: "#563d7c" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", color: "#5fa04e" },
      { name: "NestJS", color: "#e0234e" },
      { name: "SQL", color: "#4479a1" },
      { name: "PostgreSQL", color: "#4169e1" },
      { name: "Prisma", color: "#5a67d8" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Mongoose", color: "#880000" },
      { name: "Redis", color: "#ff4438" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Docker", color: "#2496ed" },
      { name: "Git", color: "#f05032" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "GSAP", color: "#88ce02" },
      { name: "Vercel", color: "#8b949e" },
      { name: "Problem Solving", color: "#a371f7" },
    ],
  },
];

export const EXPERIENCE: Job[] = [
  {
    role: "Jr. Frontend Engineer",
    company: "Softvence Delta",
    period: "Oct 2025 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    bullets: [
      {
        text: "ITBA Expo 2027 — exhibition stand booking platform",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
      },
      {
        text: "FleetOS — multi-tenant logistics management platform PWA",
        tech: ["React", "Next.js", "TypeScript"],
      },
      {
        text: "TableRounds — full-stack quiz platform with rich-text editing",
        tech: ["React", "Next.js", "Nest.js", "TipTap", "GSAP"],
      },
      {
        text: "Kreatovate — AI marketing & consulting platform",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
      },
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Kryzotech Solutions",
    period: "Jun 2024 – Sep 2025",
    location: "Bangladesh",
    type: "Internship",
    bullets: [
      {
        text: "CYBRS — cybersecurity platform",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        text: "Waffless — client & editor marketplace",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        text: "R&D for new feature implementation; collaborated with the team to choose solutions.",
      },
      {
        text: "Handled client communication and production support.",
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc. in Farm Structure and Environmental Engineering",
    school: "Bangladesh Agricultural University (BAU), Mymensingh",
    session: "Session 2017 – 19",
    gpa: "GPA 3.44 / 4.00",
  },
  {
    degree: "B.Sc. in Agricultural Engineering & Technology",
    school: "Bangladesh Agricultural University (BAU), Mymensingh",
    session: "Session 2012 – 17",
    gpa: "GPA 3.22 / 4.00",
  },
];

export const TOP_LANGUAGES = [
  { name: "TypeScript", pct: 38, color: "#3178c6" },
  { name: "JavaScript", pct: 31, color: "#f1e05a" },
  { name: "HTML", pct: 12, color: "#e34c26" },
  { name: "CSS", pct: 9, color: "#563d7c" },
  { name: "Go", pct: 5, color: "#00add8" },
  { name: "C++", pct: 5, color: "#f34b7d" },
];

export const SPOKEN_LANGUAGE =
  "English — Reading: High · Writing: High · Speaking: Medium";

export const ACHIEVEMENTS = [
  { emoji: "🦈", title: "Pull Shark" },
  { emoji: "⚡", title: "Quickdraw" },
  { emoji: "⭐", title: "Star Struck" },
];

export const NAV_TABS = [
  { id: "overview", label: "Overview", count: null as number | null },
  { id: "repositories", label: "Repositories", count: PROFILE.repositories },
  { id: "projects", label: "Projects", count: PROFILE.projects },
  { id: "packages", label: "Packages", count: PROFILE.packages },
  { id: "stars", label: "Stars", count: PROFILE.stars },
];

