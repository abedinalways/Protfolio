"use client";

"use client";

import { useState } from "react";
import { PROJECTS } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectShowcase() {
  const [ref, visible] = useScrollReveal();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" ref={ref} style={{ padding: "120px 0", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 48 }}>03 / WORK</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {PROJECTS.map((project, i) => {
            const isOpen = expanded === project.id;
            return (
              <div
                key={project.id}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 0.1}s`,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : project.id)}
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: 24,
                    alignItems: "center",
                    padding: "28px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                      {project.title}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.05em" }}>
                      {project.category} · {project.year}
                    </div>
                  </div>
                  <span style={{ fontSize: 20, color: "var(--text-muted)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>+</span>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 0 28px 84px" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20, maxWidth: 600 }}>
                      {project.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                      {project.stack.map((tech) => (
                        <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "4px 10px", borderRadius: 4, border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 12 }}>
                      <button className="btn-primary" style={{ fontSize: 10, padding: "10px 20px" }}>LIVE DEMO</button>
                      <button className="btn-ghost" style={{ fontSize: 10, padding: "10px 20px" }}>CASE STUDY</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}