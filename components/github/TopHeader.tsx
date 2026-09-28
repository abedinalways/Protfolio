"use client";

import { useState } from "react";
import Image from "next/image";
import { useApp, type ProfileTab } from "@/lib/providers";
import { PROFILE, NAV_TABS } from "@/data/profile";
import { scrollToTop } from "@/lib/scroll";
import {
  MarkGitHub,
  SearchIcon,
  PlusIcon,
  ChevronDownIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
  DownloadIcon,
  MailIcon,
} from "./icons";

const DRAWER_LINKS = [
  { label: "Résumé (PDF)", href: PROFILE.resume, icon: "download" },
  { label: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: "mail" },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: "link" },
  { label: "Portfolio", href: PROFILE.website, icon: "link" },
];

export default function TopHeader() {
  const { isDark, toggleTheme, setCmdOpen, tab, setTab } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const goTab = (id: string) => {
    setTab(id as ProfileTab);
    setDrawerOpen(false);
    scrollToTop();
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-border"
        style={{ background: "var(--header-bg)", height: "var(--header-h)" }}
      >
        <div className="flex h-full items-center gap-2 px-4 md:gap-4 md:px-6">
          <button
            className="gh-btn-icon md:hidden"
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon size={22} />
          </button>

          <button
            className="flex items-center gap-2 text-text"
            onClick={scrollToTop}
            aria-label="Home"
          >
            <MarkGitHub size={32} className="text-text" />
            <span className="hidden text-[16px] font-semibold sm:inline">
              {PROFILE.username}
            </span>
          </button>

          <div className="ml-auto flex items-center gap-2 md:ml-4 md:flex-1 md:justify-center">
            <button
              className="gh-search tip"
              data-tip="Search"
              onClick={() => setCmdOpen(true)}
              aria-label="Search"
            >
              <SearchIcon size={16} />
              <span className="flex-1 text-left">Type / to search</span>
              <kbd>/</kbd>
            </button>

            <button
              className="gh-btn-icon md:hidden"
              aria-label="Search"
              onClick={() => setCmdOpen(true)}
            >
              <SearchIcon size={18} />
            </button>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            <button className="gh-btn-icon tip flex gap-0.5" data-tip="Create new">
              <PlusIcon size={16} />
              <ChevronDownIcon size={14} />
            </button>
            <button className="gh-btn-icon tip" data-tip="Issues">
              <IssueOpenedIcon size={16} />
            </button>
            <button className="gh-btn-icon tip" data-tip="Pull requests">
              <GitPullRequestIcon size={16} />
            </button>
            <button className="gh-btn-icon tip" data-tip="Notifications">
              <BellIcon size={16} />
            </button>
            <span
              className="mx-2 h-6 w-px"
              style={{ background: "var(--border)" }}
            />
          </div>

          <button
            className="gh-btn-icon tip"
            data-tip={isDark ? "Light mode" : "Dark mode"}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>

          <button
            className="ml-1 rounded-full ring-offset-2 ring-offset-[var(--header-bg)] transition hover:ring-2 hover:ring-accent"
            aria-label="Profile"
            onClick={scrollToTop}
          >
            <Image
              src={PROFILE.avatar}
              alt={PROFILE.fullName}
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
          </button>
        </div>
      </header>


      {drawerOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <nav className="drawer-panel" aria-label="Mobile navigation">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MarkGitHub size={28} />
                <span className="text-[15px] font-semibold">
                  {PROFILE.username}
                </span>
              </div>
              <button
                className="gh-btn-icon"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-1 border-t border-border pt-4">
              {NAV_TABS.map((t) => (
                <button
                  key={t.id}
                  className="gh-tab justify-start"
                  aria-current={tab === t.id ? "page" : undefined}
                  onClick={() => goTab(t.id)}
                >
                  {t.label}
                  {t.count !== null && (
                    <span className="gh-counter ml-auto">{t.count}</span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-1 border-t border-border pt-4">
              <span className="label-mono mb-2">Contact</span>
              {DRAWER_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-text-muted hover:bg-hover hover:text-text"
                  onClick={() => setDrawerOpen(false)}
                >
                  {l.icon === "download" ? (
                    <DownloadIcon size={16} />
                  ) : l.icon === "mail" ? (
                    <MailIcon size={16} />
                  ) : (
                    <span className="text-accent">↗</span>
                  )}
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}