"use client";

import { useApp, type ProfileTab } from "@/lib/providers";
import { NAV_TABS } from "@/data/profile";
import { scrollToTop } from "@/lib/scroll";
import {
  BookIcon,
  RepoIcon,
  TableIcon,
  PackageIcon,
  StarIcon,
} from "./icons";

const TAB_ICONS: Record<string, React.ReactNode> = {
  overview: <BookIcon size={16} />,
  repositories: <RepoIcon size={16} />,
  projects: <TableIcon size={16} />,
  packages: <PackageIcon size={16} />,
  stars: <StarIcon size={16} />,
};

export default function ProfileNav() {
  const { tab, setTab } = useApp();

  const select = (id: string) => {
    setTab(id as ProfileTab);
    scrollToTop();
  };

  return (
    <div className="gh-nav">
      <div className="gh-container">
        <div className="gh-nav-list py-1 md:gap-2">
          {NAV_TABS.map((t) => (
            <button
              key={t.id}
              className="gh-tab"
              aria-current={tab === t.id ? "page" : undefined}
              onClick={() => select(t.id)}
            >
              <span className="text-text-muted">{TAB_ICONS[t.id]}</span>
              {t.label}
              {t.count !== null && (
                <span className="gh-counter">{t.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}