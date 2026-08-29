"use client";

"use client";

import { useState } from "react";
import { UNDER_THE_HOOD, PROJECTS } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TABS = ["COMPONENTS", "API", "STATE"] as const;
type Tab = (typeof TABS)[number];

const SYNTAX_COLORS: Record<string, string> = {
  component: "var(--accent-light)",
  route: "var(--green)",
  comment: "var(--text-dim)",
  default: "var(--text-muted)",
};

function getLineColor(line: string): string {
  if (line.startsWith("//") || line.startsWith("/*")) return SYNTAX_COLORS.comment;
  if (line.includes("export const") || line.includes("export function")) return SYNTAX_COLORS.component;
  if (line.includes("return await") || line.includes("return <")) return SYNTAX_COLORS.route;
  return SYNTAX_COLORS.default;
}

export default function UnderTheHood() {
  const [ref, visible] = useScrollReveal();
  const [activeTab, setActiveTab] = useState<Tab>("COMPONENTS");
  const projectIds = Object.keys(UNDER_THE_HOOD);
  const [activeProject, setActiveProject] = useState(projectIds[0]);
  const lines = UNDER_THE_HOOD[activeProject]?.[activeTab] || [];

  return (
    <section id="hood" ref={ref} style={{ padding: "120px 0", backgroundColor: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 32 }}>04 / UNDER THE HOOD</div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
          {/* Project Selector */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            {projectIds.map((pid) => {
              const proj = PROJECTS.find((p) => p.id === pid);
              return (
                <button key={pid} onClick={() => setActiveProject(pid)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "6px 14px", borderRadius: 6, border: "1px solid var(--border-strong)", backgroundColor: activeProject === pid ? "var(--accent-glow-s)" : "transparent", color: activeProject === pid ? "var(--accent)" : "var(--text-muted)", cursor: "pointer", transition: "all 0.2s ease" }}>
                  {proj?.title || pid}
                </button>
              );
            })}
          </div>

          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span>{activeProject} — {activeTab.toLowerCase()}</span>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--border)", padding: "0 16px" }}>
              {TABS.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", padding: "12px 16px", background: "none", border: "none", borderBottom: activeTab === tab ? "2px solid var(--accent)" : "2px solid transparent", color: activeTab === tab ? "var(--accent)" : "var(--text-dim)", cursor: "pointer", transition: "all 0.2s ease" }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Code */}
            <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 2, minHeight: 160 }}>
              {lines.map((line, i) => (
                <div key={i} style={{ color: getLineColor(line), animation: `slideRight 0.4s ease ${i * 0.05}s both` }}>
                  {line || "\u00A0"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}