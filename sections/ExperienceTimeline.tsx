"use client";

import { TIMELINE } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ExperienceTimeline() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" ref={ref} style={{ padding: "120px 0", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 48 }}>07 / EXPERIENCE</div>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Line */}
          <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)" }} />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              style={{
                position: "relative",
                paddingLeft: 32,
                paddingBottom: 48,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.15}s`,
              }}
            >
              {/* Dot */}
              <div style={{ position: "absolute", left: 0, top: 4, width: 15, height: 15, borderRadius: "50%", border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border-strong)"}`, backgroundColor: i === 0 ? "var(--accent)" : "var(--bg)" }} />

              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 8 }}>
                {item.year}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                {item.role}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>
                @ {item.company}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16, maxWidth: 600 }}>
                {item.desc}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {item.tech.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 8px", borderRadius: 4, border: "1px solid var(--border)", color: "var(--text-dim)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}