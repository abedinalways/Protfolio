"use client";

import { useMemo, useState } from "react";
import { REPOS, formatDate } from "@/data/repos";
import { PROFILE } from "@/data/profile";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import {
  RepoIcon,
  SearchIcon,
  PlusIcon,
  SortIcon,
  ChevronDownIcon,
  StarIcon,
  ForkIcon,
} from "./icons";

const PER_PAGE = 30;

export default function RepositoriesPanel() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const ref = useGsapReveal<HTMLDivElement>(0.03);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? REPOS.filter(
          (r) =>
            r.name.toLowerCase().includes(q) ||
            r.description.toLowerCase().includes(q)
        )
      : REPOS;
  }, [query]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice(
    (current - 1) * PER_PAGE,
    current * PER_PAGE
  );

  return (
    <div ref={ref}>
      {/* toolbar */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="mr-auto text-[16px] font-semibold">
          Repositories{" "}
          <span className="gh-counter ml-1">{PROFILE.repositories}</span>
        </h1>
        <div className="flex w-full gap-2 sm:w-auto">
          <label className="relative flex-1 sm:w-72 sm:flex-none">
            <SearchIcon
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Find a repository…"
              className="w-full rounded-md border border-border bg-bg-raised py-[6px] pl-9 pr-3 text-[14px] text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
            />
          </label>
          <button className="gh-btn gh-btn-primary shrink-0">
            <PlusIcon size={16} />
            New
          </button>
        </div>
        <div className="hidden gap-2 md:flex">
          {["Type", "Language", "Sort"].map((f) => (
            <button key={f} className="gh-btn text-text-muted">
              {f}
              {f === "Sort" ? <SortIcon size={16} /> : <ChevronDownIcon size={16} />}
            </button>
          ))}
        </div>
      </div>

      {/* list */}
      <div className="gh-box overflow-hidden">
        {visible.length === 0 && (
          <p className="p-8 text-center text-[14px] text-text-muted">
            No repositories matched “{query}”.
          </p>
        )}
        {visible.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="repo-list-item block"
            data-reveal
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <RepoIcon size={16} className="text-text-muted" />
              <span className="text-[20px] font-semibold text-accent hover:underline">
                {repo.name}
              </span>
              <span className="rounded-full border border-border px-2 text-[11px] leading-5 text-text-muted">
                Public
              </span>
              <span className="ml-auto text-[12px] text-text-dim">
                Updated on {formatDate(repo.updated)}
              </span>
            </div>

            {repo.description && (
              <p className="mt-2 line-clamp-2 max-w-[85%] text-[14px] leading-5 text-text-muted">
                {repo.description}
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-text-muted">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="lang-dot"
                    style={{ background: repo.color, width: 10, height: 10 }}
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
        ))}
      </div>

      {/* pagination */}
      {pages > 1 && (
        <nav
          className="mt-4 flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          <button
            className="gh-btn gh-btn-sm"
            disabled={current === 1}
            onClick={() => {
              setPage(current - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ opacity: current === 1 ? 0.5 : 1 }}
          >
            Previous
          </button>
          <span className="px-2 text-[13px] text-text-muted">
            Page {current} of {pages}
          </span>
          <button
            className="gh-btn gh-btn-sm"
            disabled={current === pages}
            onClick={() => {
              setPage(current + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ opacity: current === pages ? 0.5 : 1 }}
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}