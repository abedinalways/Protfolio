/** Contribution-activity feed + starred repositories (real GitHub data). */
export interface ActivityItem {
  icon: "commit" | "repo" | "org" | "star" | "book";
  text: string;
}

export interface ActivityMonth {
  month: string;
  year: string;
  items: ActivityItem[];
}

export const ACTIVITY: ActivityMonth[] = [
  {
    month: "September",
    year: "2026",
    items: [
      { icon: "commit", text: "Created 117 commits in 19 repositories" },
      { icon: "repo", text: "Created 10 repositories" },
      {
        icon: "commit",
        text: "Contributed to backbencherstudio/amrounds and 68 other repositories",
      },
    ],
  },
  {
    month: "October",
    year: "2025",
    items: [
      {
        icon: "org",
        text: "Started a new position as Jr. Frontend Engineer at Softvence Delta",
      },
      {
        icon: "repo",
        text: "Shipped ITBA Expo 2027, FleetOS, TableRounds & Kreatovate to production",
      },
    ],
  },
  {
    month: "September",
    year: "2025",
    items: [
      {
        icon: "star",
        text: "StackMind-Client reached 2 stars and was pinned to the profile",
      },
      {
        icon: "org",
        text: "Completed internship as Frontend Developer at Kryzotech Solutions",
      },
    ],
  },
  {
    month: "June",
    year: "2024",
    items: [
      {
        icon: "org",
        text: "Started a new position as Frontend Developer (Intern) at Kryzotech Solutions",
      },
      {
        icon: "repo",
        text: "Built CYBRS and Waffless with Next.js, TypeScript and Tailwind CSS",
      },
    ],
  },
  {
    month: "August",
    year: "2024",
    items: [
      {
        icon: "commit",
        text: "Made first contribution — 2,616 contributions since Aug 20, 2024",
      },
    ],
  },
];

export interface StarredRepo {
  fullName: string;
  description: string;
  language: string;
  color: string;
  stars: number;
  url: string;
}

export const STARRED: StarredRepo[] = [
  {
    fullName: "Complete-Coding/JavaScript_Complete_YouTube",
    description: "Complete JavaScript course repository",
    language: "HTML",
    color: "#e34c26",
    stars: 177,
    url: "https://github.com/Complete-Coding/JavaScript_Complete_YouTube",
  },
  {
    fullName: "shovoalways/Remote-First-Companies",
    description: "Here are some of my favorite companies I want to work on…",
    language: "",
    color: "",
    stars: 547,
    url: "https://github.com/shovoalways/Remote-First-Companies",
  },
  {
    fullName: "aiQuest-Intelligence/SQL-For-Everybody",
    description:
      "Full course to learn database engineering. aiQuest Intelligence (aiquest.org)",
    language: "",
    color: "",
    stars: 45,
    url: "https://github.com/aiQuest-Intelligence/SQL-For-Everybody",
  },
  {
    fullName: "ProgrammingHero1/B10-responsive-web-dev-portfolio",
    description: "Responsive web developer portfolio assignment",
    language: "HTML",
    color: "#e34c26",
    stars: 5,
    url: "https://github.com/ProgrammingHero1/B10-responsive-web-dev-portfolio",
  },
  {
    fullName: "alshohid/skillswap-pwa",
    description: "Skill swap progressive web app",
    language: "TypeScript",
    color: "#3178c6",
    stars: 2,
    url: "https://github.com/alshohid/skillswap-pwa",
  },
  {
    fullName: "abedinalways/StackMind-Client",
    description: "Frontend for the StackMind Web Blog platform, built with React.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 2,
    url: "https://github.com/abedinalways/StackMind-Client",
  },
  {
    fullName: "abedinalways/QuickLance-Client",
    description: "Freelance service platform frontend built with React.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/QuickLance-Client",
  },
  {
    fullName: "abedinalways/Sohay-App",
    description: "Mobile banking single page application.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/Sohay-App",
  },
  {
    fullName: "abedinalways/StackMind-Server",
    description: "Backend API for the StackMind blog platform.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/StackMind-Server",
  },
  {
    fullName: "abedinalways/QuickLance-Server",
    description: "Backend API for the QuickLance marketplace.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/QuickLance-Server",
  },
  {
    fullName: "abedinalways/My_Portfolio",
    description: "Portfolio website built with Next.js and TypeScript.",
    language: "TypeScript",
    color: "#3178c6",
    stars: 1,
    url: "https://github.com/abedinalways/My_Portfolio",
  },
  {
    fullName: "abedinalways/Quize-App-Demo",
    description: "Quiz application demo",
    language: "TypeScript",
    color: "#3178c6",
    stars: 1,
    url: "https://github.com/abedinalways/Quize-App-Demo",
  },
  {
    fullName: "abedinalways/E-commerce-App",
    description: "E-commerce application",
    language: "TypeScript",
    color: "#3178c6",
    stars: 1,
    url: "https://github.com/abedinalways/E-commerce-App",
  },
  {
    fullName: "abedinalways/Job-autofill-extension",
    description: "Browser extension that auto-fills job applications.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/Job-autofill-extension",
  },
  {
    fullName: "abedinalways/MERN-interview-app",
    description: "MERN stack interview preparation app.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/MERN-interview-app",
  },
  {
    fullName: "abedinalways/Abedin_Portfolio",
    description: "Earlier version of the portfolio website.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/Abedin_Portfolio",
  },
  {
    fullName: "abedinalways/TechHub-Client",
    description: "TechHub client application",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/abedinalways/TechHub-Client",
  },
];
