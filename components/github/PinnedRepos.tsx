"use client";

import { PINNED_REPOS } from "@/data/repos";
import { useGsapReveal, useMagnetic } from "@/hooks/useGsapReveal";
import { RepoIcon, StarIcon, ForkIcon } from "./icons";

export default function PinnedRepos() {
  const ref = useGsapReveal<HTMLDivElement>(0.1);

  return (
    <section className="mt-6" ref={ref} aria-label="Pinned repositories">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-text">Pinned</h2>
        <button className="text-[12px] font-medium text-accent hover:underline transition-colors">
          Customize your pins
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PINNED_REPOS.map((repo, i) => (
          <RepoCard key={repo.name} repo={repo} index={i} />
        ))}
      </div>
    </section>
  );
}

function RepoCard({ repo, index }: { repo: any; index: number }) {
  const cardRef = useMagnetic<HTMLAnchorElement>(0.1);

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="repo-card interactive-card"
      data-reveal
      data-reveal-type="scale"
      ref={cardRef}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-2">
        <RepoIcon size={16} className="shrink-0 text-text-muted" />
        <span className="truncate text-[14px] font-semibold text-accent">
          {repo.name}
        </span>
        <span
          className="ml-auto shrink-0 rounded-full border border-border px-2 text-[11px] leading-5 text-text-muted"
          style={{ fontSize: 11 }}
        >
          Public
        </span>
        <span
          className="shrink-0 cursor-grab text-text-dim"
          aria-hidden
          title="Drag to reorder"
        >
          ⠿
        </span>
      </div>

      <p className="line-clamp-3 min-h-[54px] text-[12px] leading-[18px] text-text-muted">
        {repo.description || "\u00A0"}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-[12px] text-text-muted">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="lang-dot"
              style={{ background: repo.color }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <StarIcon size={14} />
          {repo.stars}
        </span>
        <span className="flex items-center gap-1.5">
          <ForkIcon size={14} />
          {repo.forks}
        </span>
      </div>
    </a>
  );
}