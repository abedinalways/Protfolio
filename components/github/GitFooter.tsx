import { PROFILE } from "@/data/profile";
import { MarkGitHub } from "./icons";

const LINKS = [
  "Terms",
  "Privacy",
  "Security",
  "Status",
  "Community",
  "Docs",
  "Contact",
  "Manage cookies",
  "Do not share my personal information",
];

export default function GitFooter() {
  return (
    <footer className="mt-12 border-t border-border py-6">
      <div className="gh-container flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <div className="flex items-center gap-2 text-text-muted">
          <MarkGitHub size={24} />
          <span className="text-[12px]">
            © {new Date().getFullYear()} {PROFILE.username}. Built with Next.js,
            GSAP &amp; Lenis.
          </span>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:ml-auto"
          aria-label="Footer"
        >
          {LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[12px] text-text-muted transition hover:text-accent"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
