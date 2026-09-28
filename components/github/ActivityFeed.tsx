"use client";

import { ACTIVITY } from "@/data/activity";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import {
  CommitIcon,
  RepoIcon,
  OrganizationIcon,
  StarIcon,
} from "./icons";

const ICONS = {
  commit: <CommitIcon size={16} />,
  repo: <RepoIcon size={16} />,
  org: <OrganizationIcon size={16} />,
  star: <StarIcon size={16} />,
  book: <RepoIcon size={16} />,
};

export default function ActivityFeed() {
  const ref = useGsapReveal<HTMLDivElement>(0.06);

  return (
    <section className="mt-8" ref={ref} aria-label="Contribution activity">
      <h2 className="mb-4 text-[16px] font-semibold text-text">
        Contribution activity
      </h2>

      <div className="gh-box p-4 md:p-6">
        {ACTIVITY.map((month) => (
          <div key={month.month + month.year} className="mb-6 last:mb-0">
            <h3 className="mb-4 text-[14px] font-semibold text-text">
              {month.month} <span className="text-text-muted">{month.year}</span>
            </h3>

            <div className="flex flex-col gap-4">
              {month.items.map((item) => (
                <div
                  key={item.text}
                  className="activity-item flex items-start gap-3 pb-4 last:pb-0"
                  data-reveal
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg-raised text-text-muted"
                    aria-hidden
                  >
                    {ICONS[item.icon]}
                  </span>
                  <p className="pt-1.5 text-[14px] leading-5 text-text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="gh-btn gh-btn-block mt-2">
          Show more activity
        </button>
      </div>
    </section>
  );
}