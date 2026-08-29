"use client";

"use client";

import { EXPERIMENTS } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Lab() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="lab" ref={ref} style={{ padding: "120px 0", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 48 }}>05 / LAB</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {EXPERIMENTS.map((exp, i) => (
            <div
              key={exp.id}
              className="card"
              style={{
                padding: 28,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.08}s`,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = exp.color;
                e.currentTarget.style.boxShadow = `0 8px 32px ${exp.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "absolute", top: 16, right: 20, fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 800, color: "var(--text-dim)", opacity: 0.08 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: exp.color, marginBottom: 16 }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                {exp.title}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: exp.color, letterSpacing: "0.05em", marginBottom: 12 }}>
                {exp.tech}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
                {exp.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}