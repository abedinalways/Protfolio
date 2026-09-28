"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useApp, type ProfileTab } from "@/lib/providers";
import { PROFILE } from "@/data/profile";
import { scrollToId } from "@/lib/scroll";
import {
  SearchIcon,
  RepoIcon,
  BookIcon,
  StarIcon,
  TableIcon,
  PackageIcon,
  MailIcon,
  DownloadIcon,
} from "./github/icons";

interface Command {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  run: () => void;
}

export default function CommandPalette() {
  const { cmdOpen, setCmdOpen, setTab } = useApp();
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevOpen = useRef(false);

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "overview",
        label: "Go to Overview",
        hint: "tab",
        icon: <BookIcon size={16} />,
        run: () => setTab("overview"),
      },
      {
        id: "repos",
        label: "Go to Repositories",
        hint: "125",
        icon: <RepoIcon size={16} />,
        run: () => setTab("repositories" as ProfileTab),
      },
      {
        id: "stars",
        label: "Go to Stars",
        hint: "17",
        icon: <StarIcon size={16} />,
        run: () => setTab("stars" as ProfileTab),
      },
      {
        id: "projects",
        label: "Go to Projects",
        icon: <TableIcon size={16} />,
        run: () => setTab("projects" as ProfileTab),
      },
      {
        id: "packages",
        label: "Go to Packages",
        icon: <PackageIcon size={16} />,
        run: () => setTab("packages" as ProfileTab),
      },
      {
        id: "readme",
        label: "Jump to README",
        hint: "about",
        icon: <BookIcon size={16} />,
        run: () => {
          setTab("overview");
          setTimeout(() => scrollToId("readme"), 60);
        },
      },
      {
        id: "email",
        label: `Email ${PROFILE.email}`,
        icon: <MailIcon size={16} />,
        run: () => window.open(`mailto:${PROFILE.email}`, "_blank"),
      },
      {
        id: "resume",
        label: "Download résumé (PDF)",
        icon: <DownloadIcon size={16} />,
        run: () => window.open(PROFILE.resume, "_blank"),
      },
      {
        id: "github",
        label: "Open github.com/abedinalways",
        icon: <RepoIcon size={16} />,
        run: () => window.open(PROFILE.github, "_blank"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn profile",
        icon: <RepoIcon size={16} />,
        run: () => window.open(PROFILE.linkedin, "_blank"),
      },
    ],
    [setTab]
  );

  const filtered = useMemo(
    () =>
      commands.filter((c) =>
        c.label.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [commands, query]
  );

  useEffect(() => {
    if (cmdOpen && !prevOpen.current) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    prevOpen.current = cmdOpen;
  }, [cmdOpen]);

  useEffect(() => {
    if (!cmdOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[activeIdx]) {
        filtered[activeIdx].run();
        setCmdOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cmdOpen, filtered, activeIdx, setCmdOpen]);

  if (!cmdOpen) return null;

  return (
    <div
      className="cmdk-overlay"
      onClick={() => setCmdOpen(false)}
      role="presentation"
    >
      <div
        className="cmdk-panel mx-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <SearchIcon size={16} className="text-text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIdx(0);
            }}
            placeholder="Type a command or search…"
            className="w-full bg-transparent text-[14px] text-text placeholder:text-text-muted focus:outline-none"
          />
          <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-text-muted">
            esc
          </kbd>
        </div>

        <div className="max-h-[320px] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-[13px] text-text-muted">
              No results found.
            </p>
          )}
          {filtered.map((c, i) => (
            <button
              key={c.id}
              className="cmdk-item"
              data-active={i === activeIdx}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => {
                c.run();
                setCmdOpen(false);
              }}
            >
              <span className="text-text-muted">{c.icon}</span>
              {c.label}
              {c.hint && <span className="cmdk-hint">{c.hint}</span>}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-text-dim">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
          <span className="ml-auto">GitHub-style command palette</span>
        </div>
      </div>
    </div>
  );
}
