"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INITIAL_ITEMS = [
  "Three.js Patterns",
  "React Server Components",
  "TypeScript 5.7",
  "Next.js App Router",
  "Tailwind v4",
  "WebGL Shaders",
];

export default function RealtimeActivity() {
  const [ref, visible] = useScrollReveal();
  const [count, setCount] = useState(8);
  const [recentIdx, setRecentIdx] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setCount(3 + Math.floor(Math.random() * 12));
    }, 4200);
    return () => clearInterval(interval);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setRecentIdx((p) => (p + 1) % INITIAL_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [visible]);

  const recentlyViewed = INITIAL_ITEMS.slice(recentIdx, recentIdx + 4);

  return (
    <section id="activity" ref={ref} style={{ padding: "100px 0", backgroundColor: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 32 }}>06 / REALTIME ACTIVITY</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
          {/* Live Counter */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
            <div className="label-mono" style={{ marginBottom: 8 }}>VISITORS NOW</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
              {count}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)", marginTop: 8 }}>
              <span className="status-dot" style={{ backgroundColor: "var(--green)", marginRight: 6 }} />
              LIVE
            </div>
          </div>

          {/* Recently Viewed */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.15s" }}>
            <div className="label-mono" style={{ marginBottom: 8 }}>RECENTLY VIEWED</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {recentlyViewed.map((item, i) => (
                <div key={`${item}-${i}`} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", opacity: 1 - i * 0.2, animation: "fadeIn 0.4s ease forwards" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Connection */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.3s" }}>
            <div className="label-mono" style={{ marginBottom: 8 }}>CONNECTION</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", lineHeight: 2 }}>
              <div>Status: <span style={{ color: "var(--green)" }}>Connected</span></div>
              <div>Latency: <span style={{ color: "var(--text)" }}>24ms</span></div>
              <div>Region: <span style={{ color: "var(--text)" }}>SGP-1</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}