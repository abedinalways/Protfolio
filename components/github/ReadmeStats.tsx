import { PROFILE, STATS, TOP_LANGUAGES } from "@/data/profile";
import { StarIcon } from "./icons";

const CONNECT = [
  { label: "LINKEDIN", href: PROFILE.linkedin, bg: "#0a66c2" },
  { label: "GITHUB", href: PROFILE.github, bg: "#33383d" },
  { label: "PORTFOLIO", href: PROFILE.website, bg: "#cf222e" },
  { label: "FACEBOOK", href: PROFILE.facebook, bg: "#0866ff" },
  { label: "EMAIL", href: `mailto:${PROFILE.email}`, bg: "#1f6feb" },
];

function StatCard({
  value,
  label,
  sub,
  accent,
}: {
  value: number;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 px-3 py-4 text-center">
      <span
        className={`text-[28px] font-bold leading-none ${
          accent ? "text-[#e36209]" : "text-text"
        }`}
        data-count={value}
      >
        0
      </span>
      <span
        className={`text-[13px] font-semibold ${
          accent ? "text-[#e36209]" : "text-text"
        }`}
      >
        {label}
      </span>
      <span className="text-[11px] text-text-dim">{sub}</span>
    </div>
  );
}

export function ConnectWithMe() {
  return (
    <section className="mt-8">
      <hr className="mb-6 border-border" />
      <h2 className="mb-4 text-[24px] font-semibold">🌐 Connect with Me</h2>
      <div className="flex flex-wrap gap-2">
        {CONNECT.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="rounded-[3px] px-3 py-1.5 text-[12px] font-bold tracking-wide text-white transition hover:brightness-110"
            style={{ background: c.bg }}
            data-reveal
          >
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export function GitHubStats() {
  const total = Object.values(TOP_LANGUAGES).reduce(
    (sum, l) => sum + l.pct,
    0
  );

  return (
    <section className="mt-8">
      <hr className="mb-6 border-border" />
      <h2 className="mb-4 text-[24px] font-semibold">
        📊 GitHub Stats &amp; Activity
      </h2>

      {/* stat cards */}
      <div className="gh-box flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
        <StatCard
          value={STATS.totalContributions}
          label="Total Contributions"
          sub={`${STATS.contributionSince} – Present`}
        />
        <StatCard
          value={STATS.currentStreak}
          label="Current Streak"
          sub={STATS.currentStreakRange}
          accent
        />
        <StatCard
          value={STATS.longestStreak}
          label="Longest Streak"
          sub={STATS.longestStreakRange}
        />
      </div>

      {/* top languages */}
      <div className="gh-box mt-4 p-4">
        <h3 className="mb-3 text-[14px] font-semibold">Top Languages</h3>
        <div
          className="flex h-3 w-full overflow-hidden rounded-full"
          role="img"
          aria-label="Top languages by repository usage"
        >
          {TOP_LANGUAGES.map((l) => (
            <span
              key={l.name}
              style={{ width: `${(l.pct / total) * 100}%`, background: l.color }}
              title={`${l.name} ${l.pct}%`}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {TOP_LANGUAGES.map((l) => (
            <span
              key={l.name}
              className="flex items-center gap-1.5 text-[12px] text-text-muted"
            >
              <span
                className="lang-dot"
                style={{ background: l.color, width: 10, height: 10 }}
              />
              {l.name}
              <span className="text-text-dim">{l.pct}%</span>
            </span>
          ))}
        </div>
      </div>

      {/* quick facts */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { n: PROFILE.repositories, l: "Repositories" },
          { n: STATS.yearContributions, l: "Contributions / year" },
          { n: PROFILE.followers, l: "Followers" },
          { n: PROFILE.stars, l: "Stars" },
        ].map((f) => (
          <div
            key={f.l}
            className="rounded-md border border-border bg-bg-raised px-3 py-3 text-center"
          >
            <div className="text-[20px] font-bold text-text">
              <span data-count={f.n}>0</span>
            </div>
            <div className="mt-0.5 flex items-center justify-center gap-1 text-[11px] text-text-muted">
              {f.l === "Stars" && <StarIcon size={12} />}
              {f.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
