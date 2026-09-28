"use client";

import { useMemo, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

const WEEKS = 53;
const MONTH_LABELS = [
  "Oct", "Nov", "Dec", "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul", "Aug", "Sep",
];

/** Deterministic pseudo-random so the graph is stable across renders. */
function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

interface Cell {
  level: number;
  count: number;
  title: string;
}

function buildCells(): Cell[] {
  const rng = makeRng(20260927);
  const end = new Date();
  const total = WEEKS * 7;
  const cells: Cell[] = [];

  for (let i = 0; i < total; i++) {
    const daysFromEnd = total - 1 - i;
    const date = new Date(end);
    date.setDate(end.getDate() - daysFromEnd);
    const dow = date.getDay(); // 0 Sun … 6 Sat

    let level = 0;
    const roll = rng();
    if (dow === 0 || dow === 6) {
      if (roll > 0.42) level = 1 + Math.floor(rng() * 4);
    } else if (roll > 0.52) {
      level = 1 + Math.floor(rng() * 3);
    }

    // honour the live streak from the résumé stats (last N days active)
    if (daysFromEnd < STATS.currentStreak) {
      level = Math.max(level, 2);
    }

    const count = level === 0 ? 0 : Math.floor(rng() * 6) + level;
    cells.push({
      level,
      count,
      title: `${count} contribution${count === 1 ? "" : "s"} on ${date.toLocaleDateString(
        "en-US",
        { month: "short", day: "numeric", year: "numeric" }
      )}`,
    });
  }
  return cells;
}

export default function ContributionGraph() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cells = useMemo(() => buildCells(), []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".contrib-cell", {
        scale: 0,
        opacity: 0,
        transformOrigin: "center",
        duration: 0.35,
        ease: "back.out(2)",
        stagger: { each: 0.0018, from: "start", grid: "auto" },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="gh-box mt-6 p-4 md:p-6" aria-label="Contributions">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[16px] font-semibold text-text">
          {STATS.yearContributions.toLocaleString("en-US")} contributions in the
          last year
        </h2>
        <div className="flex items-center gap-2">
          <button className="gh-btn gh-btn-sm text-text-muted">
            Contribution settings
          </button>
          <div className="hidden gap-1 sm:flex">
            {["2026", "2025", "2024"].map((y, i) => (
              <button
                key={y}
                className="gh-btn gh-btn-sm"
                style={
                  i === 0
                    ? { background: "#1f6feb", color: "#fff", borderColor: "#1f6feb" }
                    : undefined
                }
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="contrib-scroll">
        <div className="min-w-[720px]">
          {/* month labels */}
          <div className="mb-1 ml-9 flex text-[10px] text-text-muted">
            {MONTH_LABELS.map((m, i) => (
              <span key={m + i} style={{ width: `${100 / 12}%` }}>
                {m}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {/* day labels */}
            <div className="flex w-7 flex-col gap-[3px] pt-[1px] text-[10px] text-text-muted">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <span key={i} className="h-[11px] leading-[11px]">
                  {d}
                </span>
              ))}
            </div>

            <div className="contrib-grid" ref={gridRef}>
              {cells.map((c, i) => (
                <span
                  key={i}
                  className={`contrib-cell${c.level ? ` l${c.level}` : ""}`}
                  title={c.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-text-muted">
        <button className="hover:text-accent">
          Learn how we count contributions
        </button>
        <div className="flex items-center gap-1.5">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className={`contrib-cell${l ? ` l${l}` : ""}`}
              aria-hidden
            />
          ))}
          More
        </div>
      </div>
    </section>
  );
}